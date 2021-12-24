import styled, { css } from 'styled-components';

// UI
import { ButtonFilledOutlined } from 'ui/buttons/ButtonFilledOutlined';
import { Icon as UIIcon } from 'ui/Icon';

export const ButtonBottomSignIn = styled(ButtonFilledOutlined).attrs(() => ({
  type: 'button',
}))`
  ${({ theme }) => css`
    position: relative;
    max-width: 48%;
    width: 100%;
    min-width: 161px;
    min-height: 56px;
    margin-right: 20px;
    padding-left: 35px;
    cursor: pointer;
    font-weight: ${theme.fontWeights.normal};
    :nth-child(2n) {
      margin-right: 0;
    }
    display: inline-block;
    text-align: center;
    margin-bottom: 25px;
    ${theme.media.tablet} {
      max-width: 32%;
    }
    ${theme.media.mobileM} {
      margin-right: 13px;
      min-height: 48px;
    }
  `};
`;
// .attrs(() => {type: b});

export const GoogleIcon = styled(UIIcon).attrs(() => ({ name: 'google.svg' }))`
  ${({ theme }) => css`
    position: absolute;
    margin-left: 53px;
    width: 18px;
    height: 18px;
    ${theme.media.tablet} {
      margin-left: 11px;
    }
  `};
`;

export const FacebookIcon = styled(UIIcon).attrs(() => ({ name: 'facebook.svg' }))`
  ${({ theme }) => css`
    position: absolute;
    margin-left: 45px;
    width: 18px;
    height: 18px;
    ${theme.media.tablet} {
      margin-left: 11px;
    }
  `};
`;

export const MicrosoftIcon = styled(UIIcon).attrs(() => ({ name: 'microsoft.svg' }))`
  ${({ theme }) => css`
    position: absolute;
    margin-left: 46px;
    width: 18px;
    height: 18px;
    ${theme.media.tablet} {
      margin-left: 0;
    }
  `};
`;

export const AppleIcon = styled(UIIcon).attrs(() => ({ name: 'apple.svg' }))`
  ${({ theme }) => css`
    position: absolute;
    margin-left: 46px;
    width: 18px;
    height: 18px;
    ${theme.media.tablet} {
      margin-left: 0;
    }
  `};
`;

export const Wrap = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 64px;
    ${theme.media.mobileM} {
      margin-bottom: 32px;
    }
  `};
`;
