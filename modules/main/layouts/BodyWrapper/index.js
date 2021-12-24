import React from 'react';

// Components
import { Header } from 'modules/main/layouts/Header';
import { Footer } from 'modules/main/layouts/Footer';

export const BodyWrapper = React.memo(({ PageComponent, pageProps, ...props }) => {
  return (
    <>
      <Header />
      <PageComponent {...pageProps} />
      <Footer />

      {props.children}
    </>
  );
});
