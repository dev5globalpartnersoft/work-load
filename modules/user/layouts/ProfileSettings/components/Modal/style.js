import styled, { css } from 'styled-components';

// UI
import { ButtonFilled } from 'ui/buttons/ButtonFilled';
import { ButtonFilledSpin } from 'ui/buttons/ButtonFilledSpin';
import { Link } from 'ui/Link';

export const P = styled.p`
  font-size: 18px;
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.bold};
  `};
`;

export const GreenP = styled(P)`
  ${({ theme }) => css`
    color: ${theme.colors.main};
  `}
`;

export const WrapModal = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateRestaurant = styled(ButtonFilledSpin).attrs(() => ({
  type: 'button',
}))`
  padding: 5px 10px !important;
  height: 40px;
  min-width: 150px;
`;

export const LinkCreateRestaurant = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

export const CreateProduct = styled(ButtonFilled).attrs(() => ({ type: 'button' }))`
  padding: 5px 10px;
  height: 40px;
  min-width: 150px;
`;

export const LinkCreateProduct = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
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
  ${({ theme }) => css`
    ${theme.media.mobileS} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > *:not(:first-child) {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  `}
`;

export const BackButton = styled(ButtonFilled).attrs(() => ({ type: 'button' }))`
  padding: 0;
  width: 30px;
  min-height: 30px;
  max-height: 30px;
  position: absolute;
  right: 20px;
  top: 15px;
`;
