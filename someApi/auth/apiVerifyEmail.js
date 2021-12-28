import { QUERY_KEY_AUTH } from 'someApi/auth/index';
import { restRequest } from 'plugins/request';

export const QUERY_KEY_VERIFY_EMAIL = `${QUERY_KEY_AUTH}/verify-email`;

export const verifyEmail = restRequest(QUERY_KEY_VERIFY_EMAIL);

export const apiVerifyEmail = async (params = '') => {
  const verification = params?.verification || params;

  return await verifyEmail.post('', false, { verification });
};
