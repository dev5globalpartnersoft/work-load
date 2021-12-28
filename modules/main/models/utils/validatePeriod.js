export const validatePeriod = (period = {}, periodIndex, length) => {
  const periodReplace = { ...period };
  const isFirst = periodIndex === 0;
  const isLast = periodIndex === length - 1;
  const { start = 0, end = 0, employees = 1 } = period;
  const periodTime = Math.abs(end - start);

  let startLimit = 0;
  let endLimit = 24;
  switch (periodIndex) {
    case 0:
      startLimit = 0;
      endLimit = 12;
      break;
    case 1:
      startLimit = 4;
      endLimit = 16;
      break;
    case 2:
      startLimit = 8;
      endLimit = 20;
      break;
    case 3:
      startLimit = 12;
      endLimit = 24;
  }

  if (start < startLimit) {
    periodReplace.start = startLimit;
  }

  if (end > endLimit) {
    periodReplace.end = endLimit;
  }

  if (periodTime)
    if (periodTime > 12) {
      if (isFirst) {
        periodReplace.start = 0;
        periodReplace.end = 12;
      } else {
        if (isLast) {
          periodReplace.start = 12;
          periodReplace.end = 24;
        } else {
          periodReplace.end = start + 12;
        }
      }
    } else {
      if (periodTime < 4) {
        if (isFirst) {
          periodReplace.start = 0;
          periodReplace.end = 4;
        } else {
          if (isLast) {
            periodReplace.start = 20;
            periodReplace.end = 24;
          } else {
            periodReplace.end = start + 4;
          }
        }
      }
    }

  if (employees > 4) {
    periodReplace.employees = 4;
  } else {
    if (employees < 1) {
      periodReplace.employees = 1;
    }
  }

  return periodReplace;
};
