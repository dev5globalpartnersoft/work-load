import { useEffect } from 'react';

// Styles
import { Wrap, Title, ButtonsWrap, Button } from './style';

// Hooks
import { useTranslations } from 'languages';
import { useRouter } from 'core/useRouter';
import { useVerifyEmail } from 'someApi/auth/useVerifyEmail';

export const VerifyEmailPage = () => {
  const t = useTranslations();
  const router = useRouter();
  const { data, mutate, isSuccess, isLoading, isError } = useVerifyEmail({
    onError() {
      router.replace('/');
    },
  });

  const { key = '' } = router.query;

  useEffect(() => {
    if (router.isReady && key) {
      mutate(key);
    }
  }, [router.isReady, key]);

  return (
    <Wrap>
      <Title>
        {!(isLoading || isSuccess || isError) && t('title')}
        {isLoading && t('loading')} {data?.accessToken && t('success')}
      </Title>
      <ButtonsWrap>
        <Button href="/">{t('homeButton')}</Button>
        {isSuccess && <Button href="/sign-in">{t('signInButton')}</Button>}
        {!isSuccess && <Button href="/sign-up">{t('signUpButton')}</Button>}
      </ButtonsWrap>
    </Wrap>
  );
};
