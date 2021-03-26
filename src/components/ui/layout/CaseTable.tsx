import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import { StyledTablePaper, StyledTable, StyledTableHead, StyledTableCell } from './casetable-style';

const CaseTable = (props: any) => {
  const { countries } = props;
  return (
    <TableContainer component={StyledTablePaper}>
      <StyledTable>
      <Table stickyHeader aria-label="case table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell><strong>Country</strong></StyledTableCell>
              <StyledTableCell align="right"><strong>Cases</strong></StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {countries.map((country: any) => (
              <TableRow>
                <StyledTableCell>{country.country}</StyledTableCell>
                <StyledTableCell align="right"><strong>{country.cases}</strong></StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
      </StyledTable>
    </TableContainer>
  );
}

export default CaseTable;