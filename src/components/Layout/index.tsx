import React from 'react';
import { ThemeProvider } from 'styled-components';

// import { GlobalStyles } from '../../styles/global';
import Header from '../Header';
import Footer from '../Footer';
// import kaijuTheme from '../../styles/kaijuTheme';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <ThemeProvider theme={kaijuTheme}> */}
        <Header />
        <main>{children}</main>
        <Footer />
      {/* </ThemeProvider> */}
    </>
  );
};

export default Layout;
