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

function createData(name, h1, h2, h3, h6) {
  return { name, h1, h2, h3, h6 };
}

const rows = [
  createData('KAYAK 1 PLACE', '22€', '33€', '42€', '60€'),
  createData('KAYAK 2-4 PLACES', '30€', '47€', '59€', '70€'),
];

export default function TableKayak() {
  return (
    <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>
      <Table sx={{ minWidth: 300, maxWidth: 1200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TYPES DE KAYAKS</StyledTableCell>
            <StyledTableCell align="center">1 Heure</StyledTableCell>
            <StyledTableCell align="center">2 Heures</StyledTableCell>
            <StyledTableCell align="center">3 Heures</StyledTableCell>
            <StyledTableCell align="center">6 Heures</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.h1}</StyledTableCell>
              <StyledTableCell align="center">{row.h2}</StyledTableCell>
              <StyledTableCell align="center">{row.h3}</StyledTableCell>
              <StyledTableCell align="center">{row.h6}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}