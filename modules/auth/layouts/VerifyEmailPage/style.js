import styled, { css } from 'styled-components';

// UI
import { LinkFilled } from 'ui/buttons/LinkFilled';

// Mixins
import { hCenterRow100 } from 'styles/mixins/flex/row/hCenterRow100';
import { fullCenterColumn100 } from 'styles/mixins/flex/column/fullCenterColumn100';
import { maxWidthPadding } from 'styles/mixins/maxWidthPadding';

export const Button = styled(LinkFilled)`
  padding: 15px 20px;
  width: 100%;
  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const ButtonsWrap = styled.div`
  ${hCenterRow100};
  max-width: 600px;
  margin-top: 60px;
`;

export const Title = styled.h1``;

export const Wrap = styled.main`
  ${fullCenterColumn100};
  ${maxWidthPadding};
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  flex: 1;

  ${({ theme }) => css`
    ${theme.media.mobileL} {
      ${ButtonsWrap} {
        flex-direction: column;
      }
      ${Button} {
        padding: 10px;

        margin-right: 0;
        :not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  `};
`;
