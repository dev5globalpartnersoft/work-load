import React, { useState, useEffect } from 'react';

// Styles
import { Wrap, Cell, NumText, DragWrap, Drag, Button } from './style';

// Utils
import useThrottle from 'ahooks/lib/useThrottle';
import { formatTime } from '../../utils/formatTime';

export const DraggablePeriods = ({ value = [], onChange = () => {}, ...props }) => {
  const [dragState, setDragState] = useState();
  const [dragShiftState, setDragShiftState] = useState();

  const throttledDragShiftState = useThrottle(dragShiftState, {
    wait: 200,
    leading: false,
    trailing: false,
  });

  useEffect(() => {
    if (dragState) {
      const { index } = dragState;
      let prevPageX = 0;

      function handleMouseMove(e) {
        const { pageX = 0 } = e;
        setDragShiftState({ prevPageX, pageX, index });
        prevPageX = pageX;
      }

      function handleMouseUp() {
        setDragState(undefined);
        document.removeEventListener('mousemove', handleMouseMove);
      }

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragState]);

  useEffect(() => {
    if (throttledDragShiftState) {
      const { length } = value;
      const { prevPageX = 0, pageX = 0, index } = throttledDragShiftState;
      const v = value[index] || {};
      const { start = 0, end = 0 } = v;

      console.log('prev page x', prevPageX, pageX);

      if (length - 1 === index) {
        if (pageX > prevPageX) {
          onChange({ ...v, start: start + 1 }, index);
        }
        onChange({ ...v, start: start - 1 }, index);
      } else {
        if (pageX > prevPageX) {
          onChange({ ...v, end: end + 1 }, index);
        } else {
          onChange({ ...v, end: end - 1 }, index);
        }
      }
    }
  }, [throttledDragShiftState]);

  return (
    <Wrap>
      {value.map((v = {}, index) => {
        const { start, end, employees } = v;
        const isLast = index === value.length - 1;

        const diff = Math.abs(start - end);
        const width = diff * 4.16;

        const handleMouseDown = e => {
          e.stopPropagation();
          if (dragState) {
            return;
          }

          setDragState({ index });
        };

        const handleEmployeesPlusClick = e => {
          e.stopPropagation();
          const currentEmployees = v?.employees || 1;
          if (currentEmployees > 4) {
            return;
          }

          onChange({ ...v, employees: currentEmployees + 1 }, index);
        };

        const handleEmployeesMinusClick = e => {
          e.stopPropagation();
          const currentEmployees = v?.employees || 1;
          if (currentEmployees < 1) {
            return;
          }

          onChange({ ...v, employees: currentEmployees - 1 }, index);
        };

        return (
          <Cell $width={width} $time={formatTime(start)} key={index}>
            <Button disabled={employees <= 1} onClick={handleEmployeesMinusClick}>
              -
            </Button>
            <NumText>{employees}</NumText>
            <Button disabled={employees >= 4} onClick={handleEmployeesPlusClick}>
              +
            </Button>

            {!isLast && (
              <DragWrap onMouseDown={handleMouseDown}>
                <Drag />
              </DragWrap>
            )}
          </Cell>
        );
      })}
    </Wrap>
  );
};
