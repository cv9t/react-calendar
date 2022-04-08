import { Moment } from 'moment';

export type DateCellType = {
  date: Moment;
};

export type DateRowType = {
  cells: DateCellType[];
};
