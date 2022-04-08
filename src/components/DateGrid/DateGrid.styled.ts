import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const DateGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  overflow: hidden;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top: 1px solid ${grey[300]};
  border-left: 1px solid ${grey[300]};
`;

export const WeekdayList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Weekday = styled(Typography)`
  flex: 1;
  padding-bottom: 10px;
  text-align: center;
  text-transform: uppercase;

  &.current {
    font-weight: 500;
  }
`;
