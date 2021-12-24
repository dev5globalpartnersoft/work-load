// Hooks
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslations } from 'languages';

// Utils
import { deepSearchKey } from '../deepSearchKey';
import { getFieldError } from 'utils/getFieldError';

export const useFieldErrorT = (fieldName = '', rules = {}, baseTPath = 'formErrors') => {
  const t = useTranslations(baseTPath);
  const form = useFormContext() || {};

  return useMemo(() => {
    const fieldError = getFieldError(fieldName, form);
    const { type: ruleName = '', message: fieldMessage = '' } = fieldError;

    const fieldRule = deepSearchKey(rules, ruleName);
    const value = fieldRule?.value || fieldRule || '';

    const message = fieldMessage || t(ruleName, { [ruleName]: value });

    return { type: ruleName, message };
  }, [fieldName, form, rules, t]);
};
