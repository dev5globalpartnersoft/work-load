import { validateCoords } from './validateCoords';

export const compareCoords = (latLngA = {}, latLngB = {}) => {
  const { lat: latA, lng: lngA, isValid: isValidA } = validateCoords(latLngA);
  const { lat: latB, lng: lngB, isValid: isValidB } = validateCoords(latLngB);

  if (isValidA && isValidB) {
    return latA === latB && lngA === lngB;
  }

  return false;
};
