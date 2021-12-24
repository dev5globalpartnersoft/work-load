// Styles
import { Wrap, Message } from './style';

// Hooks
import { useFieldErrorT } from 'utils/hooks/useFieldErrorT';

export const BottomError = ({ name, rules, baseTPath, ...props }) => {
  const { message } = useFieldErrorT(name, rules, baseTPath);

  return (
    <Wrap {...props}>
      {props.children}
      <Message>{message}</Message>
    </Wrap>
  );
};
