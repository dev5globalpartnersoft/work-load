import { InputOutlined } from '../InputOutlined/formHook';

// Utils
import { emailPattern } from 'utils/emailPattern';

// Hooks
import { useMemo } from 'react';

export const EmailInputOutlined = ({ rules = {}, ...props }) => {
  const extendedRules = useMemo(() => ({ pattern: emailPattern, ...rules }), [rules]);

  return <InputOutlined rules={extendedRules} {...props} />;
};
