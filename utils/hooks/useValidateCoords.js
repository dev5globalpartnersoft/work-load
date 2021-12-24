import { useMemo } from 'react';
import { validateCoords } from '../validateCoords';

export const useValidateCoords = latLng =>
  useMemo(() => validateCoords(latLng), [latLng]);
