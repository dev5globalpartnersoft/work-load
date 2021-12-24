import { restRequest } from 'plugins/request';
import { QUERY_KEY_AUTH } from './index';

export const QUERY_KEY_SIGN_UP = `${QUERY_KEY_AUTH}/signup`;

export const signUp = restRequest(QUERY_KEY_SIGN_UP);

export const apiSignUp = async (params = {}) => {
  const response = await signUp.post('', false, params);

  console.log('sign up response', response);

  return response;
};
