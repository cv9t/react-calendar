import { Moment } from 'moment';

const calcWeeksInMonth = (date: Moment): number => {
  const monthStart = date.clone().startOf('month').startOf('week').subtract(1, 'day');
  const monthEnd = date.clone().endOf('month').endOf('week');
  return monthEnd.diff(monthStart, 'week');
};

export { calcWeeksInMonth };
