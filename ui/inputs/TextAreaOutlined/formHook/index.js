// Components
import { TextAreaOutlined as Area } from 'ui/inputs/TextAreaOutlined';
import { BottomError } from 'ui/inputs/BottomError';

// Hooks
import { useFormContext } from 'react-hook-form';

export const TextAreaOutlined = ({
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
      <Area {...register(name, rules)} {...props} />
    </BottomError>
  );
};
