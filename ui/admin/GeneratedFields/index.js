// Styles
import { memo, useMemo } from 'react';
import { RowWrap, Stub } from 'ui/admin/GeneratedFields/style';

// Hooks
import { useTranslations } from 'languages';
import { useFormContext } from 'react-hook-form';

export const GeneratedFields = memo(({ fields: propFields, ...props }) => {
  const t = useTranslations();
  const { crud = {}, table = {}, ...crudForm } = useFormContext();

  const fields = useMemo(() => {
    let result = propFields;
    if (typeof propFields === 'function') {
      result = propFields({ crud, table, crudForm, t });
    }

    return result?.length ? result : [];
  }, [propFields, crud, table, crudForm, t]);

  return fields.map((fieldsRow, index) => {
    if (!Array.isArray(fieldsRow)) {
      return '';
    }

    return (
      <RowWrap $count={fieldsRow.length} key={index}>
        {fieldsRow.map((field = {}, innerIndex) => {
          const key = `${index}_${innerIndex}`;
          const {
            Component = Stub,
            row,
            label = '',
            placeholder = label,
            ...fieldProps
          } = field;

          return (
            <Component
              table={table}
              crud={crud}
              crudForm={crudForm}
              t={t}
              key={key}
              label={label}
              placeholder={placeholder}
              {...fieldProps}
            />
          );
        })}
      </RowWrap>
    );
  });
});
