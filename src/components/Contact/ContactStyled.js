import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: table;
`;

export const Row = styled.div`
  display: table-row;
  height: 45px;
`;

export const Cell = styled.div`
  display: table-cell;
  font-size: 16px;
  vertical-align: middle;
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const LinkMail = styled.span`
  color: blue;
  text-decoration: underline;
  text-decoration-color: blue;
  cursor: pointer;
`;

export const LinkCall = styled.a`
  color: blue;
  text-decoration: underline;
  text-decoration-color: blue;
  cursor: pointer;
`;

export const CellWrapper = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  ${({ isTitle }) => isTitle && css`
    color: #364A9C;
    min-width: 100px;
  `}
`;
