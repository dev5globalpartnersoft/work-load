import { useMutation } from 'react-query';
import { apiSignUp, QUERY_KEY_SIGN_UP } from 'someApi/auth/apiSignUp';

export const useSignUp = (options = {}) => {
  return useMutation({
    mutationKey: QUERY_KEY_SIGN_UP,
    mutationFn: apiSignUp,
    ...options,
  });
};
