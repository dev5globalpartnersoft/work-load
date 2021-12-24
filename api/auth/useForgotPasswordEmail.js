import { useMutation } from 'react-query';
import {
  apiForgotPasswordEmail,
  QUERY_KEY_FORGOT_PASSWORD_EMAIL,
} from 'api/auth/apiForgotPasswordEmail';

export const useForgotPasswordEmail = (options = {}) => {
  return useMutation({
    mutationKey: QUERY_KEY_FORGOT_PASSWORD_EMAIL,
    mutationFn: apiForgotPasswordEmail,
    ...options,
  });
};
