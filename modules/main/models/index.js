// Utils
import { validatePeriod } from './utils/validatePeriod';

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
    removeTab(state, { index }) {
      state.tabs.splice(index, 1);
      if (state.activeKey === String(index)) {
        state.activeKey = '0';
      }
    },
    addSubTab(state, { index }) {
      const { label = '' } = defSubTab;
      const { length } = state.tabs[index].subTabs;
      state.tabs[index].subTabs.push({ ...defSubTab, label: `${label}${length}` });
      state.activeSubKey = String(length);
    },
    removeSubTab(state, { index, subIndex }) {
      state.tabs[index].subTabs.splice(subIndex, 1);
      if (state.activeSubKey === String(subIndex)) {
        state.activeSubKey = '0';
      }
    },
    setSubTabPeriod(state, { period, index, subIndex, periodIndex }) {
      const periods = state.tabs[index].subTabs[subIndex].periods;
      const { length } = periods;

      const periodReplace = validatePeriod(period, periodIndex, length);

      const periodsReplace = [...state.tabs[index].subTabs[subIndex].periods];
      periodsReplace.splice(periodIndex, 1, periodReplace);

      state.tabs[index].subTabs[subIndex].periods = periodsReplace.reduce(
        (accum, current, i) => {
          const pre = accum[i - 1];
          if (!pre) {
            return accum;
          }

          const { end: preEnd = 0 } = pre;
          const { end: currentEnd = 0, employees } = current;

          accum[i] = validatePeriod(
            {
              start: preEnd,
              end: currentEnd,
              employees,
            },
            i,
            length
          );

          return accum;
        },
        [periodsReplace[0]]
      );
    },
  },

  effects: dispatch => ({}),
};
