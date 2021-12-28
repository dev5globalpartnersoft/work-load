import { restRequest } from 'plugins/request';
import { getBrowserStorage } from 'plugins/localForage';
import { QUERY_KEY_AUTH } from './index';

// Core
import { queryClient } from 'core';

// Api
import { QUERY_KEY_AUTH_DATA } from './apiGetAuthData';

const mainStorage = getBrowserStorage();

export const QUERY_KEY_SIGN_IN = `${QUERY_KEY_AUTH}/signin`;

export const signIn = restRequest(QUERY_KEY_SIGN_IN);

export const apiSignIn = async (params = {}) => {
  const response = await signIn.post('', false, params);
  const { accessToken } = response || {};

  if (accessToken) {
    await mainStorage.setItem('token', accessToken);
    await queryClient.invalidateQueries([QUERY_KEY_AUTH_DATA, {}]);
  }

  return response;
};
