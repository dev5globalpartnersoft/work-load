// Hooks
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

// Utils
import { getFieldError } from 'utils/getFieldError';

export const useFieldError = (fieldName = '') => {
  const form = useFormContext() || {};
  console.log('fieldName', fieldName);
  return useMemo(() => getFieldError(fieldName, form), [fieldName, form]);
};
