import React from 'react';

const DefPage = () => '';

export const withPagePlugins = (Page = DefPage, config = []) => {
  let pluginsArr = [];
  let pageProps = {};

  if (Array.isArray(config)) {
    const [configPluginsArr, configPageProps] = config;

    if (Array.isArray(configPluginsArr)) {
      pluginsArr = configPluginsArr;
    }

    if (typeof configPageProps === 'object') {
      pageProps = configPageProps;
    }
  } else {
    pageProps = config;
  }

  let WrappedPage = Page;

  pluginsArr.forEach((plugin = []) => {
    let withPlugin;
    let pluginConfig = {};

    if (Array.isArray(plugin)) {
      [withPlugin, pluginConfig] = plugin;
    } else {
      withPlugin = plugin;
    }

    if (typeof withPlugin === 'function') {
      WrappedPage = withPlugin(WrappedPage, pluginConfig);
    }
  });

  return React.memo(props => <WrappedPage {...props} {...pageProps} />);
};
