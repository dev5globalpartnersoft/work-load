// Utils
import { useUserAgent } from 'core/useUserAgent';

export const DesktopOrTablet = props => {
  const { isDesktopOrTablet } = useUserAgent();

  return isDesktopOrTablet ? props.children : '';
};
