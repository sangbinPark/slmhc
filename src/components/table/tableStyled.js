import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const StyledPaper = styled(Paper)(() => ({
  borderRadius: 0,
  boxShadow: 'none',
  border: '1px solid rgba(224, 224, 224, 1)',
  borderBottom: 0,
  marginTop: 25,
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {},
}));

export const StyledTableRow = styled(TableRow)(() => ({}));