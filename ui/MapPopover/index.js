// Styles
import { ContentContainer, TopContainer, Popover, Map } from './style';

export const MapPopover = ({
  name = '',
  locationName = '',
  lat = 0,
  lng = 0,
  className,
  onVisibleChange,
  visible,
  topContent = '',
  ...props
}) => {
  const coords = { lat: +lat, lng: +lng };

  const popoverContent = (
    <ContentContainer>
      <TopContainer>{topContent}</TopContainer>
      <Map {...(lat && lng ? coords : {})} {...props} />
    </ContentContainer>
  );

  return (
    <Popover
      className={className}
      placement="bottom"
      trigger="click"
      content={popoverContent}
      onVisibleChange={onVisibleChange}
      visible={visible}
    >
      {props.children}
    </Popover>
  );
};
