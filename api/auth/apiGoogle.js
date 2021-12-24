import { restRequest } from 'plugins/request';
import { getBrowserStorage } from 'plugins/localForage';
import { QUERY_KEY_AUTH } from './index';

const mainStorage = getBrowserStorage();

export const QUERY_KEY_SIGN_IN = `${QUERY_KEY_AUTH}/google`;

export const google = restRequest(QUERY_KEY_SIGN_IN);

export const apiGoogle = async (params = {}) => {
  const response = await google.post('', false, params);
  const { accessToken } = response || {};
  console.log(response);
  if (accessToken) {
    await mainStorage.setItem('token', accessToken);
  }

  return response;
};
