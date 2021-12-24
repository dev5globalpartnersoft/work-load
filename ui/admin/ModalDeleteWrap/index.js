// Styles
import { StyledModal, FormWrap } from './style';

// Hooks
import { useCallback } from 'react';
import { FormProvider } from 'react-hook-form';
import { useCRUDForm } from 'utils/admin/useCRUDForm';

const DefComponent = () => '';

export const ModalDeleteWrap = ({
  PageComponent = DefComponent,
  action = 'delete',
  crud = {},
  table = {},
  modal = {},
  visible = false,
  ...props
}) => {
  const { setMode = () => {} } = table;
  const crudForm = useCRUDForm({ crud, table, action });
  const { onSubmit } = crudForm;

  const handleModalCancel = useCallback(() => setMode('table'), [setMode]);

  return (
    <StyledModal
      closable={false}
      visible={visible}
      onCancel={handleModalCancel}
      {...modal}
    >
      <FormProvider crud={crud} table={table} {...crudForm}>
        <FormWrap
          crud={crud}
          table={table}
          crudForm={crudForm}
          onSubmit={onSubmit}
          {...props}
        >
          <PageComponent crud={crud} table={table} />
        </FormWrap>
      </FormProvider>
    </StyledModal>
  );
};
