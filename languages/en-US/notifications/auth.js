import { authErrorsByCode } from './authErrorsByCode';
import { successAuthorization } from './successAuthorization';
import { confirmYourEmail } from './confirmYourEmail';
import { passwordResetSended } from './passwordResetSended';
import { confirmYourPassword } from './confirmYourPassword';

export const auth = {
  ...authErrorsByCode,
  successAuthorization,
  confirmYourEmail,
  passwordResetSended,
  confirmYourPassword,
  defError: {
    message: 'Error',
    description: 'Something went wrong. Please try again later.',
  },
};
