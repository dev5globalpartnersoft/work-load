// Styles
import { StyledImage, ImageWrapper } from './style';

export const BackgroundImage = props => {
  return (
    <ImageWrapper>
      <StyledImage layout="fill" {...props} />
    </ImageWrapper>
  );
};
