import { useMemo } from 'react';

export const useSearchWithSelectedOptions = (
  searchOptions,
  selectedOptions,
  isSearchEnabled
) =>
  useMemo(() => {
    if (!isSearchEnabled) {
      return [];
    }

    const uniqOptions = [...(selectedOptions || [])];

    (searchOptions || []).forEach((opt = {}) => {
      const { value: searchOptValue } = opt;
      if (
        selectedOptions.every((opt = {}) => {
          const { value: selectedValue } = opt;
          return selectedValue !== searchOptValue;
        })
      ) {
        uniqOptions.push(opt);
      }
    });

    return uniqOptions;
  }, [searchOptions, selectedOptions, isSearchEnabled]);
