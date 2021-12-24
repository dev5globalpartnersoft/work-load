import { useEffect } from 'react';

// Config
import { GOOGLE_MAP_API_KEY } from 'config';

// Hooks
import { useRouter } from 'core/useRouter';
import { store } from 'core';

const globalState = { isLoading: false, isReady: false };

export const useGoogleMapScript = ({
  onReady,
  enabled = true,
  libraries = `places`,
} = {}) => {
  const router = useRouter();
  const [{ isGoogleMapsScriptReady, isGoogleMapsScriptLoading }, { setMainState }] =
    store.useModel('main');

  useEffect(() => {
    if (router.isReady && enabled) {
      const onScriptReady = onReady || (() => {});

      if (
        !isGoogleMapsScriptReady &&
        !isGoogleMapsScriptLoading &&
        !globalState.isLoading &&
        !globalState.isReady
      ) {
        if (window?.google?.maps) {
          globalState.isLoading = false;
          globalState.isReady = true;
          setMainState({
            isGoogleMapsScriptLoading: false,
            isGoogleMapsScriptReady: true,
          });
        } else {
          globalState.isLoading = true;
          setMainState({ isGoogleMapsScriptLoading: true });

          const googleMapScript = document.createElement('script');
          googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=${libraries}`;

          googleMapScript.addEventListener('load', () => {
            globalState.isLoading = false;
            globalState.isReady = true;
            setMainState({
              isGoogleMapsScriptLoading: false,
              isGoogleMapsScriptReady: true,
            });
            return onScriptReady();
          });

          window.document.body.appendChild(googleMapScript);
        }
      }
    }
  }, [onReady, router.isReady, enabled, libraries]);

  return {
    isGoogleMapsScriptReady,
    isReady: isGoogleMapsScriptReady,

    isGoogleMapsScriptLoading,
    isLoading: isGoogleMapsScriptLoading,
  };
};
