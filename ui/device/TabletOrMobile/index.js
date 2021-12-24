// Utils
import { useUserAgent } from 'core/useUserAgent';

export const TabletOrMobile = props => {
  const { isTabletOrMobile } = useUserAgent();

  return isTabletOrMobile ? props.children : '';
};
