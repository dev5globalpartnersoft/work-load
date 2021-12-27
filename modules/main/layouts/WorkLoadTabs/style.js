import styled from 'styled-components';
import { Tabs, TabPane } from 'ui/Tabs';
import { InputOutlined } from 'ui/inputs/InputOutlined';

export const StyledTabs = styled(Tabs)`
  max-width: 800px;
  padding-bottom: 40px;
`;

export const StyledTabPane = styled(TabPane)``;

export const SubTabs = styled(StyledTabs)`
  margin-top: 40px;
  padding-left: 20px;
`;

export const SubTabPane = styled(StyledTabPane)``;

export const StyledInput = styled(InputOutlined)``;
