export function setState(state = {}, payload) {
  let realPayload;

  if (typeof payload === 'object') realPayload = payload;
  if (typeof payload === 'function') realPayload = payload(state);
  if (!realPayload) return state;

  if (Array.isArray(state) && Array.isArray(realPayload)) {
    return [...state, ...realPayload];
  }

  return { ...state, ...realPayload };
}
