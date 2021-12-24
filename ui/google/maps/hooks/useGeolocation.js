import { useEffect, useCallback, useMemo } from 'react';

// Hooks
import { useRouter } from 'next/router';
import { useMapsPlacesScript } from './useMapsPlacesScript';

// Utils
import { geocodeByLatLng } from 'react-google-places-autocomplete';
import { useShallowUpdate } from 'utils/hooks/useShallowUpdate';

export const useGeolocation = () => {
  const { isLoaded } = useMapsPlacesScript();
  const router = useRouter();
  const { deleteFromRouterQuery } = useShallowUpdate();
  const { isReady, query } = router;

  const { locationLabel: routerLabel = '' } = query;
  const routerLat = +query.lat || undefined;
  const routerLng = +query.lng || undefined;

  const setGeolocation = useCallback(
    (query = {}) =>
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, ...query },
        },
        undefined,
        { scroll: false, shallow: true }
      ),
    [router]
  );

  const deleteGeolocation = useCallback(() => {
    deleteFromRouterQuery(['lat', 'lng', 'locationLabel']);
  }, [deleteFromRouterQuery]);

  const geolocation = useMemo(
    () => ({ lat: routerLat, lng: routerLng, locationLabel: routerLabel }),
    [routerLat, routerLng, routerLabel]
  );

  useEffect(() => {
    if (isReady && isLoaded) {
      if (routerLat && routerLng) {
        return;
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position = {}) => {
          let navigatorLat = position.coords.latitude;
          let navigatorLng = position.coords.longitude;
          let navigatorLabel = '';

          try {
            const response = await geocodeByLatLng({
              lat: navigatorLat,
              lng: navigatorLng,
            });

            const firstAddress = response?.[0] || {};
            const { address_components = [], formatted_address = '' } = firstAddress;
            const isAustralia = address_components.find(
              ({ short_name = '' }) => short_name === 'AU'
            );

            if (isAustralia) {
              navigatorLabel = formatted_address;
            } else {
              return;
            }
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
    }
  }, [isReady, isLoaded]);

  return { ...geolocation, geolocation, setGeolocation, deleteGeolocation };
};
