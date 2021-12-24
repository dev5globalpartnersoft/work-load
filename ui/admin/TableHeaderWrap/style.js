import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
`;

export const RowWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TitleRow = styled(RowWrap)`
  margin-bottom: 15px;
`;

export const Wrap = styled.div`
  padding: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
