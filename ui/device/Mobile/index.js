// Utils
import { useUserAgent } from 'core/useUserAgent';

export const Mobile = props => {
  const { isMobile } = useUserAgent();

  return isMobile ? props.children : '';
};
