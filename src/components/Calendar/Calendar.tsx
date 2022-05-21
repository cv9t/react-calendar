/* eslint-disable react/require-default-props */
import React, { FC, useState } from 'react';

import { StyledEngineProvider } from '@mui/material';
import moment from 'moment';

import { useDateGrid } from '../../hooks';
import { AppBar } from '../AppBar';
import { DateGrid } from '../DateGrid';
import { CalendarContainer } from './Calendar.styled';

export interface CalendarProps {
  startDate: Date;
  withoutBorder?: boolean;
}

const Calendar: FC<CalendarProps> = ({ startDate, withoutBorder }) => {
  const [currentDate, setCurrentDate] = useState(moment(startDate));
  const { dateGrid, currentWeekday } = useDateGrid(currentDate);

  const nextMonthHandler = () => {
    setCurrentDate((d) => d.clone().add(1, 'month'));
  };

  const prevMonthHandler = () => {
    setCurrentDate((d) => d.clone().subtract(1, 'month'));
  };

  const todayMonthHandler = () => {
    setCurrentDate(moment());
  };

  return (
    <StyledEngineProvider injectFirst>
      <CalendarContainer withoutBorder={withoutBorder}>
        <AppBar
          currentDate={currentDate}
          nextMonthHandler={nextMonthHandler}
          prevMonthHandler={prevMonthHandler}
          todayMonthHandler={todayMonthHandler}
        />
        <DateGrid currentDate={currentDate} dateGrid={dateGrid} currentWeekday={currentWeekday} />
      </CalendarContainer>
    </StyledEngineProvider>
  );
};

export { Calendar };
