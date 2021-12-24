// Components
import { InputOutlined as Input } from 'ui/inputs/InputOutlined';
import { BottomError } from 'ui/inputs/BottomError';

import { useFormContext } from 'react-hook-form';

export const InputOutlined = ({
  ErrorWrap = BottomError,
  name = '',
  className = '',
  rules,
  baseTPath,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <BottomError className={className} name={name} rules={rules} baseTPath={baseTPath}>
      <Input {...register(name, rules)} {...props} />
    </BottomError>
  );
};
