// Styles
import { EnterEmailInput, EnterPasswordInput } from '../SignInInput/style';

export const CreateAccountInput = props => {
  return (
    <>
      <EnterEmailInput placeholder="Enter Email Address" />
      <EnterPasswordInput placeholder="Create Password" />
    </>
  );
};
