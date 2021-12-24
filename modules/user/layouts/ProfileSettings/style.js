import styled, { css } from 'styled-components';

// Components
import { StyledTitle } from 'modules/user/components/Title';
import { SubmitButton } from 'modules/user/layouts/ProfileSettings/components/SubmitButton';

// UI
import { AllergiesSelect as UIAllergiesSelect } from 'ui/AllergiesSelect';
import { Spin } from 'ui/Spin';

export const LoadPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  position: relative;
`;

export const StyledSpin = styled(Spin)`
  position: absolute;
  height: 20px;
`;

export const Wrap = styled.form`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  padding: 106px 20px 0 20px;
  flex: 1;
  ${({ theme }) => css`
    ${theme.media.mobileL} {
      padding-top: 20px;
    }
  `}
`;

export const Title = styled(StyledTitle)``;

export const AllergiesSelect = styled(UIAllergiesSelect)`
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  ${({ theme }) => css`
    ${theme.media.mobileM} {
      margin-bottom: 24px;
    }
  `};
`;

export const NextStepButton = styled(SubmitButton).attrs(() => ({ type: 'button' }))``;
