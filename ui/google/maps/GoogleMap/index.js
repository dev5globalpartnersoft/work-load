import React, { useState, useCallback, useEffect } from 'react';
// Read docs here: https://react-google-maps-api-docs.netlify.app/#googlemap

import { GoogleMap as Map } from '@react-google-maps/api';

// Hooks
import { useMapsPlacesScript } from '../hooks/useMapsPlacesScript';

const defCenter = { lat: -24.08279267090857, lng: 134.07037621843403 };
const defZoom = 4;

export const GoogleMap = ({
  className = '',
  hidden = false,
  center = defCenter,
  zoom = defZoom,
  onLoad = () => {},
  ...props
}) => {
  const { lat: centerLat = 0, lng: centerLng = 0 } = center;
  const validatedCenter = { lat: +centerLat, lng: +centerLng };
  const [map, setMap] = useState();
  const { isLoaded } = useMapsPlacesScript();

  const handleLoad = useCallback(
    map => {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      onLoad(map, bounds);
      setMap(map);
    },
    [onLoad]
  );

  useEffect(() => {
    if (map) {
      setTimeout(() => map.panTo(validatedCenter), 0);
    }
  }, [map, center, hidden]);

  useEffect(() => {
    if (map) {
      setTimeout(() => map.setZoom(zoom), 0);
    }
  }, [map, zoom, hidden]);

  return isLoaded && !hidden ? (
    <Map
      onLoad={handleLoad}
      mapContainerClassName={className}
      center={validatedCenter}
      zoom={zoom}
      {...props}
    >
      {props.children}
    </Map>
  ) : (
    <div hidden={hidden} className={className} />
  );
};
