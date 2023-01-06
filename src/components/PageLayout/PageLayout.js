import * as React from "react";
import { Helmet } from "react-helmet"
import { IntlProvider } from "react-intl";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { menu } from '../../constant/menu';
import Header from '../Header/Header';
import SubTitle from '../SubTitle/SubTitle';
import Footer from '../Footer/Footer';
import {
  GlobalStyle, Wrapper, PageStyled
} from './PageLayoutStyled';

const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans KR", sans-serif'],
  },
  palette: {
    primary: {
      main: '#364A9C',
      contrastText: '#fff',
    },
  },
});

const PageLayout = ({ pageTitle, children, type, pageContext }) => {
  const isHome = pageTitle === 'Home';
  return (
    <IntlProvider
      locale={pageContext.language}
      messages={pageContext.messages}
    >
      <Helmet>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>
          {isHome ?
            pageContext.messages['jungwon_electronics']
            : `${pageContext.messages['jungwon_electronics']} > ${pageContext.messages[pageTitle]}`
          }
        </title>
      </Helmet>
      <main>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Header menu={menu} isHome={isHome} />
            <PageStyled type={type}>
              {!isHome && <SubTitle pageTitle={pageTitle} menu={menu} />}
              {children}
            </PageStyled>
            <Footer type={type} />
          </Wrapper>
        </ThemeProvider>
      </main>
    </IntlProvider>
  );
}

export default PageLayout;