// Utils
import { createApiUrl } from './utils/createApiUrl';

// Config
import { isDevelopment } from 'config/env';
import { API_MODE } from 'config/api';

export const name = 'request';
// export const clientPort = 3000;
export const clientPort = 5000;
export const apiName = 'api';
export const apiVersion = '';
export const apiDevProtocol = 'https';
export const apiDevDomain = 'stag.allergyfoodies.com';
// export const apiDevDomain = '67.205.131.212';
export const apiDevPort = '';

export const apiProdProtocol = 'https';
export const apiProdDomain = 'stag.allergyfoodies.com';
// export const apiProdDomain = '67.205.131.212';
export const apiProdPort = '';

export const apiDevUrl = createApiUrl(
  apiDevProtocol,
  apiDevDomain,
  apiDevPort,
  apiName,
  apiVersion
);

export const apiProdUrl = createApiUrl(
  apiProdProtocol,
  apiProdDomain,
  apiProdPort,
  apiName,
  apiVersion
);

export const apiUrlByEnv =
  API_MODE === 'dev'
    ? apiDevUrl
    : API_MODE === 'prod'
    ? apiProdUrl
    : isDevelopment
    ? apiDevUrl
    : apiProdUrl;

export const config = {
  name,
  clientPort,
  apiName,
  apiVersion,

  apiDevProtocol,
  apiDevDomain,
  apiDevPort,

  apiProdProtocol,
  apiProdDomain,
  apiProdPort,

  apiDevUrl,
  apiProdUrl,
  apiUrlByEnv,
};

export default config;
