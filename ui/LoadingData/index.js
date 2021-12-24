import { Wrap, LoadPage, StyledSpin } from './style';

export const LoadingData = props => {
  return (
    <Wrap {...props}>
      <LoadPage>
        <StyledSpin />
      </LoadPage>
    </Wrap>
  );
};
