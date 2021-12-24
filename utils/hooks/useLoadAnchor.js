import { useCallback, useMemo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { deepSearchKey } from 'utils/deepSearchKey';

const useDefGetQuery = () => ({});
const defEnabled = () => true;
const defObj = {};

export const useLoadAnchor = (
  useReactQueryHook = useDefGetQuery,
  {
    dataPath = '0',
    countPath = '1',
    initPage = 1,
    initLimit = 10,
    // initRadius = 0,
    params = defObj,
    enabled = defEnabled,
    options = defObj,
    rootMargin = '0px 0px 100px 0px',
    intersectionOptions = defObj,
  } = {}
) => {
  const [pagesArr, setPagesArr] = useState([]);
  const [requestParams, replaceRequestParams] = useState({
    page: initPage,
    limit: initLimit,
    // radius: initRadius,
  });
  const setRequestParams = useCallback(
    (value = {}) => replaceRequestParams({ ...requestParams, ...value }),
    [requestParams, replaceRequestParams]
  );

  const unitedRequestParams = { ...params, ...requestParams };
  const isEnabled =
    typeof enabled === 'function' ? !!enabled(unitedRequestParams) : enabled;
  const isInitPage = requestParams.page === initPage;

  const {
    ref: anchorRef,
    inView,
    entry,
  } = useInView({ rootMargin, ...intersectionOptions });

  const queryData = useReactQueryHook(unitedRequestParams, {
    ...options,
    enabled: isEnabled,
    keepPreviousData: true,
  });
  const { isSuccess, isLoading, isFetching, data } = queryData;
  const dataArray = dataPath ? deepSearchKey(data, dataPath) : data;
  const dataCount = countPath ? deepSearchKey(data, countPath) : '';

  const hasMorePages = useMemo(() => {
    if (typeof dataCount === 'number') {
      return pagesArr.length < dataCount;
    }

    return dataArray?.length === requestParams.limit;
  }, [requestParams, dataArray, pagesArr]);

  const loadNextPage = useCallback(() => {
    if (hasMorePages) {
      setRequestParams({
        ...requestParams,
        page: (requestParams?.page || initPage) + 1,
      });
    }
  }, [requestParams, setRequestParams, initPage, hasMorePages]);

  useEffect(() => {
    if (isEnabled && inView && !isFetching) {
      loadNextPage();
    }
  }, [inView, isFetching]);

  useEffect(() => {
    const _dataArray = Array.isArray(dataArray) ? dataArray : [];
    setPagesArr(isInitPage ? _dataArray : [...pagesArr, ..._dataArray]);
  }, [dataArray]);

  const resetPage = useCallback(() => {
    if (requestParams.page === initPage) {
      setPagesArr(Array.isArray(dataArray) ? dataArray : []);
    } else {
      setRequestParams({ page: initPage });
    }
  }, [
    setRequestParams,
    initPage,
    initLimit,
    // initRadius,
    dataArray,
  ]);

  useEffect(() => {
    resetPage();
  }, [
    useReactQueryHook,
    initPage,
    initLimit,
    // initRadius
  ]);

  return {
    ...queryData,
    anchorRef,
    loadNextPage,
    hasMorePages,
    inView,
    entry,
    requestParams,
    setRequestParams,
    replaceRequestParams,
    initPage,
    dataArray,
    dataCount,
    pagesArr,
    setPagesArr,
    resetPage,
    isSuccess,
    isLoading,
  };
};
