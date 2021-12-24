import { useState, useCallback } from 'react';
import { Autocomplete } from '@react-google-maps/api';

// UI
import { InputOutlined } from 'ui/inputs/InputOutlined';

// Hooks
import { useMapsPlacesScript } from '../hooks/useMapsPlacesScript';

// Searches only in Israel
const restrictions = {
  country: 'AU',
};

export const GoogleMapsAutocomplete = ({
  className = '',
  defaultValue,
  value,
  placeholder,
  onChange = () => {},
  onInputChange = () => {},
  onLoad = () => {},
  ...props
}) => {
  const [ref, setRef] = useState();
  const { isLoaded } = useMapsPlacesScript();

  const handleLoad = useCallback(
    autocomplete => {
      setRef(autocomplete);
      onLoad(autocomplete);
    },
    [onLoad]
  );

  const handlePlaceChange = useCallback(() => {
    if (ref) {
      onChange(ref.getPlace());
    }
  }, [onChange, ref]);

  const handleInputChange = useCallback(
    e => {
      const value = e?.target?.value;
      if (!value) {
        onChange({ isCleared: true });
      }

      onInputChange(e, value);
    },
    [onChange, onInputChange]
  );

  return isLoaded ? (
    <Autocomplete
      onLoad={handleLoad}
      onPlaceChanged={handlePlaceChange}
      className={className}
      restrictions={restrictions}
      {...props}
    >
      <InputOutlined
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </Autocomplete>
  ) : (
    <div className={className}>
      <InputOutlined
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
