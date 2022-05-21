import { useMemo } from 'react';

import { Moment } from 'moment';

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
  }, [date]);

  const currentWeekday: number = useMemo(() => getCurrentWeekday(dateGrid), [dateGrid]);

  return { dateGrid, currentWeekday };
};

export { useDateGrid };
