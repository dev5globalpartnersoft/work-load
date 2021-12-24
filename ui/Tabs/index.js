// Styles
import { StyledTabs, StyledTabPane } from './style';

export const Tabs = props => {
  return <StyledTabs {...props}>{props.children}</StyledTabs>;
};

export const TabPane = props => {
  return <StyledTabPane {...props}>{props.children}</StyledTabPane>;
};
