import { restRequest } from 'plugins/request';
import { QUERY_KEY_AUTH } from './index';

export const QUERY_KEY_RESET_PASSWORD = `${QUERY_KEY_AUTH}/reset-password`;

export const resetPassword = restRequest(QUERY_KEY_RESET_PASSWORD);

export const apiResetPassword = async (params = {}) => {
  return await resetPassword.post('', false, params);
};
