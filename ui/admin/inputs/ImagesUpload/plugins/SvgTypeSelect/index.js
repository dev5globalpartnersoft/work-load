// Components
import { TypeSelect } from './components/TypeSelect';

// Utils
import { getSvgFileType } from 'utils/getSvgFileType';
import { callActionFn } from 'utils/admin/callActionFn';

// Hooks
import { useCallback } from 'react';

export const SvgTypeSelect = ({
  fieldValue = [],
  onChange = () => {},
  actionOrder = 'after',
  uploadCallback = () => {},
  stateValue,
}) => {
  const typeChangeCallback = useCallback((value, submitResponse = {}, params = {}) => {},
  []);

  return stateValue.map((v = {}, i) => {
    const { originFileObj = {} } = v;
    const { name = '', uploaded, id } = originFileObj;
    const { svgType = '', index } = getSvgFileType(name);

    const { params: { type: paramsType } = {} } = callActionFn(fieldValue[index]);

    const title = `${i + 1}.`;
    const key = `${name}_${index}`;

    const handleSelectChange = (type = '') => {
      if (uploaded) {
        let existedAction;
        fieldValue.forEach(a => {
          const calledAction = callActionFn(a);
          if (calledAction?.id === id) {
            existedAction = calledAction;
          }
        });

        const typeChangeActionGetter = () => ({
          actionOrder,
          actionFn: () => {},
          params: { type },
          type: 'typeChange',
        });

        if (existedAction) {
          const { index } = existedAction;
        } else {
        }
      } else {
        const uploadActionGetter = () => ({
          actionOrder,
          actionFn: uploadCallback,
          value: originFileObj,
          params: { type },
          type: 'upload',
        });

        const fieldValueReplace = [...fieldValue];
        fieldValueReplace.splice(index, 1, uploadActionGetter);
        onChange(fieldValueReplace);
      }
    };

    console.log('origin file obj', originFileObj);

    return (
      <TypeSelect
        title={title}
        onChange={handleSelectChange}
        defaultValue={svgType}
        value={paramsType}
        key={key}
      />
    );
  });
};
