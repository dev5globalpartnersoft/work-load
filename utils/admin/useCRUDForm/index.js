// Hooks
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// Utils
import deepFilter from 'deep-filter';

const defFn = v => v;

export const useCRUDForm = ({
  action = '',
  crud = {},
  table = {},
  onSubmit: propOnSubmit = defFn,
  onError: propOnError = defFn,
  valuesTransform = defFn,
  ...formOptions
} = {}) => {
  const {
    selectedRows = [],
    selectedRowKeys,
    hasSelected,
    isMultiSelected,
    mode,
    setMode = () => {},
    setSelectedRows = () => {},
  } = table;
  const selectedRow = selectedRows?.[0] || {};

  const isCurrentAction = mode === action;
  const isCreateAction = action === 'create';
  const isEditAction = action === 'edit';
  const isDeleteAction = action === 'delete';
  const isMultiAction = isEditAction || isDeleteAction;
  const isMultiSelectedAction = isMultiAction && isMultiSelected;

  const { recordsQuery = {}, createQuery = {}, editQuery = {}, deleteQuery = {} } = crud;
  const { refetch: refetchRecords = () => {} } = recordsQuery;
  const { mutateAsync: createSend = () => {} } = createQuery;
  const { mutateAsync: editSend = () => {} } = editQuery;
  const { mutateAsync: deleteSend = () => {} } = deleteQuery;

  const actionSend = useCallback(
    params => {
      if (isCreateAction) return createSend(params);
      if (isEditAction) return editSend(params);
      if (isDeleteAction) return deleteSend(params);
    },
    [action, createSend, editSend, deleteSend]
  );

  const form = useForm({ shouldUnregister: false, defaultValues: {}, ...formOptions });
  const {
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting },
  } = form;

  useEffect(() => {
    if (isCurrentAction) {
      if (hasSelected && !isDirty) {
        if (isMultiSelectedAction) {
          return reset({ selectedRowKeys });
        }

        reset(selectedRow);
      }
    }
  }, [selectedRows, action, mode]);

  const onSubmit = useCallback(
    async (values = {}) => {
      console.log('crud form submit values', values, form);

      const transformedValues = valuesTransform(values);
      const { selectedRowKeys, ...otherValues } = transformedValues;
      propOnSubmit(values, transformedValues);

      const actionsBefore = [];
      const actionsAfter = [];
      const actionsBeforeResults = [];
      const actionsAfterResults = [];
      const valuesWithoutActions = deepFilter(otherValues, value => {
        if (typeof value === 'function') {
          const actionObj = value();
          const { actionOrder = '', actionFn } = actionObj;

          if (actionOrder === 'before' && typeof actionFn === 'function') {
            actionsBefore.push(actionObj);
          }

          if (actionOrder === 'after' && typeof actionFn === 'function') {
            actionsAfter.push(actionObj);
          }

          return false;
        }
        return true;
      });

      let valuesTransformedByActions = valuesWithoutActions;

      try {
        // Multi CRUD
        if (selectedRowKeys && isMultiAction) {
          const requests = [];

          // Execute actions before multiple form submit
          for (let a of actionsBefore) {
            const { actionFn = v => v, value, params = {} } = a;
            valuesTransformedByActions = await actionFn(
              value,
              valuesTransformedByActions,
              params
            );
          }

          selectedRowKeys.forEach(id => {
            requests.push(actionSend({ id, ...valuesTransformedByActions }));
          });

          const responses = await Promise.allSettled(requests);

          // Execute actions after multiple form submit
          if (actionsAfter.length) {
            for (let r of responses) {
              for (let a of actionsAfter) {
                const { actionFn = () => {}, value, params = {} } = a;
                await actionFn(value, r, params);
              }
            }
          } // Single CRUD
        } else {
          // Execute actions before form submit
          for (let a of actionsBefore) {
            const { actionFn = v => v, value, params = {} } = a;
            valuesTransformedByActions = await actionFn(
              value,
              valuesTransformedByActions,
              params
            );
          }

          const response = await actionSend(valuesTransformedByActions);

          // Execute actions after form submit
          for (let a of actionsAfter) {
            const { actionFn = () => {}, value, params = {} } = a;
            actionsAfterResults.push(await actionFn(value, response, params));
          }
        }

        refetchRecords();
        setMode('table');
        setSelectedRows([]);
      } catch (e) {
        console.error(e);
        refetchRecords();
      }
    },
    [actionSend, isMultiAction, refetchRecords, setMode, setSelectedRows, valuesTransform]
  );

  const onError = useCallback((...args) => {
    console.log('form submit error', args);
    propOnError();
  }, []);

  return {
    ...form,
    onSubmit: handleSubmit(onSubmit, onError),
    isCurrentAction,
    isCreateAction,
    isEditAction,
    isDeleteAction,
    isMultiAction,
    isMultiSelected,
    isMultiSelectedAction,
    isSubmitting,
  };
};
