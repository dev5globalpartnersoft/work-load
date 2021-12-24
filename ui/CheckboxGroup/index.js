import { useMemo, useEffect } from 'react';

// Components
import { StyledCheckbox } from './style';
import { BottomError } from 'ui/inputs/BottomError';

// Form
import { useController } from 'react-hook-form';

const defValueTransformFn = v => v;

export const CheckboxGroup = ({
  ErrorWrap = BottomError,
  items = [],
  name = '',
  className = '',
  defaultValue,
  rules,
  baseTPath = '',
  disabled,
  forWhoUse = '',
  valueInTransform = defValueTransformFn,
  valueOutTransform = defValueTransformFn,
  ...props
}) => {
  const { field: { value: fieldValue = [], onChange = () => {} } = {} } = useController({
    name,
    defaultValue,
    rules,
  });
  useEffect(() => {
    onChange(forWhoUse.split(','));
  }, []);
  // const transformedValue = useMemo(() => {
  //   const transformedValue = valueInTransform(fieldValue);
  //   return Array.isArray(transformedValue) ? transformedValue : [];
  // }, [fieldValue, valueInTransform]);
  return (
    <BottomError className={className} name={name} rules={rules} baseTPath={baseTPath}>
      {/* {items.map((item = '', index) => {
        const { label = '', value } = item;

        let checkedIndex;
        const checkedValue = transformedValue.find((v, index) => {
          if (v === value) {
            checkedIndex = index;
            return true;
          }

          return false;
        });
        let checked = !!checkedValue;

        const handleChange = () => {
          if (checked) {
            const valueReplace = transformedValue.splice(checkedIndex - 1, 1);
            const transformedValueReplace = valueOutTransform(valueReplace);
            onChange(transformedValueReplace);
          } else {
            const valueReplace = [...transformedValue, value];
            const transformedValueReplace = valueOutTransform(valueReplace);
            onChange(transformedValueReplace);
          }
        };

        return (
          <StyledCheckbox
            onChange={handleChange}
            key={index}
            disabled={disabled}
            checked={checked}
          {...props}
          >
            {label}
          </StyledCheckbox>
        );
      })} */}

      {items.map((item = '') => {
        const { label = '', value } = item;
        let changeChecked = false;
        if (forWhoUse.split(',').includes(value)) {
          changeChecked = true;
        }
        const handleChange = e => {
          const currentValue = e.target.index;
          const currentChecked = e.target.checked;
          if (!currentChecked) {
            onChange(fieldValue.filter(elem => elem !== currentValue));
          } else {
            onChange([...new Set([...fieldValue, currentValue])]);
          }
        };

        return (
          <StyledCheckbox
            key={value}
            index={value}
            onChange={e => handleChange(e)}
            defaultChecked={changeChecked}
            {...props}
          >
            {label}
          </StyledCheckbox>
        );
      })}
    </BottomError>
  );
};
