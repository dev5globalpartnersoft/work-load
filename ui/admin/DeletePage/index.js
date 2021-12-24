// Styles
import { Wrap, P, RedP } from './style';

export const DeletePage = ({ crud = {}, table = {}, crudForm = {}, ...props }) => {
  const { selectedRows = [] } = table;

  return (
    <Wrap {...props}>
      <RedP>Attention! This action cannot be undone!</RedP>
      <P>Are you sure you want to delete records with the specified IDs?</P>
      {selectedRows.map(row => row?.id).join(', ')}
      {props.children}
    </Wrap>
  );
};
