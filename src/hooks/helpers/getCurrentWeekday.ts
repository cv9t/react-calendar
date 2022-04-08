import moment from 'moment';
import { DateRowType } from '../../types';

const getCurrentWeekday = (dateGrid: DateRowType[]): number => {
  let currentWeekday = 0;
  for (let i = 0; i < dateGrid.length; i += 1) {
    for (let j = 0; j < dateGrid.length; j += 1) {
      const cell = dateGrid[i].cells[j];
      if (cell.date.isSame(moment(), 'date')) {
        currentWeekday = cell.date.weekday();
        break;
      }
    }
  }
  return currentWeekday;
};

export { getCurrentWeekday };
