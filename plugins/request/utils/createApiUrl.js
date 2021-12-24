export const createApiUrl = (
  protocol = '',
  domain = '',
  port = '',
  apiName = '',
  apiVersion = ''
) => {
  const result = `
${protocol}://${domain}${port ? `:${port}` : ''}${apiName ? `/${apiName}` : ''}${
    apiVersion ? `/${apiVersion}` : ''
  }`;

  return result.trim();
};
