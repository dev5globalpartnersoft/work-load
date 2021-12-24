import { useMutation } from 'react-query';
import { apiResetPassword, QUERY_KEY_RESET_PASSWORD } from 'api/auth/apiResetPassword';

export const useResetPassword = (options = {}) => {
  return useMutation({
    mutationKey: QUERY_KEY_RESET_PASSWORD,
    mutationFn: apiResetPassword,
    ...options,
  });
};
