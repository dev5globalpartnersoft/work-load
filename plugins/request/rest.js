import { apiUrlByEnv } from './config';

// Error constructor
import { RequestError } from './utils/RequestError';

// Utils
import { dataToURL } from './utils/dataToUrl';
import { getResponseError } from './utils/getResponseError';
import { isEmpty } from './utils/isEmpty';

// Plugins
import { getBrowserStorage } from 'plugins/localForage';

const mainStorage = getBrowserStorage();

export class REST {
  constructor(entity = '', url = apiUrlByEnv) {
    this.URL = `${url}${entity ? `/${entity}` : ''}`;
  }

  request = async ({ url, method, isAuth, body } = {}) => {
    const options = { method, headers: new Headers() };
    const { headers } = options;

    if (isAuth) {
      try {
        const _token = await mainStorage.getItem('token');
        if (_token) {
          headers.append('Authorization', `Bearer ${_token}`);
        }
      } catch (e) {
        throw new RequestError(e);
      }
    }

    if (body) {
      if (body instanceof FormData) {
        options.body = body;
      } else {
        headers.append('Content-Type', 'application/json');
        options.body = JSON.stringify(body);
      }
    }

    return fetch(url, options)
      .then(res => res.json())
      .then(async json => {
        const error = getResponseError(json);
        if (error) {
          throw new RequestError(error);
        }
        return json;
      })
      .catch(async error => {
        throw new RequestError(error);
      });
  };

  get = (path = '', isAuth = false, queries) => {
    return this.request({
      url: `${this.URL}${path ? `/${path}` : ''}${
        isEmpty(queries) ? '' : '?' + dataToURL(queries)
      }`,
      method: 'GET',
      isAuth,
    });
  };

  post = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'POST',
      isAuth,
      body,
    });
  };

  put = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'PUT',
      isAuth,
      body,
    });
  };

  patch = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'PATCH',
      isAuth,
      body,
    });
  };

  delete = (path = '', isAuth = false, body = {}) => {
    return this.request({
      url: `${this.URL}/${path}`,
      method: 'DELETE',
      isAuth,
      body,
    });
  };
}
