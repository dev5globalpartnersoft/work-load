import React, { forwardRef } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// Styles
import { Container } from './style.js';

// Hooks
import { useMapsPlacesScript } from '../hooks/useMapsPlacesScript';

export const GooglePlaceAutocomplete = forwardRef(
  ({ onChange = () => {}, selectProps = {}, ...props }, ref) => {
    const { isLoaded } = useMapsPlacesScript();

    return (
      <Container {...props}>
        {isLoaded ? (
          <GooglePlacesAutocomplete
            ref={ref}
            selectProps={{ onChange, ...selectProps }}
            autocompletionRequest={{
              componentRestrictions: {
                country: ['au'],
              },
            }}
            {...props}
          />
        ) : (
          ''
        )}
      </Container>
    );
  }
);
