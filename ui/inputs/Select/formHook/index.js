// Components
import { SelectInput as UISelectInput } from 'ui/inputs/Select';
import { BottomError } from 'ui/inputs/BottomError';

import { useFormContext } from 'react-hook-form';

export const SelectInput = ({
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
      <UISelectInput
        {...register(name, rules)} // TypeError: Cannot read properties of undefined (reading 'name')
        {...props}
      />
    </BottomError>
  );
};
