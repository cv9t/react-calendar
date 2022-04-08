import styled from '@emotion/styled';
import { AppBar } from '@mui/material';
import { grey } from '@mui/material/colors';

export const StyledAppBar = styled(AppBar)`
  && {
    min-height: 10px;
    box-shadow: none;
    border-bottom: 1px solid ${grey[300]};
  }
`;
