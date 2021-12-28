import { restRequest } from 'plugins/request';
import { QUERY_KEY_AUTH } from './index';

// Utils
import { checkRoles } from 'utils/checkRoles';

export const QUERY_KEY_AUTH_DATA = `${QUERY_KEY_AUTH}/getinfo`;

export const authData = restRequest(QUERY_KEY_AUTH_DATA);

export const apiGetAuthData = async (params = {}) => {
  const response = (await authData.get('', true, params)) || {};
  const { userRole = {} } = response;
  const { role = '' } = userRole;
  const rolesCheckResult = checkRoles(role);

  return { ...response, ...rolesCheckResult, roles: rolesCheckResult, role };
};
