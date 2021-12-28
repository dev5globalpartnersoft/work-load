import { useEffect } from 'react';
// Styles
import { Wrap } from './style';

// Components
import { Title } from '../../components/Title';
import { BlackText } from 'modules/auth/components/Paragraphs';
import { SubmitButton } from 'modules/auth/components/SubmitButton';
import { SignInLink } from 'modules/auth/components/SignInLink';
import { TermsAndConditionLink } from 'modules/auth/components/TermsAndConditionLink';
import { SignInSocialButtons } from 'modules/auth/components/SignInSocialButtons';
import { GrayText } from './style';
import { EmailInput } from '../../components/EmailInput';
import { PasswordInput } from '../../components/PasswordInput';

// Hooks
import { useTranslations } from 'languages';
import { FormProvider, useForm } from 'react-hook-form';
import { useSignUp } from 'someApi/auth/useSignUp';
import { useNotification } from 'ui/Notification/useNotification';
import { useRouter } from 'core/useRouter';

export const SignUpPage = () => {
  //Google Auth
  useEffect(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2.init({
        client_id:
          '624950502502-n8b6cr724apjj10m4ufrsnmq29d16ge8.apps.googleusercontent.com',
      });
    });
  }, []);
  // Translations
  const t = useTranslations('Auth');
  const router = useRouter();

  // Notifications
  const [authNotification, authContextHolder] = useNotification({
    basePath: 'auth',
    hideEmpty: true,
  });

  // Form
  const form = useForm({ defaultValues: { email: '', password: '' } });
  const { handleSubmit, reset } = form;

  // Submitter
  const { mutateAsync, isLoading } = useSignUp();

  const onSubmit = async values => {
    try {
      const response = await mutateAsync(values);
      reset();
      authNotification.success({
        path: 'confirmYourEmail',
        descriptionInsert: { email: response?.email || '' },
      });
      router.replace('/?firstSetup=true');
    } catch (e) {
      authNotification.error({ path: e.errorCode });
    }
  };

  return (
    <FormProvider {...form}>
      <Wrap onSubmit={handleSubmit(onSubmit)}>
        {authContextHolder}
        <Title>{t('signUpTitle')}</Title>
        <EmailInput placeholder={t('enterEmail')} />
        <PasswordInput placeholder={t('createPassword')} />
        <GrayText>{t('haveAnAccount')}</GrayText>
        <SignInLink href="/sign-in">{t('signIn')}</SignInLink>
        <SubmitButton isLoading={isLoading}>{t('signUp')}</SubmitButton>
        <TermsAndConditionLink />
        <BlackText>{t('orSignInUsing')}</BlackText>
        <SignInSocialButtons />
      </Wrap>
    </FormProvider>
  );
};
