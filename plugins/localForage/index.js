import localforage from 'localforage';
import { useMemo } from 'react';

const stores = new Map();

stores.set(
  'main',
  localforage.createInstance({
    name: 'main',
  })
);

export const getBrowserStorage = (nameStorage = 'main') => {
  if (!stores.has(nameStorage)) {
    return { getItem: () => null, setItem: () => null };
  }

  const store = stores.get(nameStorage);

  const getItem = store?.getItem?.bind(store);
  const setItem = store?.setItem?.bind(store);
  const removeItem = store?.removeItem?.bind(store);
  return {
    getItem,
    setItem,
    removeItem,
  };
};

export const useBrowserStorage = nameStorage =>
  useMemo(() => getBrowserStorage(nameStorage), [nameStorage]);
