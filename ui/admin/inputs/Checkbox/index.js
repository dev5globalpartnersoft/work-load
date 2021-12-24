import React, { forwardRef, useCallback } from 'react';
import { LabelWrap, Title, StyledCheckbox } from './style';

// Hooks
import { useController } from 'react-hook-form';

// Components
import { BottomError } from '../BottomError';

export const Checkbox = forwardRef(
  ({ name = '', label = '', disabled, rules, className, ...props }, ref) => {
    const { field: { onChange = () => {}, value } = {} } = useController({ name, rules });

    const handleChange = useCallback(() => onChange(!value), [onChange, value]);

    return (
      <BottomError className={className} name={name} rules={rules}>
        <LabelWrap>
          <Title>{label}</Title>
          <StyledCheckbox onChange={handleChange} checked={value} ref={ref} {...props} />
        </LabelWrap>
      </BottomError>
    );
  }
);
