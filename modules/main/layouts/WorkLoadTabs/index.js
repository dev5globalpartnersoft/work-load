// Styles
import { StyledTabs, StyledTabPane, SubTabs, SubTabPane, StyledInput } from './style';

// Components
import { DaysTabs } from '../../components/DaysTabs';
import { DraggablePeriods } from '../../components/DraggablePeriods';
import { DaysChart } from '../../components/DaysChart';

// Utils
import { store } from 'core';

export const WorkLoadTabs = props => {
  const [
    { tabs, activeKey, activeSubKey },
    {
      setState,
      changeTabLabel,
      toggleSubTabDay,
      addTab,
      removeTab,
      addSubTab,
      removeSubTab,
      setSubTabPeriod,
    },
  ] = store.useModel('main');

  const handleMainTabsChange = activeKey => {
    setState({ activeKey, activeSubKey: '0' });
  };

  const handleSubTabsChange = activeSubKey => {
    setState({ activeSubKey });
  };

  const handleTabsEdit = (v, action) => {
    if (action === 'add') {
      addTab();
    }
    if (action === 'remove') {
      removeTab({ index: v });
    }
  };

  const createMainTabNameChangeHandler = index => e => {
    const label = e.target.value || '';
    changeTabLabel({ index, label });
  };

  return (
    <StyledTabs
      activeKey={activeKey}
      type="editable-card"
      onChange={handleMainTabsChange}
      onEdit={handleTabsEdit}
      {...props}
    >
      {tabs.map((tab = {}, index) => {
        const { label = '', subTabs = [], allDays = [] } = tab;

        const handleSubTabsEdit = (v, action) => {
          if (action === 'add') {
            addSubTab({ index });
          }
          if (action === 'remove') {
            removeSubTab({ index, subIndex: v });
          }
        };

        return (
          <StyledTabPane tab={label} key={index} closable={tabs.length > 1}>
            <StyledInput
              title="Tab Name"
              value={label}
              onChange={createMainTabNameChangeHandler(index)}
            />

            <SubTabs
              activeKey={activeSubKey}
              onChange={handleSubTabsChange}
              onEdit={handleSubTabsEdit}
              type="editable-card"
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
                  <SubTabPane
                    tab={label}
                    key={subIndex}
                    type="editable-card"
                    closable={subTabs.length > 1}
                  >
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
            <br />

            <DaysChart />
          </StyledTabPane>
        );
      })}
    </StyledTabs>
  );
};
