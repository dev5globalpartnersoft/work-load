import { useMutation } from 'react-query';
import { apiVerifyEmail, QUERY_KEY_VERIFY_EMAIL } from 'someApi/auth/apiVerifyEmail';

export const useVerifyEmail = (options = {}) => {
  return useMutation({
    mutationKey: QUERY_KEY_VERIFY_EMAIL,
    mutationFn: apiVerifyEmail,
    ...options,
  });
};
