import styled, { css } from 'styled-components';
import { MapMarkersSelect } from 'ui/MapMarkersSelect';
import { Popover as UIPopover } from 'ui/Popover';

export const Map = styled(MapMarkersSelect)`
  width: 100%;
  height: 270px;
`;

export const Popover = styled(UIPopover)``;

export const Title = styled.span`
  ${({ theme }) => css`
    color: #333;
    font-size: 14px;
    font-family: ${theme.fontFamilies?.medium};
  `}
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 45px;
  padding: 5px 0;
`;

export const ContentContainer = styled.div`
  min-width: 450px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 450px) {
    min-width: 280px;
  }
`;
