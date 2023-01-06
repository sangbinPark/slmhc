import styled from 'styled-components';

export const NavStyled = styled.nav`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  } 
`;

export const NavMenuStyled = styled.ul`
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const NavMenuItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 16px;
  color: #555;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  transition: color .3s;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.palette.primary.main};
    transition: width .3s;
  }
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    &::after {
      width: 100%;
    }
  }
`;