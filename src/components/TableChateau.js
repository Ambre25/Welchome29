// TABLEAU PRIX KAYAKS

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableContainer } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1rem',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function createData(type, price) {
  return { type, price };
}

const rows = [
  createData('Adulte (+13ans)', '25€'),
  createData('Enfant (4-12ans)', '13€'),
  createData('Bébé (0-3ans)', 'GRATUIT'),
];

export default function TableChateau() {
  return (
    <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>
      <Table sx={{ minWidth: 300, maxWidth: 350 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TYPE</StyledTableCell>
            <StyledTableCell align="center">Prix</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.type}>
              <StyledTableCell component="th" scope="row">
                {row.type}
              </StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}