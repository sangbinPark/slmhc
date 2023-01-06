import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { header, list } from '../../constant/carrierList';
import { StyledPaper, StyledTableCell, StyledTableRow } from './tableStyled';

export default function CarrierTable() {
  return (
    <TableContainer component={StyledPaper}>
      <Table aria-label="Carriet developer product list" size="small">
        <TableHead>
          <TableRow>
            {header.map(item =>
              <StyledTableCell align={item.id === 'useInList' ? 'left' : 'center'} key={item.id}>
                {item.label}
              </StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(carrier => 
            <React.Fragment key={carrier.brand}>
              {carrier.productList.map((product, productIndex) =>
                <StyledTableRow key={`table-row-${productIndex}`}>
                  {productIndex === 0 && (
                    <StyledTableCell align="center"
                      rowSpan={carrier.productList.length}
                    >
                      {carrier.brand}
                    </StyledTableCell>
                  )}
                  <StyledTableCell align="center">{product.machine}</StyledTableCell>
                  <StyledTableCell align="center">{product.jweCode}</StyledTableCell>
                  <StyledTableCell align="center">
                    <div>{product.model}</div>
                    {product.model2 && (
                      <div>{product.model2}</div>
                    )}
                    {product.remarks && (
                      <div>({product.remarks})</div>
                    )}
                  </StyledTableCell>
                  <StyledTableCell>
                    {product.useInList.map(useIn => 
                      <div key={useIn}>{useIn}</div>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </React.Fragment>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
