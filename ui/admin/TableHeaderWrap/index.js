import { memo } from 'react';

import { Wrap, RowWrap, TitleRow, Title } from 'ui/admin/TableHeaderWrap/style';

// Hooks
import { useRouterPathTitle } from 'utils/admin/useRouterPathTitle';

export const TableHeaderWrap = memo(({ title = '', ...props }) => {
  const pathTitle = useRouterPathTitle();

  return (
    <Wrap {...props}>
      <TitleRow>
        <Title>{title || pathTitle}</Title>
      </TitleRow>
      <RowWrap> {props.children}</RowWrap>
    </Wrap>
  );
});
