// Styles
import { Wrap } from './style';
import { RedP, P } from 'ui/admin/DeletePage/style';

export const MultiActionWarn = ({ items = [], ...props }) => {
  return (
    <Wrap>
      <RedP>Attention!</RedP>
      <P>
        You have selected multiple entries in the table! The fields will be changed for
        records with the following IDs:
      </P>
      {items.join(', ')}
    </Wrap>
  );
};
