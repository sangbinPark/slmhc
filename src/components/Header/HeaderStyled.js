import styled, { css } from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  width: 100%;
  height: 70px;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 1;
    border-bottom: none;
  }
`;

export const LogoWrapperStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  } 
`;

export const TopStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoStyled = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const LanguageWrapperStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  } 
`;

export const BackspaceIconWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    svg {
      color: #555 !important;
      ${({ isHome }) => isHome && css`
        display: none;
      `}
    }
  }
`;

export const HideMenuStyled = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    #language-select-menu-button {
      display: none;
    }
    svg {
      color: #fff !important;
      ${({ isHome }) => !isHome && css`
        color: #555 !important;
      `}
    }
  }
`;
