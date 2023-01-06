import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border: 1px solid;
    border-radius: 20px;
    color: #ffffff;
    background-color: #a5a5a5;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    border: 0px solid;
    background-color: #797979;
  }

  &::-webkit-scrollbar-thumb:active {
    border: 0px solid;
    background-color: #4c4c4c;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 
`;

export const PageStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 20px 55px 20px;
  align-items: center;
  min-height: calc(100vh - 70px - 116px);
  font-size: 18px;
  width: 1060px;
  @media (max-width: 1280px) {
    width: 860px;
  }
  @media (max-width: 1024px) {
    width: 625px;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    min-height: calc(100vh - 116px);
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
  ${({ type }) => type && type === 'Table' && css`
    @media (max-width: 1280px) {
      width: 90% !important;
    }
  `}
  ${({ type }) => type && type === 'Main' && css`
    /* width: 1280px !important; */
    width: 100% !important;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    @media (max-width: 1280px) {
      width: 100% !important;
    }
  `}
`;
