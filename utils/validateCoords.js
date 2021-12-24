export const validateCoords = (latLng = {}) => {
  const { lat, lng } = latLng;

  const numLat = +lat;
  const numLng = +lng;

  if (isNaN(numLat) || isNaN(numLng)) {
    return { lat: 0, lng: 0, isValidCoords: false, isValid: false };
  }

  return { lat: numLat, lng: numLng, numLat, numLng, isValidCoords: true, isValid: true };
};
