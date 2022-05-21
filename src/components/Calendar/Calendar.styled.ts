import { styled } from '@mui/material';
import { grey } from '@mui/material/colors';

interface CalendarContainerProps {
  withoutBorder?: boolean;
}

export const CalendarContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'withoutBorder',
})<CalendarContainerProps>(({ withoutBorder }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  border: withoutBorder ? 'none' : `1px solid ${grey[200]}`,
}));
