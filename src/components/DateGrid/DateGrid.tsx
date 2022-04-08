import React, { FC } from 'react';
import moment, { Moment } from 'moment';
import clsx from 'clsx';
import { DateGridWrapper, Weekday, WeekdayList, GridWrapper } from './DateGrid.styled';
import { useDateGrid } from '../../hooks';

interface IDateGridProps {
  currentDate: Moment;
}

const DateGrid: FC<IDateGridProps> = ({ currentDate }) => {
  const { dateGrid, currentWeekday } = useDateGrid(currentDate);

  return (
    <DateGridWrapper>
      <WeekdayList>
        {moment.weekdaysShort().map((weekday, idx) => (
          <Weekday key={weekday} className={clsx({ current: idx === currentWeekday })}>
            {weekday}
          </Weekday>
        ))}
      </WeekdayList>
      <GridWrapper>
        {dateGrid.map((_, idx) => (
          <div key={idx} />
        ))}
      </GridWrapper>
    </DateGridWrapper>
  );
};

export { DateGrid };
