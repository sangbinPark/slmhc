import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { header, list } from '../../constant/cartridgeList';
import { StyledPaper, StyledTableCell, StyledTableRow } from './tableStyled';

const parseList = list => {
  const result = [];
  let modelCount = 0;
  list.map((item, index) => {
    const newItem = { no: index + 1, ...item };
    if (index === 0) {
      result[modelCount] = [];
      result[modelCount].push(newItem);
      return item;
    }
    const length = result[modelCount].length;
    const prevItem = result[modelCount][length - 1];
    if (prevItem.model === item.model) {
      result[modelCount].push(newItem);
    } else {
      modelCount += 1;
      result[modelCount] = [];
      result[modelCount].push(newItem);
    }
    return item;
  });
  return result;
}

export default function CartridgeTable() {
  const modelList = parseList(list);
  return (
    <TableContainer component={StyledPaper}>
      <Table aria-label="Carriet developer product list"  size="small">
        <TableHead>
          <TableRow>
            {header.map(item =>
              <StyledTableCell align="center" key={item.id}>{item.label}</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {modelList.map((model, modelIndex) => 
            <React.Fragment key={modelIndex}>
              {model.map((product, productIndex) =>
                <StyledTableRow key={`table-row-${productIndex}`}>
                  <StyledTableCell align="center">
                    {product.no}
                  </StyledTableCell>
                  {productIndex === 0 && (
                    <StyledTableCell align="center"
                      rowSpan={model.length}
                    >
                      {product.model}
                    </StyledTableCell>
                  )}
                  <StyledTableCell align="center">{product.description}</StyledTableCell>
                  <StyledTableCell align="center">{product.color}</StyledTableCell>
                  <StyledTableCell align="center">{product.unit}</StyledTableCell>
                </StyledTableRow>
              )}
            </React.Fragment>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
