import * as React from "react";
import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';
import LinkCard from '../components/LinkCard/LinkCard';
import Ideology from '../components/Ideology/Ideology';
import Language from '../components/Language/Language';

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
`;

const BGImage = styled.div`
  background-image: url(/images/main.jpg);
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
`;

const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: #fff;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  @media (min-width: 1280px) {
    right: 8%;
  }
`

const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

const SubTitle = styled.span`
  font-size: 18px;
`;

const IndexPage = ({ pageContext }) => {
  return (
    <PageLayout pageTitle="Home" type="Main" pageContext={pageContext}>
      <ImageWrapper>
        <BGImage />
        <TitleWrapper>
          <SubTitle><Language id="main_subtitle" /></SubTitle>
          <Title><Language id="jungwon_electronics" /></Title>
        </TitleWrapper>
      </ImageWrapper>
      <LinkCard
        data={[
          { icon: 'factory', title: 'about_us', link: '/company/introduction' },
          { icon: 'timeline', title: 'history', link: '/company/history' },
          { icon: 'list', title: 'products', link: '/product/carrier' },
          { icon: 'map', title: 'contact', link: '/contact' },
        ]}
      />
      <Ideology
        data={[
          { icon: 'manufacture', title: 'technology', subTitle: 'based_on_the_best_technolohy' },
          { icon: 'handShake', title: 'customer', subTitle: 'the_best_product_and_customer_oriented_service' },
          { icon: 'eco', title: 'sustainability', subTitle: 'environmental_management' },
        ]}
      />
    </PageLayout>
  );
}

export default IndexPage;
