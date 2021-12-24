// Styles
import { Wrap } from './style';

// Hooks
import { useTranslations } from 'languages';

export const Footer = props => {
  const t = useTranslations('Footer');

  return <Wrap {...props}></Wrap>;
};
