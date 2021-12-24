export const mainModel = {
  state: {
    activeKey: '0',
    activeSubKey: '0',
    tabs: [{ label: '#1', subTabs: [{ label: 'Sub-#1' }], load: { days: [] } }],
  },
  reducers: {
    changeTabLabel(state, { index, label } = {}) {
      state.tabs[index].label = label;
    },
    changeSubTabLabel(state, { index, subIndex, label } = {}) {
      state.tabs[index].subTabs[subIndex] = label;
    },
  },
  effects: dispatch => ({}),
};
