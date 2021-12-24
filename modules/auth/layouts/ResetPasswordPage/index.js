import { useState, useEffect } from 'react';

// Styles
import { Wrap } from './style';

// Components
import { PasswordInput } from 'modules/auth/layouts/ResetPasswordPage/components/PasswordInput';
import { ConfirmPasswordInput } from 'modules/auth/layouts/ResetPasswordPage/components/ConfirmPasswordInput';
import { SubmitButton } from 'modules/auth/layouts/ResetPasswordPage/components/SubmitButton';
import { EmailInput } from 'modules/auth/layouts/ResetPasswordPage/components/EmailInput';
import { Title } from 'modules/auth/components/Title';

// Form
import { FormProvider, useForm } from 'react-hook-form';

// Hooks
import { useTranslations } from 'languages';
import { useRouter } from 'core/useRouter';
import { useNotification } from 'ui/Notification/useNotification';
import { useForgotPasswordVerify } from 'api/auth/useForgotPasswordVerify';
import { useResetPassword } from 'api/auth/useResetPassword';

export const ResetPasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState();
  const { mutate } = useForgotPasswordVerify();
  const { mutateAsync, isLoading } = useResetPassword();
  const router = useRouter();
  const { code = '' } = router.query;

  const t = useTranslations();
  const form = useForm({
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });
  const [authNotification, authContextHolder] = useNotification({
    basePath: 'authNotifications',
    hideEmpty: true,
  });

  const { handleSubmit, reset } = form;

  useEffect(() => {
    if (code) {
      mutate({
        verification: code,
      });
    }
  }, [code]);

  const onSubmit = async values => {
    try {
      const { email, password } = values;
      await mutateAsync({
        email: email,
        password: password,
        verification: code,
      })
        .then(() => {
          authNotification.success({ path: 'confirmYourPassword' });
          reset();
        })
        .catch(e =>
          authNotification.error({
            ...(e?.message ? { message: 'Error', description: e?.message } : {}),
            path: e?.errorCode,
            fallbackPath: 'defError',
          })
        );
    } catch (e) {
      authNotification.error({
        ...(e?.message ? { message: 'Error', description: e?.message } : {}),
        path: e?.errorCode,
        fallbackPath: 'defError',
      });
    }
  };
  return (
    <FormProvider {...form}>
      <Wrap onSubmit={handleSubmit(onSubmit)}>
        {authContextHolder}
        <Title>{t('title')}</Title>
        <EmailInput placeholder={t('enterEmail')} />
        <PasswordInput
          onChange={e => setCurrentPassword(e.target.value)}
          placeholder={t('enterPassword')}
        />
        <ConfirmPasswordInput
          currentPassword={currentPassword}
          placeholder={t('confirmPassword')}
        />
        <SubmitButton isLoading={isLoading}>{t('submit')}</SubmitButton>
      </Wrap>
    </FormProvider>
  );
};
