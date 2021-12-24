import { getBrowserStorage } from 'plugins/localForage';
import { queryClient } from 'core/queryClient';
import { QUERY_KEY_AUTH_DATA } from './apiGetAuthData';

const mainStorage = getBrowserStorage();

export const apiLogOut = async ({
  redirect = true,
  redirectUrl = '/',
  tokenReplace = '',
} = {}) => {
  if (tokenReplace) {
    await mainStorage.setItem('token', tokenReplace);
  } else {
    await mainStorage.removeItem('token');
  }

  await queryClient.invalidateQueries([QUERY_KEY_AUTH_DATA, {}]);

  if (redirect) {
    global.window.location.href = redirectUrl;
  }
};
