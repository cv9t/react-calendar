import { Moment } from 'moment';
import { useMemo } from 'react';
import { DateRowType } from '../types';
import { calcWeeksInMonth, createDateGrid, getCurrentWeekday } from './helpers';

type ReturnValue = {
  dateGrid: DateRowType[];
  currentWeekday: number;
};

const useDateGrid = (date: Moment): ReturnValue => {
  const dateGrid: DateRowType[] = useMemo(() => {
    const totalWeeks = calcWeeksInMonth(date);
    return createDateGrid(date, totalWeeks);
  }, [date.month()]);

  const currentWeekday: number = useMemo(() => getCurrentWeekday(dateGrid), [date.date()]);

  return { dateGrid, currentWeekday };
};

export { useDateGrid };
