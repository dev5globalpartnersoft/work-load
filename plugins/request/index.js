import { REST } from './rest';

export const restRequest = (route = '') => {
  return new REST(route);
};
