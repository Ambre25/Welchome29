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

function createData(name, j, j1, j2, j3, j4, j5, j6, j7) {
  return { name, j, j1, j2, j3, j4, j5, j6, j7 };
}

const rows = [
  createData('VÉLO ÉLECTRIQUE', '32€', '44€', '75€', '100€', '122€', '145€', '165€', '185€'),
  createData('VTT ADULTE', '25€', '40€', '62€', '85€', '100€', '110€', '122€', '135€'),
  createData('VTT ENFANT', '14€', '20€', '40€', '45€', '50€', '55€', '60€', '70€'),
];

export default function TableVeloCarantecMorlaix() {
  return (
    <TableContainer sx={{ display: 'flex', justifyContent: 'center' }}>
      <Table sx={{ minWidth: 300, maxWidth: 1200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TYPES DE VÉLOS</StyledTableCell>
            <StyledTableCell align="center">1/2J</StyledTableCell>
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
              <StyledTableCell align="center">{row.j}</StyledTableCell>
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