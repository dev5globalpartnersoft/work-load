import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { apiGetAuthData, QUERY_KEY_AUTH_DATA } from 'someApi/auth/apiGetAuthData';

export const useAuthData = (params = {}, options = {}) => {
  const queryData = useQuery({
    queryKey: [QUERY_KEY_AUTH_DATA, params],
    queryFn: () => apiGetAuthData(params),
    ...options,
  });

  const { data } = queryData;

  return useMemo(() => {
    return { ...queryData, ...data, userData: data };
  }, [queryData]);
};
