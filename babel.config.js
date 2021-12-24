const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        namespace: 'ycf',
        transpileTemplateLiterals: isProd,
        pure: isProd,
        minify: isProd,
        ssr: true,
        displayName: isDev,
      },
    ],
  ],
};
