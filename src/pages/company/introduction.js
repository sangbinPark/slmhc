import * as React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../../components/PageLayout/PageLayout';
import Paragraph from '../../components/Paragraph/Paragraph';
import ProductIntroduction from '../../components/ProductIntroduction/ProductIntroduction';
import Language from '../../components/Language/Language';

const IntroductionPage = ({ pageContext }) => {
  return (
    <PageLayout pageTitle="about_us" pageContext={pageContext}>
      <div>
        <Paragraph sentences={[
          'company_product_0',
        ]} />
      </div>
      <ProductIntroduction
        title="company_product_1"
        introduction="company_product_2"
        images={[
          (<StaticImage
            alt="picture 1"
            src="../../images/introduction1.png"
          />), (<StaticImage
            alt="picture 2"
            src="../../images/introduction2.png"
          />), (<StaticImage
            alt="picture 3"
            src="../../images/introduction3.png"
          />),
        ]}
      />
      <ProductIntroduction
        title="company_product_3"
        introduction="company_product_4"
        images={[
          (<StaticImage
            alt="picture 4"
            src="../../images/introduction4.png"
          />), (<StaticImage
            alt="picture 5"
            src="../../images/introduction5.png"
          />), (<StaticImage
            alt="picture 6"
            src="../../images/introduction6.png"
          />),
        ]}
      />
      <ProductIntroduction
        title="company_product_5"
        introduction="company_product_6"
        images={[
          (<StaticImage
            alt="picture 7"
            src="../../images/introduction7.png"
          />), (<StaticImage
            alt="picture 8"
            src="../../images/introduction8.png"
          />), (<StaticImage
            alt="picture 9"
            src="../../images/introduction9.png"
          />),
        ]}
      />
      <div style={{ width: '100%' }}>
        <p><Language id="company_product_7" /></p>
      </div>
    </PageLayout>
  );
}

export default IntroductionPage;
