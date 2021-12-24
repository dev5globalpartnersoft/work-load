import { useState, useEffect } from 'react';

// Hooks
import { useRouter } from 'next/router';
import { useGoogleMapScript } from 'utils/hooks/useGoogleMapScript';

// Utils
import { geocodeByLatLng } from 'react-google-places-autocomplete';

export const useGeolocation = ({ lat = 0, lng = 0, locationLabel = '' } = {}) => {
  const { isGoogleMapsScriptReady } = useGoogleMapScript();
  const router = useRouter();
  const { isReady, query } = router;

  const { locationLabel: routerLabel = '' } = query;
  const routerLat = +query.lat || 0;
  const routerLng = +query.lng || 0;

  const [geolocation, setGeolocation] = useState({ lat, lng, locationLabel });
  const { lat: stateLat, lng: stateLng, locationLabel: stateLabel } = geolocation;

  useEffect(() => {
    if (isReady && isGoogleMapsScriptReady) {
      (async () => {
        // Location from url has priority
        if (routerLat || routerLng) {
          let routerLocationLabel = routerLabel;

          if (!routerLocationLabel) {
            try {
              const result = await geocodeByLatLng({ lat: routerLat, lng: routerLng });
              routerLocationLabel = result?.[0]?.formatted_address || '';
            } catch (e) {
              console.error(e);
            }
          }

          return setGeolocation({
            lat: routerLat,
            lng: routerLng,
            locationLabel: routerLocationLabel,
          });
        }

        // Otherwise, ask for the location of the device
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position = {}) => {
            let navigatorLat = position.coords.latitude;
            let navigatorLng = position.coords.longitude;
            let navigatorLabel = '';

            try {
              const result = await geocodeByLatLng({
                lat: navigatorLat,
                lng: navigatorLng,
              });
              navigatorLabel = result?.[0]?.formatted_address || '';
            } catch (e) {
              console.error(e);
            }

            setGeolocation({
              lat: navigatorLat,
              lng: navigatorLng,
              locationLabel: navigatorLabel,
            });
          });
        }
      })();
    }
  }, [isReady, isGoogleMapsScriptReady]);

  useEffect(() => {
    (async () => {
      if (stateLat || stateLng) {
        let locationLabel = stateLabel;

        if (!locationLabel) {
          try {
            const result = await geocodeByLatLng({ lat, lng });
            locationLabel = result?.[0]?.formatted_address || '';
          } catch (e) {
            console.error(e);
          }
        }

        router.replace(
          {
            pathname: router.pathname,
            query: { ...router.query, ...geolocation, locationLabel },
          },
          undefined,
          { scroll: false, shallow: true }
        );
      }
    })();
  }, [stateLat, stateLng, stateLabel]);

  return { ...geolocation, setGeolocation };
};
