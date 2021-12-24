import { useCallback, useState, useEffect } from 'react';
import { GoogleMapsAutocomplete as Autocomplete } from '../index';
import { useGeolocation } from '../../hooks/useGeolocation';

export const GoogleMapsAutocomplete = ({
  onChange = () => {},
  onInputChange = () => {},
  ...props
}) => {
  const [value, setValue] = useState();
  const { locationLabel, setGeolocation, deleteGeolocation } = useGeolocation();

  const handleChange = useCallback(
    (data = {}) => {
      const {
        formatted_address = '',
        geometry: { location = {} } = {},
        isCleared,
      } = data;
      if (isCleared) {
        onChange(data, data);
        deleteGeolocation();
      } else {
        const { lat: latFn = () => 0, lng: lngFn = () => 0 } = location;
        const lat = latFn();
        const lng = lngFn();
        setGeolocation({ lat, lng, locationLabel: formatted_address });
        onChange(data, { lat, lng });
      }
    },
    [onChange]
  );

  const handleInputChange = useCallback(
    e => {
      const v = e.target.value;
      setValue(v);
      onInputChange(v);
    },
    [onInputChange]
  );

  useEffect(() => {
    setValue(locationLabel);
  }, [locationLabel]);

  return (
    <Autocomplete
      value={value}
      onChange={handleChange}
      onInputChange={handleInputChange}
      {...props}
    />
  );
};
