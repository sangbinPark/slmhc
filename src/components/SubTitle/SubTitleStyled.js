import styled, { css } from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NaviWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 14px;
`;

export const SpanStyled = styled.span`
  margin: 0 10px;
  ${({ isFirst }) => isFirst && css`
    margin-left: 0;
  `}
`;

export const MenuItemStyled = styled.span`
  cursor: pointer;
  border-bottom: 1px solid;
  padding: 4px 0;
  &:hover {
    color: #364A9C;
  }
`;
