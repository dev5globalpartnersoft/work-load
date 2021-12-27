export const defSubTab = {
  label: 'SubTab',
  periods: [
    { start: 0, end: 6, employees: 1 },
    { start: 6, end: 12, employees: 1 },
    { start: 12, end: 18, employees: 1 },
    { start: 18, end: 24, employees: 1 },
  ],
  days: [],
};

export const defSubTabs = [defSubTab];

export const defTab = {
  label: 'Tab',
  allDays: [],
  subTabs: defSubTabs,
};

export const defTabs = [defTab];

export const mainModel = {
  state: {
    activeKey: '0',
    activeSubKey: '0',
    tabs: defTabs,
  },
  reducers: {
    changeTabLabel(state, { index, label } = {}) {
      state.tabs[index].label = label;
    },
    changeSubTabLabel(state, { index, subIndex, label } = {}) {
      state.tabs[index].subTabs[subIndex] = label;
    },
    toggleSubTabDay(state, { index, subIndex, day }) {
      const days = state.tabs[index].subTabs[subIndex].days;
      const dayIndex = days.findIndex(d => d === day);
      if (dayIndex >= 0) {
        state.tabs[index].subTabs[subIndex].days.splice(dayIndex, 1);
        state.tabs[index].allDays = state.tabs[index].allDays.filter(d => d !== day);
      } else {
        state.tabs[index].subTabs[subIndex].days.push(day);
        state.tabs[index].allDays.push(day);
      }
    },
    addTab(state) {
      const { label = '' } = defTab;
      const { length } = state.tabs;
      state.tabs.push({ ...defTab, label: `${label}${length}` });
      state.activeKey = String(length);
    },
    addSubTab(state, { index }) {
      const { label = '' } = defSubTab;
      const { length } = state.tabs[index].subTabs;
      state.tabs[index].subTabs.push({ ...defSubTab, label: `${label}${length}` });
      state.activeSubKey = String(length);
    },
    setSubTabPeriod(state, { period, index, subIndex, periodIndex }) {
      const periods = state.tabs[index].subTabs[subIndex].periods;
      const { length } = periods;

      const { start = 0, end = 0, employees = 1 } = period;

      const periodTime = Math.abs(end - start);

      const periodReplace = { ...period };

      if (periodTime > 12) {
        if (periodIndex === 0) {
          periodReplace.start = 0;
          periodReplace.end = 12;
        } else {
          if (periodIndex === length - 1) {
            periodReplace.start = 12;
            periodReplace.end = 24;
          } else {
            periodReplace.end = start + 12;
          }
        }
      }

      if (periodTime < 4) {
        if (periodIndex === 0) {
          periodReplace.start = 0;
          periodReplace.end = 4;
        } else {
          if (periodIndex === length - 1) {
            periodReplace.start = 20;
            periodReplace.end = 24;
          } else {
            periodReplace.end = start + 4;
          }
        }
      }
      const {
        start: replaceStart = 0,
        end: replaceEnd = 0,
        employees: replaceEmployees = 1,
      } = periodReplace;
      const currentPeriod = periods[periodIndex];

      const {
        start: currentStart = 0,
        end: currentEnd = 0,
        employees: currentEmployees = 1,
      } = currentPeriod;
      const replaceTime = Math.abs(replaceEnd - replaceStart);
      const currentTime = Math.abs(currentEnd - currentStart);

      if (replaceTime > currentTime) {

      } else {
        if (replaceTime < currentTime) {

        }
      }

      state.tabs[index].subTabs[subIndex].periods.splice(periodIndex, 1, periodReplace);
    },
  },

  effects: dispatch => ({}),
};
