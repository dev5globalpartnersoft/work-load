import { useState, useMemo, useCallback } from 'react';
import { Marker } from '@react-google-maps/api';

// Styles
import { Map } from './style';

export const MapMarkersSelect = ({
  entity = '',
  markers,
  selectedCookId,
  onLoad = () => {},
  onMarkerClick = () => {},
  center,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { lat: centerLat = 0, lng: centerLng = 0 } = center || {};
  const validatedCenter = { lat: +centerLat, lng: +centerLng };
  const { lat: numCenterLat, lng: numCenterLng } = validatedCenter;

  const [iconMarker, selectedMarker, userMarker] = useMemo(() => {
    if (isLoaded) {
      const iconMarker = new window.google.maps.MarkerImage(
        '/icons/locationMarker.svg',
        null /* size is determined at runtime */,
        null /* origin is 0,0 */,
        null /* anchor is bottom center of the scaled image */,
        new window.google.maps.Size(32, 32)
      );

      const selectedMarker = new window.google.maps.MarkerImage(
        '/icons/selectedLocationMarker.svg',
        null /* size is determined at runtime */,
        null /* origin is 0,0 */,
        null /* anchor is bottom center of the scaled image */,
        new window.google.maps.Size(40, 40)
      );

      const userMarker = new window.google.maps.MarkerImage(
        '/icons/userLocationMarker.svg',
        null /* size is determined at runtime */,
        null /* origin is 0,0 */,
        null /* anchor is bottom center of the scaled image */,
        new window.google.maps.Size(40, 40)
      );

      return [iconMarker, selectedMarker, userMarker];
    }

    return [];
  }, [isLoaded]);

  const handleLoad = useCallback(
    (map, bounds) => {
      setIsLoaded(true);
      onLoad(map, bounds);
    },
    [onLoad]
  );

  return (
    <Map onLoad={handleLoad} center={center} {...props}>
      {markers?.map((marker = {}, index) => {
        const { id, lat, lng, selected, icon = '' } = marker;
        const numLat = +lat;
        const numLng = +lng;

        if (isNaN(numLat) || isNaN(numLng)) {
          return '';
        }

        const position = { lat: numLat, lng: numLng };

        const isSelected =
          selected || (numCenterLat === numLat && numCenterLng === numLng);

        const iconComponent =
          icon === 'user' ? userMarker : isSelected ? selectedMarker : iconMarker;

        const handleMarkerClick = e => {
          onMarkerClick({ ...marker, ...position, position, index }, e);
        };

        return (
          <Marker
            icon={iconComponent}
            position={position}
            key={id || index}
            onClick={handleMarkerClick}
          />
        );
      })}
    </Map>
  );
};
