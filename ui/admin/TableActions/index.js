import { memo } from 'react';

import { Wrap, ActionButton } from 'ui/admin/TableActions/style';

export const TableActions = memo(({ crud = {}, table = {}, ...props }) => {
  const { selectedRows = [], setMode = () => {}, hasSelected } = table;
  const selectedRow = selectedRows?.[0];

  const handleActionClick = action => () => setMode(action);

  return (
    <Wrap {...props}>
      <ActionButton onClick={handleActionClick('create')}>
        {hasSelected ? 'Duplicate' : 'Create'}
      </ActionButton>

      <ActionButton onClick={handleActionClick('edit')} disabled={!selectedRow}>
        Edit
      </ActionButton>

      <ActionButton onClick={handleActionClick('delete')} disabled={!selectedRow}>
        Delete
      </ActionButton>
    </Wrap>
  );
});
