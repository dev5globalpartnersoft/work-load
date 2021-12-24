import styled, { css } from 'styled-components';
import { MapPopover as UIMapPopover } from 'ui/MapPopover';
import { Icon } from 'ui/Icon';
import { GooglePlaceAutocomplete } from 'ui/google/maps/ReactSelectAutocomplete';
import { outlined } from '../styles/outlined';

// Components
import { Title as ParentTitle } from '../Title';

export const Title = styled(ParentTitle)``;

export const MapSearch = styled(GooglePlaceAutocomplete)`
  width: 100%;
`;

export const LocationIcon = styled(Icon).attrs(() => ({
  name: 'locationMarker',
  ext: 'svg',
}))`
  position: relative;
  width: 20px;
  height: 24px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: inherit;
`;

export const MapPopover = styled(UIMapPopover)`
  ${outlined};
  padding: 16px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 52.39px;
  border: 1px solid #dedede;
  font-size: 16px;
  ${({ visible }) => css`
    ${visible &&
    css`
      ${LocationIcon} {
        &::after {
          width: 100%;
          position: absolute;
          bottom: -5px;
          content: '';
          border-bottom: 2px solid #ddd;
      }
    `};
  `};
`;
