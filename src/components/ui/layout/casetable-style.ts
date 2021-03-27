import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Theme from '../../styles/theme';

export const StyledTablePaper = styled(Paper)`
  margin-top: 24px;
  min-width: 100%;
  background-color: ${Theme.layout.dark1Gray};
  color: ${Theme.layout.light0Gray};
`;

export const StyledTable = styled.div`
  height: 255px;
  overflow-y: scroll;
`;

export const StyledTableHead = styled(TableHead)`
  th {
    background-color: ${Theme.layout.dark1Gray};
    color: ${Theme.layout.light0Gray};
  }
`;

export const StyledTableCell = styled(TableCell)`
  color: ${Theme.layout.light0Gray};
  font: 15px ${Theme.fonts.base};
  &.alert {
    color: ${Theme.layout.alertRed};
  }
`;