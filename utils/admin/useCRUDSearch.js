// Hooks
import { useState, useEffect, useCallback } from 'react';
import useDebounceFn from 'ahooks/lib/useDebounceFn';

export const useCRUDSearch = (crud = {}, searchParamName = 'q') => {
  const { recordsQuery = {} } = crud;
  const { requestParams = {}, setRequestParams = () => {}, initPage = 1 } = recordsQuery;
  const { [searchParamName]: value } = requestParams;

  const [stateValue, setStateValue] = useState(value);

  useEffect(() => {
    if (stateValue !== value) {
      setStateValue(value);
    }
  }, [value]);

  const setSearchParam = useCallback(
    v => {
      setRequestParams({ [searchParamName]: v, page: initPage });
    },
    [setRequestParams, searchParamName, initPage]
  );

  const { run: debouncedSetSearchParam } = useDebounceFn(setSearchParam);

  const onTableSearchChange = useCallback(
    e => {
      const v = e?.target?.value ?? e;
      if (stateValue !== v) {
        setStateValue(v);
        debouncedSetSearchParam(v);
      }
    },
    [debouncedSetSearchParam, stateValue]
  );

  return {
    value: stateValue,
    onTableSearchChange,
  };
};
