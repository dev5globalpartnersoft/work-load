// Styles
import { StyledButton } from './style';

export const AntButton = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
