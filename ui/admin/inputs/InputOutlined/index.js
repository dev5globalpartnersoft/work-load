import { Input, Title } from './style';

// Components
import { BottomError } from '../BottomError';

import { useFormContext } from 'react-hook-form';

export const InputOutlined = ({
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
      <Input placeholder={placeholder} {...register(name, rules)} {...props} />
    </ErrorWrap>
  );
};
