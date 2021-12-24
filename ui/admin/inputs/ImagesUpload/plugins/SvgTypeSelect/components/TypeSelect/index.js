// Config
import { SVG_TYPES } from 'config/svgTypes';

// Styles
import { Wrap, Title, Select } from './style';

// Utils
import { upFirstChar } from 'utils/upFirstChar';

const options = SVG_TYPES.map((type = '') => ({ label: upFirstChar(type), value: type }));

export const TypeSelect = ({ title = '', label = title, ...props }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Select options={options} {...props} />
    </Wrap>
  );
};
