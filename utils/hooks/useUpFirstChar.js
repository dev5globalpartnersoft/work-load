import { upFirstChar } from '../upFirstChar';
import { useMemo } from 'react';

export const useUpFirstChar = (str = '') => useMemo(() => upFirstChar(str), [str]);
