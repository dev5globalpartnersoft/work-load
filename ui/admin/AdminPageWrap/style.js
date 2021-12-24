import styled from 'styled-components';

export const MaxWidth = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1920px;
`;

export const Wrap = styled.main`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: dimgrey;
  flex: 1;

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;
