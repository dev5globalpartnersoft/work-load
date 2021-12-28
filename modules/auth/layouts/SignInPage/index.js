import { useState } from 'react';
// Styles
import { Wrap, SignInCheckbox, ErrorMessage } from './style';

// Components
import { GrayText, BlackText } from 'modules/auth/components/Paragraphs';
import { AuthLink } from 'modules/auth/components/AuthLink';
import { SignInSocialButtons } from 'modules/auth/components/SignInSocialButtons';
import { ForgotPassLink } from 'modules/auth/components/ForgotPassLink';
import { SubmitButton } from 'modules/auth/components/SubmitButton';
import { EmailInput } from 'modules/auth/components/EmailInput';
import { PasswordInput } from 'modules/auth/components/PasswordInput';
import { Title } from '../../components/Title';

// Hooks
import { useNotification } from 'ui/Notification/useNotification';
import { useRouter } from 'core/useRouter';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslations } from 'languages';
import { useSignIn } from 'someApi/auth/useSignIn';
import { useAuthData } from 'someApi/auth/useAuthData';

export const SignInPage = () => {
  const [error, setError] = useState();
  const authData = useAuthData();
  console.log(authData);
  const router = useRouter();
  const t = useTranslations('Auth');
  const form = useForm({ defaultValues: { email: '', password: '' } });
  const [authNotification, authContextHolder] = useNotification({
    basePath: 'auth',
    hideEmpty: true,
  });

  const { handleSubmit, reset } = form;
  const { mutateAsync, isLoading } = useSignIn();

  const onSubmit = async values => {
    try {
      const response = await mutateAsync(values).catch(e => setError(e.message));
      if (response?.accessToken) {
        reset();
        setError('');
        authNotification.success({ path: 'successAuthorization', duration: 1 });
        router.replace('/?firstSetup=true');
      }
    } catch (e) {
      authNotification.error({ path: e.errorCode });
    }
  };
  return (
    <FormProvider {...form}>
      <Wrap onSubmit={handleSubmit(onSubmit)}>
        {authContextHolder}
        <Title>{t('welcomeBack')}</Title>
        <ErrorMessage>{error}</ErrorMessage>
        <EmailInput placeholder={t('enterEmail')} />
        <PasswordInput placeholder={t('enterPassword')} />
        <SignInCheckbox>{t('staySignedIn')}</SignInCheckbox>
        <SubmitButton isLoading={isLoading}>{t('signIn')}</SubmitButton>
        <GrayText>{t('newToOurProduct')}</GrayText>
        <AuthLink href="/sign-up">{t('createAnAccount')}</AuthLink>
        <ForgotPassLink href="/forgot-password">{t('forgotPassword')}</ForgotPassLink>
        <BlackText>{t('orSignInUsing')}</BlackText>
        <SignInSocialButtons />
      </Wrap>
    </FormProvider>
  );
};
