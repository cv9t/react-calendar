import React, { FC, useState } from 'react';
import { StyledEngineProvider } from '@mui/material';
import moment, { Moment } from 'moment';
import { CalendarWrapper } from './Calendar.styled';
import { AppBar } from '../AppBar/AppBar';
import { DateGrid } from '../DateGrid/DateGrid';

interface CalendarProps {
  startDate: Moment;
}

const Calendar: FC<CalendarProps> = ({ startDate }) => {
  const [currentDate, setCurrentDate] = useState(startDate);

  const nextMonthHandler = () => {
    setCurrentDate((d) => d.clone().add(1, 'day'));
  };

  const prevMonthHandler = () => {
    setCurrentDate((d) => d.clone().subtract(1, 'day'));
  };

  const todayMonthHandler = () => {
    setCurrentDate(moment());
  };

  return (
    <StyledEngineProvider injectFirst>
      <CalendarWrapper>
        <AppBar
          currentDate={currentDate}
          nextMonthHandler={nextMonthHandler}
          prevMonthHandler={prevMonthHandler}
          todayMonthHandler={todayMonthHandler}
        />
        <DateGrid currentDate={currentDate} />
      </CalendarWrapper>
    </StyledEngineProvider>
  );
};

export { Calendar };
