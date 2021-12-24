// Styles
import { Wrap, Title } from './style';

export const TopTitleWrap = ({ title = '', label = title, ...props }) => {
  return (
    <Wrap {...props}>
      <Title>{label}</Title>
      {props.children}
    </Wrap>
  );
};
