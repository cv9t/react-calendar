import { Moment } from 'moment';

import { DateRowType, DateCellType } from '../../types';

const createDateGrid = (date: Moment, totalWeeks: number): DateRowType[] => {
  const startDate = date.clone().startOf('month').startOf('week').subtract(1, 'day');
  const dateGrid: DateRowType[] = [];

  for (let i = 0; i < totalWeeks; i += 1) {
    const cells: DateCellType[] = [];
    for (let j = 0; j < 7; j += 1) {
      cells.push({
        date: startDate.add(1, 'day').clone(),
      });
    }
    dateGrid.push({ cells });
  }

  return dateGrid;
};

export { createDateGrid };
