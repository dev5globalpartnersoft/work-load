import React, { useState, useEffect } from 'react';

// Styles
import { Wrap, Cell, Button } from './style';

// Utils
import useThrottle from 'ahooks/lib/useThrottle';

export const DraggablePeriods = ({ value = [], onChange = () => {}, ...props }) => {
  const [dragState, setDragState] = useState();
  const [dragShiftState, setDragShiftState] = useState();

  const throttledDragShiftState = useThrottle(dragShiftState, {
    wait: 100,
    leading: false,
  });

  useEffect(() => {
    if (dragState) {
      const { cursorX = 0, index } = dragState;

      function handleMouseMove(e) {
        const { pageX = 0 } = e;
        setDragShiftState({ cursorX, pageX, index });
      }

      function handleMouseUp() {
        document.removeEventListener('mousemove', handleMouseMove);
        setDragState(undefined);
      }

      document.addEventListener('mousemove', handleMouseMove);

      document.addEventListener('mouseup', handleMouseUp);
    }
  }, [dragState]);

  useEffect(() => {
    if (dragShiftState) {
      const { length } = value;
      const { cursorX = 0, pageX = 0, index } = throttledDragShiftState;
      const v = value[index] || {};
      const { start = 0, end = 0 } = v;

      if (length - 1 === index) {
        if (pageX > cursorX) {
          return onChange({ ...v, start: start + 1 }, index);
        }
        return onChange({ ...v, start: start - 1 }, index);
      }

      if (pageX > cursorX) {
        onChange({ ...v, end: end + 1 }, index);
      } else {
        onChange({ ...v, end: end - 1 }, index);
      }
    }
  }, [throttledDragShiftState]);

  return (
    <Wrap>
      {value.map((v = {}, index) => {
        const { start, end, employees } = v;
        const ref = React.createRef();

        const diff = Math.abs(start - end);
        const width = diff * 4.16;

        const handleMouseDown = e => {
          if (typeof dragState?.index !== 'undefined') {
            return;
          }

          const cursorX = e.pageX;
          setDragState({ ref: { current: ref.current }, cursorX, index });
        };

        return (
          <Cell
            ref={ref}
            $width={width}
            $time={start}
            key={index}
            onMouseDown={handleMouseDown}
          >
            <Button>-</Button>
            {employees}
            <Button>+</Button>
          </Cell>
        );
      })}
    </Wrap>
  );
};
