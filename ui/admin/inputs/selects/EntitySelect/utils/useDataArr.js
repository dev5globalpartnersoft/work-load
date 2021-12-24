import { useMemo } from 'react';
import { deepSearchKey } from 'utils/deepSearchKey';

export const useDataArr = (dataKey, data, countKey) =>
  useMemo(() => {
    return [deepSearchKey(data, dataKey) || [], deepSearchKey(data, countKey) || 0];
  }, [dataKey, data, countKey]);
