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
        const { label = '', value } = opt;

        const isDisabled = disabledOptions.includes(value);
        const isActive = value.includes(value);

        const handleClick = e => {
          if (isDisabled) {
            return;
          }

          if (isActive) {
            onDeselect(value, index);
            onChange(value, index);
          } else {
            onSelect(value, index);
            onChange(value, index);
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
