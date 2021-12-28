import React from 'react';
import { useRouter } from 'next/router';

// Hooks
import { useAuthData } from 'someApi/auth/useAuthData';

export const withAuth = (AuthComponent, accessRole) => {
  const CenteredMessage = ({ message }) => (
    <div style={{ position: 'absolute', top: '50%', left: '50%' }}>{message}</div>
  );

  return () => {
    const router = useRouter();
    const { userData, isAuthorized, isLoading } = useAuthData();

    if (
      !isLoading &&
      userData &&
      userData?.userRole?.role &&
      accessRole &&
      accessRole !== userData?.userRole?.role
    ) {
      router.push('/');

      return <CenteredMessage message="403 Forbidden" />;
    }

    if (!isLoading && !isAuthorized && !userData) {
      const { asPath } = router;

      //As an unauthorized user you are redirecting to the login form, please authorize
      return <CenteredMessage message="אנא התחברו לאתר" />;
    }

    return (
      <>
        {!userData?.id ? (
          <CenteredMessage message="Loading..." />
        ) : (
          <AuthComponent auth={userData} isAuthorized={isAuthorized} />
        )}
      </>
    );
  };
};
