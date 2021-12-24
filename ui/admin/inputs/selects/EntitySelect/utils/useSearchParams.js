// Hooks
import useDebounce from 'ahooks/lib/useDebounce';
import { useMemo } from 'react';

export const useSearchParams = (params, searchParamName, search) => {
  const debouncedSearch = useDebounce(search);

  return useMemo(() => {
    return [{ ...(params || {}), [searchParamName]: debouncedSearch }, debouncedSearch];
  }, [params, searchParamName, debouncedSearch]);
};
