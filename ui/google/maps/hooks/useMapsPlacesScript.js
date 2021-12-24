import { useJsApiLoader } from '@react-google-maps/api';
import { GOOGLE_MAP_API_KEY } from 'config';

export const useMapsPlacesScript = (options = {}) => {
  return useJsApiLoader({
    id: 'google-map-script',
    libraries: ['places'],
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
    ...options,
  });
};
