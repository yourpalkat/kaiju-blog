import React from 'react';
import GlobalStyles from '../../styles/global';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
