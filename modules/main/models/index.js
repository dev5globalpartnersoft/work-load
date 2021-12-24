// Utils
import { setState } from 'utils/setState';

export const mainModel = {
  state: {
    isGoogleMapsScriptLoading: false,
    isGoogleMapsScriptReady: false,
  },
  reducers: {
    setMainState: setState,
  },
  effects: dispatch => ({}),
};
