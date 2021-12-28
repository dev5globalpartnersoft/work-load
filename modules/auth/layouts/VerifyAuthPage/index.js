import { useEffect } from 'react';

// Hooks
import { useTranslations } from 'languages';
import { useRouter } from 'core/useRouter';

// Api
import { apiLogOut } from 'someApi/auth/apiLogOut';

// Styles
import { Spin, Wrap, Result, Text } from './style';

export const VerifyAuthPage = () => {
  const t = useTranslations();
  const router = useRouter();
  const { token = '' } = router.query;

  useEffect(() => {
    if (token) {
      apiLogOut({ tokenReplace: token });
    } else {
      router.replace('/');
    }
  }, [token]);
  return (
    <Wrap>
      {!router.isReady && <Spin size="large" tip="Loading..." />}
      {router.isReady && token ? (
        <>
          <Result status="success" />
          <Text>{t('success')}</Text>
        </>
      ) : (
        <>
          <Result status="error" />
          <Text>{t('error')}</Text>
        </>
      )}
    </Wrap>
  );
};
