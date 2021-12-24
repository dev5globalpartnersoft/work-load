import { restRequest } from 'plugins/request';
import { QUERY_KEY_AUTH } from './index';

export const QUERY_KEY_FORGOT_PASSWORD_VERIFY = `${QUERY_KEY_AUTH}/forgot-password-verify`;

export const forgotPasswordVerify = restRequest(QUERY_KEY_FORGOT_PASSWORD_VERIFY);

export const apiForgotPasswordVerify = async (params = {}) => {
  return (await forgotPasswordVerify.post('', false, params)) || {};
};
