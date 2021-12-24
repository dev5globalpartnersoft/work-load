import { memo } from 'react';

import { Wrap, Input } from 'ui/admin/TableSearch/style';

// Hooks
import { useCRUDSearch } from 'utils/admin/useCRUDSearch';

export const TableSearch = memo(({ crud = {}, ...props }) => {
  const { value, onTableSearchChange } = useCRUDSearch(crud);

  return (
    <Wrap {...props}>
      <Input placeholder="Search" value={value} onChange={onTableSearchChange} />
    </Wrap>
  );
});
