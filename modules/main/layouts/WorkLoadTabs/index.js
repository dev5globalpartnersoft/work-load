// Styles
import { StyledTabs, StyledTabPane, SubTabs, SubTabPane, StyledInput } from './style';

// Components
import { DaysTabs } from '../../components/DaysTabs';
import { DraggablePeriods } from '../../components/DraggablePeriods';
import { AddTabButton } from '../../components/AddTabButton';

// Utils
import { store } from 'core';

export const WorkLoadTabs = props => {
  const [
    { tabs, activeKey, activeSubKey },
    { setState, changeTabLabel, toggleSubTabDay, addTab, addSubTab, setSubTabPeriod },
  ] = store.useModel('main');

  const handleMainTabsChange = activeKey => {
    setState({ activeKey, activeSubKey: '0' });
  };

  const handleSubTabsChange = activeSubKey => {
    setState({ activeSubKey });
  };

  const handleTabsAddClick = () => addTab();

  const createMainTabNameChangeHandler = index => e => {
    const label = e.target.value || '-';
    changeTabLabel({ index, label });
  };

  return (
    <StyledTabs
      activeKey={activeKey}
      onChange={handleMainTabsChange}
      tabBarExtraContent={<AddTabButton onClick={handleTabsAddClick}>+Add</AddTabButton>}
      {...props}
    >
      {tabs.map((tab = {}, index) => {
        const { label = '', subTabs = [], allDays = [] } = tab;

        const handleSubTabsAddClick = () => addSubTab({ index });

        return (
          <StyledTabPane tab={label} key={index}>
            <StyledInput
              title="Tab Name"
              value={label}
              onChange={createMainTabNameChangeHandler(index)}
            />

            <SubTabs
              activeKey={activeSubKey}
              onChange={handleSubTabsChange}
              tabBarExtraContent={
                <AddTabButton onClick={handleSubTabsAddClick}>+Add</AddTabButton>
              }
            >
              {subTabs.map((subTab = {}, subIndex) => {
                const { label = '', days = [], periods = [] } = subTab;

                const handleDayTabsChange = day => {
                  toggleSubTabDay({ index, subIndex, day });
                };

                const handlePeriodChange = (period = {}, periodIndex) => {
                  setSubTabPeriod({ period, index, subIndex, periodIndex });
                };

                const disabledDays = allDays.filter(d => !days.includes(d));

                return (
                  <SubTabPane tab={label} key={subIndex}>
                    <DaysTabs
                      disabledOptions={disabledDays}
                      value={days}
                      onChange={handleDayTabsChange}
                    />
                    <DraggablePeriods onChange={handlePeriodChange} value={periods} />
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
