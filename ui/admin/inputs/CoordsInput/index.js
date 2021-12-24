import { useState } from 'react';

// Styles
import { Title, StyledInput, MapPopover, LocationIcon, MapSearch } from './style';

// Utils
import { useFormContext, useController } from 'react-hook-form';
import { geocodeByPlaceId, geocodeByLatLng } from 'react-google-places-autocomplete';

// Components
import { BottomError } from '../BottomError';

export const CoordsInput = ({
  className,
  addressName = 'address',
  latName = 'lat',
  lngName = 'lng',
  label = '',
  placeholder = label,
  ErrorWrap = BottomError,
  rules,
  latRules = rules,
  lngRules = rules,
  addressRules = rules,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const { control } = useFormContext();

  const { field: latField = {} } = useController({
    name: latName,
    control,
    rules: latRules,
  });
  const { field: lngField = {} } = useController({
    name: lngName,
    control,
    rules: lngRules,
  });
  const { field: addressField = {} } = useController({
    name: addressName,
    control,
    rules: addressRules,
  });

  const { value: latValue = 0, onChange: onLatChange = () => {} } = latField;
  const { value: lngValue = 0, onChange: onLngChange = () => {} } = lngField;
  const { value: addressValue = '', onChange: onAddressChange = () => {} } = addressField;

  const handleMapOpenClick = () => {
    setVisible(true);
  };

  const handleMapVisibleChange = v => {
    if (!v) {
      setVisible(false);
    }
  };
  const handleMapClick = async (e = {}) => {
    const { latLng: { lat = () => '', lng = () => '' } = {} } = e;
    const mapLat = lat();
    const mapLng = lng();

    const result = (await geocodeByLatLng({ lat: mapLat, lng: mapLng }))?.[0] || {};
    const {
      geometry: {
        location: { lat: latResponse = () => 0, lng: lngResponse = () => 0 } = {},
      } = {},
      formatted_address = '',
    } = result;
    const _lat = latResponse();
    const _lng = lngResponse();

    if (_lat || _lng) {
      onLatChange(_lat);
      onLngChange(_lng);
      onAddressChange(formatted_address);
    }
  };

  const handleSearchChange = async (v = {}) => {
    const { value = {} } = v;
    const { place_id } = value;

    if (place_id) {
      const result = (await geocodeByPlaceId(place_id))?.[0] || {};

      const {
        geometry: { location: { lat = () => 0, lng = () => 0 } = {} } = {},
        formatted_address = '',
      } = result;
      const _lat = lat();
      const _lng = lng();

      if (_lat || _lng) {
        onLatChange(_lat);
        onLngChange(_lng);
        onAddressChange(formatted_address);
      }
    }
  };

  return (
    <BottomError rules={rules}>
      <Title>{label}</Title>
      <MapPopover
        visible={visible}
        trigger="click"
        onVisibleChange={handleMapVisibleChange}
        className={className}
        lat={latValue}
        lng={lngValue}
        topContent={
          <MapSearch onChange={handleSearchChange} selectProps={{ autoFocus: true }} />
        }
        onClick={handleMapClick}
      >
        <StyledInput
          onClick={handleMapOpenClick}
          value={
            addressValue || latValue || lngValue
              ? `${addressValue} ${latValue},${lngValue}`
              : undefined
          }
          {...props}
        />
        <LocationIcon onClick={handleMapOpenClick} />
      </MapPopover>
    </BottomError>
  );
};
