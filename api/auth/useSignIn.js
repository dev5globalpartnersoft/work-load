import { useMutation } from 'react-query';
import { apiSignIn, QUERY_KEY_SIGN_IN } from 'api/auth/apiSignIn';

export const useSignIn = (options = {}) => {
  return useMutation({
    mutationKey: QUERY_KEY_SIGN_IN,
    mutationFn: apiSignIn,
    ...options,
  });
};
