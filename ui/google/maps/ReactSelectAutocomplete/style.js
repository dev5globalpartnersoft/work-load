import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => width || '205px'};

  [class*='css-1pahdxg-control'],
  [class*='css-1pahdxg-control']:hover,
  [class*='css-1pahdxg-control']:focus {
    border-color: ${({ theme }) => theme?.colors.main} !important;
    box-shadow: 0 0 0 1px ${({ theme }) => theme?.colors.main} !important;
  }

  [class*='css-1wa3eu0-placeholder'] {
    display: flex;
    align-items: center;
    color: #4d5965;
  }

  [class*='css-g1d714-ValueContainer'],
  [class$='-control'] > div {
    justify-content: flex-end;
  }
  [class$='-ValueContainer'] {
    [class$='-singleValue'] {
      direction: ${({ direction }) => (direction ? direction : 'rtl')};
    }
  }
  [class$='-loadingIndicator'] {
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme?.colors.main};
  }
  [class$='-menu'] {
    [class*='css-1n7v3ny-option'] {
      background-color: ${({ theme }) => theme?.colors.main};
      opacity: 0.8;
    }
    [class*='-option'] {
      &:hover {
        background-color: ${({ theme }) => theme?.colors.main};
        opacity: 0.7;
      }
    }
    [class*='css-9gakcf-option'] {
      background-color: ${({ theme }) => theme?.colors.main};
      &:hover {
        opacity: 1;
      }
    }
  }
`;
