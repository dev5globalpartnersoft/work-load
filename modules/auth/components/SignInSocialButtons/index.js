import { forwardRef } from 'react';

// Styles
import {
  ButtonBottomSignIn,
  GoogleIcon,
  FacebookIcon,
  MicrosoftIcon,
  AppleIcon,
  Wrap,
} from './style';

export const SignInSocialButtons = forwardRef(({ ...props }, ref) => {
  const authorization = async type => {
    await window.open(`https://stag.allergyfoodies.com/api/auth/${type}`);
  };
  return (
    <Wrap {...props}>
      <ButtonBottomSignIn onClick={() => authorization('google')} ref={ref}>
        <GoogleIcon />
        Google
      </ButtonBottomSignIn>
      <ButtonBottomSignIn onClick={() => authorization('facebook')} ref={ref}>
        <FacebookIcon />
        Facebook
      </ButtonBottomSignIn>
      <ButtonBottomSignIn onClick={() => authorization('microsoft')} ref={ref}>
        <MicrosoftIcon />
        Microsoft
      </ButtonBottomSignIn>
      <ButtonBottomSignIn onClick={() => authorization('apple')} ref={ref}>
        <AppleIcon />
        Apple
      </ButtonBottomSignIn>
    </Wrap>
  );
});
