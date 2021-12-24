import { useMemo } from 'react';
import { useTranslations as useNextIntl } from 'next-intl';

// Utils
import isPlainObject from 'is-plain-obj';
import { createMarkup } from 'utils/createMarkup';

export const useTranslations = (...params) => {
  const t = useNextIntl(...params);

  return useMemo(() => {
    t.arr = (path = '', def = []) => {
      if (!path) return [];
      const result = t.raw(path);
      return Array.isArray(result) ? result : def;
    };

    t.obj = (path = '', def = {}) => {
      if (!path) return {};
      const result = t.raw(path);
      return isPlainObject(result) ? result : def;
    };

    t.html = (path = '', def = '') => {
      if (!path) return '';
      const result = t.raw(path);
      return typeof result === 'string' ? createMarkup(result) : def;
    };

    return t;
  }, [t]);
};
