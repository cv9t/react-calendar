import React, { FC } from 'react';

import { Moment } from 'moment';

import { DateRowType } from '../../types';
import { DateCell } from '../DateCell';
import { DateRowContainer, DateCellWrapper } from './DateRow.styled';

interface DateRowProps {
  currentDate: Moment;
  row: DateRowType;
}

const DateRow: FC<DateRowProps> = ({ currentDate, row }) => (
  <DateRowContainer>
    <DateCellWrapper>
      {row.cells.map((cell, idx) => (
        <DateCell key={idx} currentDate={currentDate} cell={cell} />
      ))}
    </DateCellWrapper>
  </DateRowContainer>
);

export { DateRow };
