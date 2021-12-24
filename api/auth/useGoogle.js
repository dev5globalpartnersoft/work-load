import { useMutation } from 'react-query';
import { apiGoogle, QUERY_KEY_SIGN_IN } from 'api/auth/apiGoogle';

export const useGoogle = (options = {}) => {
  return useMutation({
    mutationKey: QUERY_KEY_SIGN_IN,
    mutationFn: apiGoogle,
    ...options,
  });
};
