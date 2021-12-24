import { useMemo } from 'react';

export const useOptionKeys = (optionKeys, hasItemsArr) =>
  useMemo(() => {
    if (hasItemsArr) {
      const { label = '', value = '', option = value } = optionKeys || {};
      return [option, label, value];
    }

    const { option = 'id', label = 'name', value = '' } = optionKeys || {};
    return [option, label, value];
  }, [optionKeys, hasItemsArr]);
