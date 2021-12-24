import { restRequest } from 'plugins/request';
import { QUERY_KEY_AUTH } from './index';

export const QUERY_KEY_FORGOT_PASSWORD_EMAIL = `${QUERY_KEY_AUTH}/forgot-password`;

export const forgotPasswordEmail = restRequest(QUERY_KEY_FORGOT_PASSWORD_EMAIL);

export const apiForgotPasswordEmail = async (params = {}) => {
  return await forgotPasswordEmail.post('', false, params);
};
