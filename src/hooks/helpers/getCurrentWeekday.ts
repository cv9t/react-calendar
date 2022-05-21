import moment from 'moment';

import { DateRowType } from '../../types';

const getCurrentWeekday = (dateGrid: DateRowType[]): number => {
  let currentWeekday = -1;

  for (let i = 0; i < dateGrid.length; i += 1) {
    const row = dateGrid[i];
    for (let j = 0; j < row.cells.length; j += 1) {
      const cell = row.cells[j];
      if (cell.date.isSame(moment(), 'date')) {
        currentWeekday = cell.date.weekday();
        break;
      }
    }
  }
  return currentWeekday;
};

export { getCurrentWeekday };
