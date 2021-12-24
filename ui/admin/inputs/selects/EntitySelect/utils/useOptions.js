import { useMemo } from 'react';
import { deepSearchKey } from 'utils/deepSearchKey';

export const useOptions = (dataArr, optionKey, labelKeys, valueKeys) =>
  useMemo(
    () =>
      dataArr.map((opt = {}, index) => {
        let label = Array.isArray(labelKeys) ? labelKeys : [labelKeys];
        const value = deepSearchKey(opt, optionKey);
        let valueForChange = opt;

        label = label.reduce((accum, key = '') => {
          const l = String(deepSearchKey(opt, key));
          accum = `${accum} ${l}`;
          return accum;
        }, '');

        if (typeof valueKeys === 'string' && valueKeys.length) {
          valueForChange = deepSearchKey(opt, valueKeys);
        }

        if (Array.isArray(valueKeys)) {
          valueForChange = valueKeys.reduce((accum, current = '') => {
            accum[current] = opt[current];
            return accum;
          }, {});
        }

        return { label, value, 'data-fullvalue': valueForChange, index };
      }),
    [dataArr, optionKey, labelKeys, valueKeys]
  );
