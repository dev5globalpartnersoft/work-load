import { memo } from 'react';

// Styles
import { Wrap } from 'ui/admin/TableHeader/style';

// Components
import { TableActions } from 'ui/admin/TableActions';
import { TableSearch } from 'ui/admin/TableSearch';

export const TableHeader = memo(({ crud = {}, table = {}, ...props }) => {
  return (
    <Wrap {...props}>
      <TableSearch crud={crud} />
      <TableActions crud={crud} table={table} />
    </Wrap>
  );
});
