import React, { useCallback } from 'react';

// Config
import { TIME_ZONE } from 'config';

// Next
import NextApp from 'next/app';
import Head from 'next/head';
import { NextIntlProvider } from 'next-intl';

// Core
import { store, ThemeProvider, queryClient, UserAgentProvider } from 'core';

// Api
import { QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

// Utils
import { getUserAgent } from 'utils/getUserAgent';

// Components
import { BodyWrapper } from 'modules/main/layouts/BodyWrapper';

// Store
const { Provider } = store;

export default function App({ Component, pageProps = {} }) {
  const { locale, userAgent, messages, queryDehydratedState } = pageProps;
  console.log('react-query SSR state', queryDehydratedState);

  const getNextIntlMessageFallback = useCallback(({ namespace = '', key = '' } = {}) => {
    console.log(`Next Intl. Unable find translation: ${namespace}.${key}`);
    return '';
  }, []);

  const handleNextIntlError = useCallback(() => {}, []);

  return (
    <>
      <Head>
        <title>Work Load</title>
      </Head>
      <Provider>
        <NextIntlProvider
          locale={locale}
          timeZone={TIME_ZONE}
          messages={messages}
          getMessageFallback={getNextIntlMessageFallback}
          onError={handleNextIntlError}
        >
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={queryDehydratedState}>
                <UserAgentProvider value={userAgent}>
                  <BodyWrapper PageComponent={Component} pageProps={pageProps} />
                </UserAgentProvider>
              </Hydrate>
            </QueryClientProvider>
          </ThemeProvider>
        </NextIntlProvider>
      </Provider>
    </>
  );
}

App.getInitialProps = async (context = {}) => {
  const { router = {} } = context;
  const { locale = '' } = router;

  const originalAppProps = await NextApp.getInitialProps(context);
  const userAgent = getUserAgent(context);

  return {
    ...originalAppProps,
    pageProps: {
      locale,
      userAgent,
    },
  };
};
