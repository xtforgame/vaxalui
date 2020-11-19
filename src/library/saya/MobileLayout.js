import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from '@material-ui/styles';
import MobileNavbar from './MobileNavbar';
import MobileFooter from './MobileFooter';

const MobileLayout = ({
  children,
  onLinkClick,
  navBarItems,
  logo,
  fbIcon,
  igIcon,
}) => (
  <div
    style={{
      width: '100%',
      // height: '100%',
      overflow: 'hidden',
      fontFamily: 'FilsonSoftRegular',
      // lineHeight: 1,
    }}
  >
    <Helmet title="SAYA homepage" />
    <MobileNavbar onLinkClick={onLinkClick} items={navBarItems}>
      {logo}
    </MobileNavbar>
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
    <MobileFooter
      fbIcon={fbIcon}
      igIcon={igIcon}
    />
  </div>
);

export default MobileLayout;
