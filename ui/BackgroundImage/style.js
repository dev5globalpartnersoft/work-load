import styled from 'styled-components';
import Image from 'next/image';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

export const StyledImage = styled(Image)`
  z-index: -1;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  object-fit: cover;
  object-position: center;
`;
