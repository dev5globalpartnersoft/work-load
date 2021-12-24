// Styles
import { StyledTextArea } from './style';

// Components
import { Title } from '../InputOutlined/style';
import { BottomError } from '../BottomError';

// Hooks
import { useFormContext } from 'react-hook-form';

export const TextAreaOutlined = ({
  ErrorWrap = BottomError,
  name = '',
  label = '',
  placeholder = label,
  className,
  rules,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <ErrorWrap name={name} rules={rules} className={className}>
      <Title>{label}</Title>
      <StyledTextArea {...register(name, rules)} {...props} />{' '}
    </ErrorWrap>
  );
};
