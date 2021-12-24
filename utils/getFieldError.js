// Utils
import { deepSearchKey } from 'utils/deepSearchKey';

export const getFieldError = (fieldName = '', form = {}) => {
  const { formState: { errors } = {} } = form;

  const result = deepSearchKey(errors, fieldName) || {};
  const { type = '', message = '' } = result;
  return { type, message };
};
