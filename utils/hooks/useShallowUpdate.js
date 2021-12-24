import { useCallback } from 'react';
import { useRouter } from 'core/useRouter';

export const useShallowUpdate = (method = 'replace') => {
  const { [method]: routerMethod = () => {}, query = {}, pathname = '' } = useRouter();

  const setRouterQuery = useCallback(
    (params = {}, as, options = {}) => {
      const { query: argQuery = {}, replace = false, ...otherParams } = params;

      return routerMethod(
        {
          pathname,
          query: replace ? argQuery : { ...query, ...argQuery },
          ...otherParams,
        },
        as,
        { scroll: false, shallow: true, ...options }
      );
    },
    [routerMethod, pathname, query]
  );

  const deleteFromRouterQuery = useCallback(
    propName => {
      const propNameArr = Array.isArray(propName) ? propName : [propName];
      const queryReplace = { ...query };

      for (let prop of propNameArr) {
        if (query.hasOwnProperty(prop)) {
          delete queryReplace[prop];
        }
      }

      return setRouterQuery({ query: queryReplace, replace: true });
    },
    [query, pathname, routerMethod]
  );

  return { setRouterQuery, deleteFromRouterQuery };
};
