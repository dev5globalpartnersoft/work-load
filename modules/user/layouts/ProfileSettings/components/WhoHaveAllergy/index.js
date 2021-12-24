// Styles
import { Title, Wrap, StyledCheckboxGroup } from './style';

// Hooks
import { useMemo } from 'react';
import { useTranslations } from 'languages';

export const WhoHaveAllergy = ({ forWhoUse = '', ...props }) => {
  const t = useTranslations('WhoHaveAllergy');
  const items = Object.entries(t.obj('items'));

  const options = useMemo(() =>
    items.map(([value, label]) => ({ value, label }), [t, items])
  );

  return (
    <Wrap {...props}>
      <Title>{t('Title')}</Title>
      <StyledCheckboxGroup name={'forWhoUse'} forWhoUse={forWhoUse} items={options} />
    </Wrap>
  );
};
