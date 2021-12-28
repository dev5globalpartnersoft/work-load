import { forwardRef, useMemo, useCallback, useState } from 'react';

// Styles
import { StyledSelect } from './style';

// Utils
import isPrimitive from 'is-primitive';

// Hooks
import { useController } from 'react-hook-form';
import { useGetAllRecords } from 'someApi/admin/crudHooks';
import { useOptionKeys } from './utils/useOptionKeys';
import { useDataArr } from './utils/useDataArr';
import { useOptions } from './utils/useOptions';
import { useHandleChange } from './utils/useHandleChange';
import { useSearchParams } from './utils/useSearchParams';
import { useSelectedOptionsValues } from './utils/useSelectedOptionsValues';
import { useSearchWithSelectedOptions } from './utils/useSearchWithSelectedOptions';

import { BottomError } from '../../BottomError';
import { Title } from '../../Title';

const defValueInTransform = v => v;
const defValueOutTransform = v => v;

export const EntitySelect = forwardRef(
  (
    {
      mode = 'single',
      entity = '',
      items,
      hasItemsArr = Array.isArray(items),
      dataKey = hasItemsArr ? '' : '0',
      countKey = hasItemsArr ? '' : '1',
      optionKeys,
      params,
      searchParamName = 'q',
      options = {},
      name = '',
      label = '',
      placeholder = label,
      rules,
      defaultValue,
      showSearch = true,
      valueInTransform = defValueInTransform,
      valueOutTransform = defValueOutTransform,
      ...props
    },
    ref
  ) => {
    const isSingle = mode === 'single';
    const isMultiple = mode === 'multiple';

    const [search, setSearch] = useState('');

    const isGetEnabled = !hasItemsArr && Boolean(entity);

    const { field: { onChange = () => {}, value } = {} } = useController({
      name,
      rules,
      defaultValue,
    });

    const [optionKey, labelKeys, valueKeys] = useOptionKeys(optionKeys, hasItemsArr);

    // Get records
    const { data = items, isFetching } = useGetAllRecords(params, {
      entity,
      enabled: isGetEnabled,
      ...options,
    });

    const [searchParams, debouncedSearch] = useSearchParams(
      params,
      searchParamName,
      search
    );

    const isSearchEnabled = isGetEnabled && Boolean(debouncedSearch);

    // Search records
    const { data: searchData, isFetching: isSearchFetching } = useGetAllRecords(
      searchParams,
      {
        entity,
        enabled: isSearchEnabled,
        ...options,
      }
    );

    const [dataArr] = useDataArr(dataKey, data, countKey);
    const [searchDataArr] = useDataArr(dataKey, searchData, countKey);

    const selectOptions = useOptions(dataArr, optionKey, labelKeys, valueKeys);
    const searchSelectOptions = useOptions(
      searchDataArr,
      optionKey,
      labelKeys,
      valueKeys
    );

    const handleChange = useHandleChange(
      onChange,
      valueKeys,
      valueOutTransform,
      isSingle
    );

    const [selectedValues, selectedOptions] = useSelectedOptionsValues(
      value,
      optionKey,
      labelKeys,
      valueInTransform,
      selectOptions
    );

    const handleSearch = useCallback(v => {
      setSearch(v);
    }, []);

    const handleBlur = useCallback(() => {
      setSearch('');
    }, []);

    const handleSelect = useCallback(() => {
      setSearch('');
    }, []);

    const searchWithSelectedOptions = useSearchWithSelectedOptions(
      searchSelectOptions,
      selectedOptions,
      isSearchEnabled
    );

    const handleFilterOption = useCallback((searchV = '', opt = {}) => {
      const { label = '', value = '' } = opt;
      const lowerSearchV = String(searchV).toLowerCase();
      const lowerValue = String(value).toLowerCase();
      const lowerLabel = String(label).toLowerCase();

      return lowerLabel.includes(lowerSearchV) || lowerValue.includes(lowerSearchV);
    }, []);

    return (
      <BottomError name={name} rules={rules}>
        <Title>{label}</Title>
        <StyledSelect
          loading={isFetching || isSearchFetching}
          options={
            isSearchEnabled && !isSearchFetching
              ? searchWithSelectedOptions
              : selectOptions
          }
          onChange={handleChange}
          onSearch={handleSearch}
          filterOption={handleFilterOption}
          onBlur={handleBlur}
          onSelect={handleSelect}
          value={selectedValues}
          placeholder={placeholder}
          showSearch={showSearch}
          ref={ref}
          mode={mode}
          {...props}
        />
      </BottomError>
    );
  }
);
