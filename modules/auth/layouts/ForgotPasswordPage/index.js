// Styled
import { Wrap, Title } from './style';

// Form
import { FormProvider, useForm } from 'react-hook-form';

// Components
import { EmailInput } from 'modules/auth/layouts/ResetPasswordPage/components/EmailInput';
import { SubmitButton } from 'modules/auth/layouts/ResetPasswordPage/components/SubmitButton';

// Hooks
import { useTranslations } from 'languages';
import { useForgotPasswordEmail } from 'someApi/auth/useForgotPasswordEmail';
import { useNotification } from 'ui/Notification/useNotification';

export const ForgotPasswordPage = () => {
  const t = useTranslations();

  const { mutateAsync, isLoading } = useForgotPasswordEmail();
  const [authNotification, authContextHolder] = useNotification({
    basePath: 'authNotifications',
    hideEmpty: true,
  });

  const form = useForm({ defaultValues: { email: '' } });
  const { handleSubmit, reset } = form;

  const onSubmit = async values => {
    try {
      await mutateAsync(values)
        .then(() => {
          authNotification.success({ path: 'passwordResetSended' });
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
        <EmailInput placeholder={t('placeholder')} />
        <SubmitButton isLoading={isLoading}>{t('submit')}</SubmitButton>
      </Wrap>
    </FormProvider>
  );
};
