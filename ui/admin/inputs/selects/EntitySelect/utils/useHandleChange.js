import { useCallback } from 'react';
import isPrimitive from 'is-primitive';

export const useHandleChange = (onChange, valueKeys, valueOutTransform, isSingle) =>
  useCallback(
    (...args) => {
      const [, optionsValue = []] = args;

      const selectedOptions = Array.isArray(optionsValue) ? optionsValue : [optionsValue];
      let transformedSelectedOptions = [];

      selectedOptions.forEach((opt = {}) => {
        if (isPrimitive(opt)) {
          return transformedSelectedOptions.push(opt);
        }

        if (opt.hasOwnProperty('data-fullvalue')) {
          transformedSelectedOptions.push(opt?.['data-fullvalue']);
        }
      });

      if (isSingle) {
        transformedSelectedOptions = transformedSelectedOptions?.[0];
      }

      const reTransformedSelectedOptions = valueOutTransform(transformedSelectedOptions);

      onChange(reTransformedSelectedOptions);
    },
    [onChange, valueKeys, valueOutTransform, isSingle]
  );
