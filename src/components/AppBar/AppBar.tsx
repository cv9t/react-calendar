import React, { FC } from 'react';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Tooltip, IconButton, Button, Typography, Toolbar } from '@mui/material';
import moment, { Moment } from 'moment';

import { StyledAppBar } from './AppBar.styled';

interface IAppBarProps {
  currentDate: Moment;
  nextMonthHandler: () => void;
  prevMonthHandler: () => void;
  todayMonthHandler: () => void;
}

const AppBar: FC<IAppBarProps> = ({
  currentDate,
  nextMonthHandler,
  prevMonthHandler,
  todayMonthHandler,
}) => (
  <StyledAppBar position="sticky" color="transparent">
    <Toolbar>
      <Tooltip title="Previous month">
        <IconButton onClick={prevMonthHandler} sx={{ mr: 0.5 }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Next month">
        <IconButton onClick={nextMonthHandler} sx={{ mr: 2.5 }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title={moment().format('ll')}>
        <Button variant="contained" onClick={todayMonthHandler} sx={{ mr: 3.5, fontWeight: 600 }}>
          Today
        </Button>
      </Tooltip>
      <Typography fontSize="20px">{currentDate.format('MMMM YYYY')}</Typography>
    </Toolbar>
  </StyledAppBar>
);

export { AppBar };
