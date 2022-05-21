import React, { FC } from 'react';

import { Typography } from '@mui/material';
import clsx from 'clsx';
import moment, { Moment } from 'moment';

import { DateCellType } from '../../types';
import { DateCellContainer, DateWrapper } from './DateCell.styled';

interface DateCellProps {
  currentDate: Moment;
  cell: DateCellType;
}

const DateCell: FC<DateCellProps> = ({ currentDate, cell }) => (
  <DateCellContainer>
    <DateWrapper
      className={clsx({
        'another-month': !cell.date.isSame(currentDate, 'month'),
        today: cell.date.isSame(moment(), 'date'),
      })}
    >
      <Typography component="span" m={0.5} pb={0.25}>
        {cell.date.format('D')}
      </Typography>
    </DateWrapper>
  </DateCellContainer>
);

export { DateCell };
