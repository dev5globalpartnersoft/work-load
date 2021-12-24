export const getUserAgent = (context = {}) => context.req?.headers?.['user-agent'] || '';
