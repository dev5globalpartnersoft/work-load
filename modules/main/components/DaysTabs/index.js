import { Wrap, TabWrap } from './style';

const defOptions = [
  {
    label: 'Sat',
    value: 0,
  },
  {
    label: 'Mon',
    value: 1,
  },
  {
    label: 'Tue',
    value: 2,
  },
  {
    label: 'Wed',
    value: 3,
  },
  {
    label: 'Thu',
    value: 4,
  },
  {
    label: 'Fri',
    value: 5,
  },
  {
    label: 'Sat',
    value: 6,
  },
];

export const DaysTabs = ({
  options = defOptions,
  disabledOptions = [],
  value = [],
  onChange = () => {},
  onSelect = () => {},
  onDeselect = () => {},
  ...props
}) => {
  return (
    <Wrap {...props}>
      {options.map((opt = {}, index) => {
        const { label = '', value: optValue } = opt;

        const isDisabled = disabledOptions.includes(optValue);
        const isActive = value.includes(optValue);

        const handleClick = () => {
          if (isDisabled) {
            return;
          }

          if (isActive) {
            onDeselect(optValue, index);
            onChange(optValue, index);
          } else {
            onSelect(optValue, index);
            onChange(optValue, index);
          }
        };

        return (
          <TabWrap
            onClick={handleClick}
            $disabled={isDisabled}
            $active={isActive}
            key={index}
          >
            {label}
          </TabWrap>
        );
      })}
    </Wrap>
  );
};
