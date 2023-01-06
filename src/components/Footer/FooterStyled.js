import styled, { css } from 'styled-components';

export const FooterStyled = styled.footer`
  height: 116px;
  width: 100%;
  background-color: #343a40;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperStyled = styled.div`
  font-size: 14px;
  padding: 20px;
  width: 1060px;
  @media (max-width: 1280px) {
    width: 860px;
  }
  @media (max-width: 1024px) {
    width: 625px;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 10px;
    padding: 0 5px;
  }
  @media (max-width: 425px) {
    font-size: 10px;
    padding: 0 5px;
  }
  ${({ type }) => type && type === 'Main' && css`
    width: 100% !important;
    margin: 0 45px;
    @media (max-width: 425px) {
      margin: 0 10px;
    }
    @media (max-width: 768px) {
      padding: 0 3px;
    }
    @media (max-width: 425px) {
      padding: 0 3px;
    }
  `}
`;

export const NameStyled = styled.p`
  color: #fff;
  font-weight: 800;
  font-size: 18px;
  margin: 0;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 3px;
  }
`;

export const CopyrightStyled = styled.p`
  margin: 0;
  color: #999;
  word-break: break-word;
`;

export const ContactStyled = styled.p`
  margin: 0;
  color: #fff;
  word-break: break-word;
  a {
    color: #fff;
  }
`;