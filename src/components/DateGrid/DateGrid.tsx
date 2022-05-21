import React, { FC } from 'react';

import clsx from 'clsx';
import moment, { Moment } from 'moment';

import { DateRowType } from '../../types';
import { DateRow } from '../DateRow';
import { DateGridContainer, Weekday, WeekdayList, GridWrapper } from './DateGrid.styled';

interface IDateGridProps {
  currentDate: Moment;
  dateGrid: DateRowType[];
  currentWeekday: number;
}

const DateGrid: FC<IDateGridProps> = ({ currentDate, dateGrid, currentWeekday }) => (
  <DateGridContainer>
    <WeekdayList>
      {moment.weekdaysShort().map((weekday, idx) => (
        <Weekday key={weekday} className={clsx({ current: idx === currentWeekday })}>
          {weekday}
        </Weekday>
      ))}
    </WeekdayList>
    <GridWrapper>
      {dateGrid.map((row, idx) => (
        <DateRow key={idx} currentDate={currentDate} row={row} />
      ))}
    </GridWrapper>
  </DateGridContainer>
);

export { DateGrid };
