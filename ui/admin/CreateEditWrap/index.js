import dynamic from 'next/dynamic';

// Styles
import { FormWrap } from 'ui/admin/CreateEditWrap/style';

// Hooks
import { FormProvider } from 'react-hook-form';
import { useCRUDForm } from 'utils/admin/useCRUDForm';

// Dynamic components
const MultiActionWarn = dynamic(() =>
  import('./components/MultiActionWarn').then(m => m.MultiActionWarn)
);

const DefComponent = () => '';

export const CreateEditWrap = ({
  PageComponent = DefComponent,
  action = 'create',
  form = {},
  crud = {},
  table = {},
  ...props
}) => {
  const { selectedRowKeys } = table;
  const crudForm = useCRUDForm({ crud, table, action, ...form });
  const { onSubmit, isMultiSelectedAction } = crudForm;

  return (
    <FormProvider crud={crud} table={table} {...crudForm}>
      <FormWrap
        crud={crud}
        table={table}
        crudForm={crudForm}
        onSubmit={onSubmit}
        {...props}
      >
        {isMultiSelectedAction && <MultiActionWarn items={selectedRowKeys} />}
        <PageComponent crud={crud} table={table} />
      </FormWrap>
    </FormProvider>
  );
};
