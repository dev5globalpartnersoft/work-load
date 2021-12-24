export default {
  state: { name: 'white' },
  reducers: { setTheme: (state, name) => (state.name = name) },
};
