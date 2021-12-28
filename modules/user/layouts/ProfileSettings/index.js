import { useState } from 'react';

// Styles
import { Wrap, Title, NextStepButton, StyledSpin, LoadPage } from './style';

// Components
import { WhoHaveAllergy } from 'modules/user/layouts/ProfileSettings/components/WhoHaveAllergy';
import { RelevantAllergies } from 'modules/user/layouts/ProfileSettings/components/RelevantAllergies';
import { SubmitButton } from 'modules/user/layouts/ProfileSettings/components/SubmitButton';
import { Modal } from 'modules/user/layouts/ProfileSettings/components/Modal';

// Form
import { FormProvider, useForm } from 'react-hook-form';

// Hooks
import { useRouter } from 'core/useRouter';
import { useTranslations } from 'languages';
import { useProfileSettings } from 'someApi/user/useProfileSettings';
import { useAuthData } from 'someApi/auth/useAuthData';
import { useNotification } from 'ui/Notification/useNotification';

export const ProfileSettingsPage = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { query } = useRouter();
  const { firstSetup = '' } = query;
  const isFirstSetup = firstSetup === 'true';

  const t = useTranslations('ProfileSettings');
  const { data: userData, isLoading: userDataisLoading = false } = useAuthData();
  const { isLoading = false, mutateAsync } = useProfileSettings();
  const [profileNotification, profileContextHolder] = useNotification({
    basePath: 'profileNotification',
    hideEmpty: true,
  });
  const form = useForm({
    defaultValues: { forWhoUse: '', allergies: [] },
  });

  const { handleSubmit } = form;

  const onSubmit = async values => {
    // console.log('form values', values);
    const { forWhoUse = '', allergies = [] } = values;
    // console.log('allergies', allergies);
    try {
      const response = await mutateAsync({
        forWhoUse: forWhoUse.join(','),
        allergies: allergies,
      });
      if (response) {
        // console.log('response', response);
        profileNotification.success({ path: 'successPost' });
      }
    } catch (e) {
      profileNotification.error({
        ...(e?.message ? { message: 'Error', description: e?.message } : {}),
        path: e?.errorCode,
        fallbackPath: 'defError',
      });
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  if (userDataisLoading) {
    return (
      <Wrap>
        <LoadPage>
          <StyledSpin />
        </LoadPage>
      </Wrap>
    );
  }

  return (
    <FormProvider {...form}>
      <Wrap {...props} onSubmit={handleSubmit(onSubmit)}>
        {profileContextHolder}
        <Title>{t('Title')}</Title>
        <WhoHaveAllergy forWhoUse={userData.forWhoUse} />
        <RelevantAllergies allergies={userData.allergies} />
        <SubmitButton isLoading={isLoading}>{t('Save')}</SubmitButton>
        {isFirstSetup && (
          <NextStepButton onClick={showModal}>{t('NextStep')}</NextStepButton>
        )}
        <Modal visible={isModalVisible} setIsModalVisibleProfile={setIsModalVisible} />
      </Wrap>
    </FormProvider>
  );
};
