// Styles
import { TermsStyledLink, Wrap, GrayText } from './style';

export const TermsAndConditionLink = props => {
  return (
    <Wrap>
      <GrayText>By creating your account, you agree to our</GrayText>
      <TermsStyledLink href={{ query: { disclaimer: true } }}>
        Terms and Conditions & Privacy Policy
      </TermsStyledLink>
    </Wrap>
  );
};
