import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from '@material-ui/styles';
import MobileNavbar from './MobileNavbar';
import Footer from './Footer';

const MobileLayout = ({ children }) => (
  <div
    style={{
      width: '100%',
      // height: '100%',
      overflow: 'hidden',
    }}
  >
    <Helmet title="SAYA homepage" />
    <MobileNavbar />
    <div
      style={{
        width: '100%',
        height: 56, // = 8*8
        // this is a placeholder for position fixed MobileNavbar
      }}
    />
    <div
      style={{
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      {children}
    </div>
    <Footer />
  </div>
);

export default MobileLayout;
