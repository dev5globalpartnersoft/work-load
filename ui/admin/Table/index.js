import dynamic from 'next/dynamic';
import { useState, useCallback, useMemo } from 'react';

// Hooks
import { useCRUD } from 'utils/admin/useCRUD';

// Styles
import { StyledTable, Wrap } from 'ui/admin/Table/style';

// Dynamic components
const DefTableHeader = dynamic(() =>
  import('ui/admin/TableHeader').then(m => m.TableHeader)
);
const DefCreateEditWrap = dynamic(() =>
  import('ui/admin/CreateEditWrap').then(m => m.CreateEditWrap)
);
const DefDeleteWrap = dynamic(() =>
  import('ui/admin/ModalDeleteWrap').then(m => m.ModalDeleteWrap)
);
const DefDeletePage = dynamic(() =>
  import('ui/admin/DeletePage').then(m => m.DeletePage)
);

const DefComponent = () => '';
const defObj = {};

export const Table = props => {
  const {
    TableHeader = DefTableHeader,
    CreatePage = DefComponent,
    EditPage = DefComponent,
    DeletePage = DefDeletePage,
    CreateWrap = DefCreateEditWrap,
    EditWrap = DefCreateEditWrap,
    DeleteWrap = DefDeleteWrap,
    createWrapProps = defObj,
    editWrapProps = defObj,
    deleteWrapProps = defObj,
    createProps = defObj,
    editProps = defObj,
    deleteProps = defObj,
    entity = '',
    rowKey = 'id',
    bordered = true,
    multiple = true,
    isModalCreate = false,
    isModalEdit = false,
    isModalDelete = true,
  } = props;

  const crud = useCRUD(props);
  const { recordsQuery, crudNotificationContext } = crud;
  const { dataArray, dataCount, setRequestParams, requestParams, isFetching } =
    recordsQuery;
  const { page, limit } = requestParams;

  const [mode, setMode] = useState('table');
  const isCreateMode = mode === 'create';
  const isEditMode = mode === 'edit';
  const isDeleteMode = mode === 'delete';
  const isModalMode =
    (isModalCreate && isCreateMode) ||
    (isModalEdit && isEditMode) ||
    (isModalDelete && isDeleteMode);

  const [selectedRows, setSelectedRows] = useState([]);
  const firstSelectedRow = selectedRows?.[0];
  const selectedRowKeys = useMemo(() => selectedRows.map(row => row?.id), [selectedRows]);
  const hasSelected = !!selectedRows?.length;
  const isMultiSelected = selectedRows?.length > 1;

  const handleTableChange = useCallback(
    ({ current, pageSize }, filters, sorter) => {
      const paramsReplace = {};
      if (page !== current) paramsReplace.page = current;
      if (limit !== pageSize) paramsReplace.limit = pageSize;

      if (sorter.order) {
        paramsReplace.sortBy = sorter.field;
        paramsReplace.sortOrder = sorter.order.replace('end', '').toUpperCase();
      } else {
        paramsReplace.sortBy = false;
        paramsReplace.sortOrder = false;
      }

      setRequestParams(paramsReplace);
    },
    [page, limit]
  );

  const rowSelection = useMemo(
    () => ({
      type: multiple ? 'checkbox' : 'radio',
      onChange(selectedRowKeys, selectedRows) {
        console.log('selected rows', selectedRows);
        setSelectedRows(selectedRows);
      },
      selectedRowKeys,
    }),
    [selectedRowKeys, multiple]
  );

  const pagination = useMemo(
    () => ({ current: page, pageSize: limit, total: dataCount }),
    [page, limit, dataCount]
  );

  const scroll = useMemo(() => ({ x: 1024 }), []);

  const table = useMemo(
    () => ({
      entity,
      mode,
      isCreateMode,
      isEditMode,
      isDeleteMode,
      isModalMode,
      setMode,
      hasSelected,
      isMultiSelected,
      selectedRows,
      firstSelectedRow,
      selectedRowKeys,
      setSelectedRows,
    }),
    [mode, selectedRows, entity]
  );

  return (
    <Wrap>
      {crudNotificationContext}

      {(mode === 'table' || isModalMode) && (
        <>
          <TableHeader table={table} crud={crud} />
          <StyledTable
            loading={isFetching}
            rowSelection={rowSelection}
            dataSource={dataArray}
            pagination={pagination}
            rowKey={rowKey}
            bordered={bordered}
            onChange={handleTableChange}
            scroll={scroll}
            {...props}
          />
        </>
      )}

      {(isCreateMode || isModalCreate) && (
        <CreateWrap
          PageComponent={CreatePage}
          action="create"
          crud={crud}
          table={table}
          pageProps={createProps}
          {...(isModalCreate ? { visible: isCreateMode } : {})}
          {...createWrapProps}
        />
      )}

      {(isEditMode || isModalEdit) && (
        <EditWrap
          PageComponent={EditPage}
          action="edit"
          crud={crud}
          table={table}
          pageProps={editProps}
          {...(isModalEdit ? { visible: isEditMode } : {})}
          {...editWrapProps}
        />
      )}

      {(isDeleteMode || isModalDelete) && (
        <DeleteWrap
          PageComponent={DeletePage}
          action="delete"
          crud={crud}
          table={table}
          pageProps={deleteProps}
          {...(isModalDelete ? { visible: isDeleteMode } : {})}
          {...deleteWrapProps}
        />
      )}
    </Wrap>
  );
};
