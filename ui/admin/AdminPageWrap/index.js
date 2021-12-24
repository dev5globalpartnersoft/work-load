// Styles
import { Wrap, MaxWidth } from 'ui/admin/AdminPageWrap/style';

export const AdminPageWrap = ({ className, ...props }) => {
  return (
    <Wrap className={className}>
      <MaxWidth {...props}>{props.children}</MaxWidth>
    </Wrap>
  );
};
