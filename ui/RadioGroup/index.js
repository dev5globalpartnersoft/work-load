// Components
import { RadioButton as Radio } from 'ui/RadioButton';
import { BottomError } from 'ui/inputs/BottomError';

import { useController } from 'react-hook-form';

export const RadioGroup = ({
  ErrorWrap = BottomError,
  items = [],
  name = '',
  className = '',
  defaultValue,
  rules,
  baseTPath,
  disabled,
  ...props
}) => {
  const { field: { value: fieldValue, onChange = () => {} } = {} } = useController({
    name,
    defaultValue,
    rules,
  });
  // console.log('fieldValue', fieldValue);
  return (
    <BottomError className={className} name={name} rules={rules} baseTPath={baseTPath}>
      {items.map((item = {}, index) => {
        const { label = '', value = '' } = item;

        const checked = value === fieldValue;

        const handleChange = () => {
          onChange(value);
        };

        return (
          <Radio
            key={index}
            onChange={handleChange}
            checked={checked}
            disabled={disabled}
            {...props}
          >
            {label}
          </Radio>
        );
      })}
    </BottomError>
  );
};
