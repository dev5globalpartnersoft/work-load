// Utils
import { useUserAgent } from 'core/useUserAgent';

export const Desktop = props => {
  const { isDesktop } = useUserAgent();

  return isDesktop ? props.children : '';
};
