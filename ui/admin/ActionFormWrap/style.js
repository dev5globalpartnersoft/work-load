import styled, { css } from 'styled-components';

// UI
import { ButtonFilled } from 'ui/buttons/ButtonFilled';
import { ButtonFilledSpin } from 'ui/buttons/ButtonFilledSpin';

export const SubmitButton = styled(ButtonFilledSpin).attrs(() => ({ type: 'submit' }))`
  padding: 5px 10px !important;
  height: 40px;
  min-width: 100px;
`;

export const CancelButton = styled(ButtonFilled).attrs(() => ({ type: 'button' }))`
  padding: 5px 10px;
  height: 40px;
  min-width: 100px;
`;

export const BackButton = styled(ButtonFilled).attrs(() => ({ type: 'button' }))`
  padding: 0;
  width: 30px;
  min-height: 30px;
  max-height: 30px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const BottomWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 20px 0;
  & > *:not(:first-child) {
    margin-left: 20px;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TopWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    background-color: ${theme.colors.white};

    ${theme.media.mobileL} {
      padding: 0 10px;
    }
  `};
`;
