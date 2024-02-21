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

function createData(name, h2, h3, h4, j1, j2, j3, j4, j5, j6, j7) {
  return { name, h2, h3, h4, j1, j2, j3, j4, j5, j6, j7 };
}

const rows = [
  createData('VÉLO ÉLECTRIQUE', '20€', '25€', '32€', '45€', '75€', '100€', '123€', '145€', '170€', '195€'),
  createData('VTT ADULTE', '10€', '12€', '13€', '23€', '30€', '35€', '41€', '47€', '53€', '56€'),
  createData('VTT ENFANT', '8€', '10€', '12€', '21€', '28€', '33€', '39€', '44€', '49€', '52€'),
];

export default function TableVeloBatz() {
  return (
    <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>
      <Table sx={{ minWidth: 300, maxWidth: 1200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TYPES DE VÉLOS</StyledTableCell>
            <StyledTableCell align="center">1H</StyledTableCell>
            <StyledTableCell align="center">2H</StyledTableCell>
            <StyledTableCell align="center">3H</StyledTableCell>
            <StyledTableCell align="center">1J</StyledTableCell>
            <StyledTableCell align="center">2J</StyledTableCell>
            <StyledTableCell align="center">3J</StyledTableCell>
            <StyledTableCell align="center">4J</StyledTableCell>
            <StyledTableCell align="center">5J</StyledTableCell>
            <StyledTableCell align="center">6J</StyledTableCell>
            <StyledTableCell align="center">7J</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.h2}</StyledTableCell>
              <StyledTableCell align="center">{row.h3}</StyledTableCell>
              <StyledTableCell align="center">{row.h4}</StyledTableCell>
              <StyledTableCell align="center">{row.j1}</StyledTableCell>
              <StyledTableCell align="center">{row.j2}</StyledTableCell>
              <StyledTableCell align="center">{row.j3}</StyledTableCell>
              <StyledTableCell align="center">{row.j4}</StyledTableCell>
              <StyledTableCell align="center">{row.j5}</StyledTableCell>
              <StyledTableCell align="center">{row.j6}</StyledTableCell>
              <StyledTableCell align="center">{row.j7}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}