// Styles
import { StyledTabs, StyledTabPane, SubTabs, SubTabPane, StyledInput } from './style';

// Components
import { DaysTabs } from '../../components/DaysTabs';

// Utils
import { store } from 'core';

export const WorkLoadTabs = props => {
  const [{ tabs, activeKey, activeSubKey }, { setState, changeTabLabel }] =
    store.useModel('main');

  const handleMainTabsChange = activeKey => {
    setState({ activeKey, activeSubKey: 0 });
  };

  const handleSubTabsChange = activeSubKey => setState({ activeSubKey });

  const createMainTabNameChangeHandler = index => e => {
    const label = e.target.value || '-';
    changeTabLabel({ index, label });
  };

  return (
    <StyledTabs activeKey={activeKey} onChange={handleMainTabsChange} {...props}>
      {tabs.map((tab = {}, index) => {
        const { label = '', subTabs = [] } = tab;

        return (
          <StyledTabPane tab={label} key={index}>
            <StyledInput
              title="Tab Name"
              value={label}
              onChange={createMainTabNameChangeHandler(index)}
            />

            <SubTabs activeKey={activeSubKey} onChange={handleSubTabsChange}>
              {subTabs.map((subTab = {}, subIndex) => {
                const { label = '' } = subTab;

                return (
                  <SubTabPane tab={label} key={subIndex}>
                    DAYS TAB
                  </SubTabPane>
                );
              })}
            </SubTabs>
          </StyledTabPane>
        );
      })}
    </StyledTabs>
  );
};
