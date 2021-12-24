export const projectMode = process?.env?.NODE_ENV;
export const isDevelopment = projectMode === 'development';
export const isProduction = projectMode === 'production';
