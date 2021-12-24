import { useMemo, useCallback } from 'react';

// Hooks
import { useLoadAnchor } from 'utils/hooks/useLoadAnchor';
import { useNotification } from 'ui/Notification/useNotification';
import { useAuthData } from 'api/auth/useAuthData';

// Api
import {
  useGetAllRecords,
  useCreateAction,
  useEditAction,
  useDeleteAction,
} from 'api/admin/crudHooks';

// Utils
import { decorateObjMethods } from 'utils/decorateFn/decorateObjMethods';

// Configuration
export const CREATE = 'create';
export const EDIT = 'edit';
export const DELETE = 'delete';

const defCommonParams = {};
const defGetParams = {};
const defCreateParams = {};
const defEditParams = {};
const defDeleteParams = {};

const defDataLoaderOptions = {};
const defCommonOptions = {};
const defGetOptions = {};
const defCreateOptions = {};
const defEditOptions = {};
const defDeleteOptions = {};

const defOnSuccessAction = () => {};
const defOnErrorAction = () => {};

export const useCRUD = ({
  entity = '',
  rowKey = 'id',
  idKey = rowKey,
  commonParams = defCommonParams,
  getParams: getP = defGetParams,
  createParams: createP = defCreateParams,
  editParams: editP = defEditParams,
  deleteParams: deleteP = defDeleteParams,

  dataLoaderOptions = defDataLoaderOptions,
  commonOptions = defCommonOptions,
  getOptions: getOpt = defGetOptions,
  createOptions: createOpt = defCreateOptions,
  editOptions: editOpt = defEditOptions,
  deleteOptions: deleteOpt = defDeleteOptions,

  reFetchOnSuccess = false,
  reFetchOnError = false,
  onSuccessAction = defOnSuccessAction,
  onErrorAction = defOnErrorAction,

  showNotifications = true,
  showSuccessNotifications = showNotifications,
  showErrorNotifications = showNotifications,
} = {}) => {
  // Get user information
  const userData = useAuthData();
  const { roles: userRoles = {} } = userData;

  const [crudNotification, crudNotificationContext] = useNotification({
    basePath: 'crudNotifications',
  });

  // Params extending
  const getParams = useMemo(() => ({ ...commonParams, ...getP }), [commonParams, getP]);

  const createParams = useMemo(
    () => ({ ...commonParams, ...createP }),
    [commonParams, createP]
  );

  const editParams = useMemo(
    () => ({ ...commonParams, ...editP }),
    [commonParams, editP]
  );

  const deleteParams = useMemo(
    () => ({ ...commonParams, ...deleteP }),
    [commonParams, deleteP]
  );

  const getOptions = useMemo(
    () => ({ entity, ...commonOptions, ...getOpt }),
    [entity, getOpt, commonOptions]
  );

  const recordsQuery = useLoadAnchor(useGetAllRecords, {
    ...dataLoaderOptions,
    params: getParams,
    options: getOptions,
  });
  const { refetch: refetchRecords = () => {} } = recordsQuery;

  const createHandleSuccessAction = useCallback(
    (action = '') =>
      (...args) => {
        if (reFetchOnSuccess) {
          refetchRecords();
        }

        if (showSuccessNotifications) {
          const [, request = {}] = args;
          const { [idKey]: id = '' } = request;

          crudNotification.success({
            message: `Success ${action} action ${
              id ? `with the ${idKey}: ${id} record` : ''
            }`,
          });
        }

        onSuccessAction(...args);
      },
    [refetchRecords, reFetchOnSuccess, onSuccessAction, showSuccessNotifications]
  );

  const createHandleErrorAction = useCallback(
    (action = '') =>
      (...args) => {
        if (reFetchOnError) {
          refetchRecords();
        }

        if (showErrorNotifications) {
          const [error = {}, request = {}] = args;
          const { message = '' } = error;
          const { [idKey]: id = '' } = request;

          crudNotification.error({
            message: `An error occured during the ${action} action ${
              id ? `with the ${idKey}: ${id} record` : ''
            }`,
            description: message,
          });
        }

        onErrorAction(...args);
      },
    [
      idKey,
      onErrorAction,
      crudNotification,
      reFetchOnError,
      refetchRecords,
      showErrorNotifications,
    ]
  );

  const createOptions = useMemo(
    () =>
      decorateObjMethods({ entity, ...commonOptions, ...createOpt }, [
        ['onSuccess', createHandleSuccessAction(CREATE)],
        ['onError', createHandleErrorAction(CREATE)],
      ]),
    [
      entity,
      idKey,
      commonOptions,
      createOpt,
      refetchRecords,
      createHandleSuccessAction,
      createHandleErrorAction,
    ]
  );

  const editOptions = useMemo(
    () =>
      decorateObjMethods({ entity, ...commonOptions, ...editOpt }, [
        ['onSuccess', createHandleSuccessAction(EDIT)],
        ['onError', createHandleErrorAction(EDIT)],
      ]),
    [
      entity,
      commonOptions,
      editOpt,
      refetchRecords,
      createHandleSuccessAction,
      createHandleErrorAction,
    ]
  );

  const deleteOptions = useMemo(
    () =>
      decorateObjMethods({ entity, ...commonOptions, ...deleteOpt }, [
        ['onSuccess', createHandleSuccessAction(DELETE)],
        ['onError', createHandleErrorAction(DELETE)],
      ]),
    [
      entity,
      commonOptions,
      deleteOpt,
      refetchRecords,
      createHandleSuccessAction,
      createHandleErrorAction,
    ]
  );

  const createQuery = useCreateAction(createOptions, createParams);
  const editQuery = useEditAction(editOptions, editParams);
  const deleteQuery = useDeleteAction(deleteOptions, deleteParams);
  const { isFetching: isRecordsLoading } = recordsQuery;
  const { isLoading: isCreateLoading } = createQuery;
  const { isLoading: isEditLoading } = editQuery;
  const { isLoading: isDeleteLoading } = deleteQuery;
  const isActionLoading = isCreateLoading || isEditLoading || isDeleteLoading;

  return {
    entity,

    commonParams,
    getParams,
    createParams,
    editParams,
    deleteParams,

    dataLoaderOptions,
    getOptions,
    createOptions,
    editOptions,
    deleteOptions,

    recordsQuery,
    createQuery,
    editQuery,
    deleteQuery,

    isRecordsLoading,
    isCreateLoading,
    isEditLoading,
    isDeleteLoading,
    isActionLoading,

    crudNotification,
    crudNotificationContext,

    userData,
    ...userRoles,
  };
};
