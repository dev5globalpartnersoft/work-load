// Styles
import { Title, Wrap, AllergiesSelect } from './style';

// Hooks
import { useTranslations } from 'languages';

export const RelevantAllergies = ({ allergies = [], name = 'allergies', ...props }) => {
  const t = useTranslations('RelevantAllergies');

  return (
    <Wrap {...props}>
      <Title>{t('Title')}</Title>
      <AllergiesSelect allergies={allergies} name={name} />
    </Wrap>
  );
};
