import { styled } from '@mui/material';
import { grey } from '@mui/material/colors';

export const DateCellContainer = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flex: 1,
  borderBottom: `1px solid ${grey[200]}`,
  borderRight: `1px solid ${grey[200]}`,
}));

export const DateWrapper = styled('div')(() => ({
  flex: 1,

  '& > span': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: 25,

    '&::after': {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 2,
      backgroundColor: 'transparent',
      content: '""',
    },
  },

  '&.another-month > span': {
    color: 'rgba(0, 0, 0, 0.3)',
  },

  '&.today > span': {
    color: '#1871cc',
    fontWeight: 600,

    '&::after': {
      backgroundColor: '#1871cc',
    },
  },
}));
