import { useMemo } from 'react';

// Utils
import { deepSearchKey } from 'utils/deepSearchKey';
import isPrimitive from 'is-primitive';

export const useSelectedOptionsValues = (
  value,
  optionKey,
  labelKeys,
  valueInTransform,
  selectOptions
) =>
  useMemo(() => {
    const transformedValue = valueInTransform(value);
    const arrValue = Array.isArray(transformedValue)
      ? transformedValue
      : [transformedValue];

    const selectedValues = [];

    arrValue.forEach(opt => {
      const v = deepSearchKey(opt, optionKey);

      if (typeof v === 'string' && !v.length) {
        return;
      }

      let result = isPrimitive(v) ? v : String(v);
      selectedValues.push(result);
    });

    const selectedOptions = selectOptions.filter((opt = {}) =>
      selectedValues.includes(opt?.value)
    );

    return [selectedValues, selectedOptions];
  }, [value, optionKey, labelKeys, valueInTransform, selectOptions]);
