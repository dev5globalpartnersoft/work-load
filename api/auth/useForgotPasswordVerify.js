import { useMutation } from 'react-query';
import {
  apiForgotPasswordVerify,
  QUERY_KEY_FORGOT_PASSWORD_VERIFY,
} from 'api/auth/apiForgotPasswordVerify';

export const useForgotPasswordVerify = (options = {}) => {
  return useMutation({
    mutationKey: QUERY_KEY_FORGOT_PASSWORD_VERIFY,
    mutationFn: apiForgotPasswordVerify,
    ...options,
  });
};
