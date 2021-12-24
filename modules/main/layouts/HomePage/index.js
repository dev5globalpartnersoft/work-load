// Styles
import { Wrap } from './style';

// Components
import { WorkLoadTabs } from '../WorkLoadTabs';

export const HomePage = props => {
  return (
    <Wrap {...props}>
      <WorkLoadTabs />
    </Wrap>
  );
};
