import * as React from "react";
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import PageLayout from '../../components/PageLayout/PageLayout';
import Paragraph from '../../components/Paragraph/Paragraph';
import Language from '../../components/Language/Language';

const TitleArea = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const Title = styled.p`
  @media (max-width: 425px) {
    width: 225px;
  }
`;

const SubTitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 15px;
`;

const CardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  background-color: #f2f2f2;
  height: 200px;
  margin: 0 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  font-weight: 600;
  font-size: 15px;
  @media (max-width: 768px) {
    flex: initial;
    margin: 10px;
    width: 40%;
    font-size: 16px;
  }
  @media (max-width: 425px) {
    width: 95%;
    font-size: 17px;
  }
`;


const CEOPage = ({ pageContext }) => {
  const theme = useTheme();
  return (
    <PageLayout pageTitle='ceo' pageContext={pageContext}>
      <TitleArea theme={theme}>
        <Title><Language id="ceo_hello" /></Title>
      </TitleArea>
      <Paragraph sentences={[
        'ceo_detail_0',
        'ceo_detail_1',
        'ceo_detail_2',
        'ceo_detail_3',
        'ceo_detail_4',
        'ceo_detail_5'
      ]} />
      <SubTitleArea>
        <p><Language id="main_business" /></p>
      </SubTitleArea>
      <CardArea>
        <Card><Language id="main_busines_0" /></Card>
        <Card><Language id="main_busines_1" /></Card>
        <Card><Language id="main_busines_2" /></Card>
        <Card><Language id="main_busines_3" /></Card>
      </CardArea>
    </PageLayout>
  );
}

export default CEOPage;
