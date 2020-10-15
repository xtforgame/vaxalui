import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from '@material-ui/styles';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({
  children,
  onLinkClick,
  navBarItems,
  logo,
  fbIcon,
  igIcon,

  email,
  setEmail,
  checked,
  setChecked,
  errorMessage,
  successMessage,
  onSubmit,
  emailError,
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
    <Navbar onLinkClick={onLinkClick} items={navBarItems}>
      {logo}
    </Navbar>
    <div
      style={{
        width: '100%',
        height: 64, // = 8*8
        // this is a placeholder for position fixed Navbar
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
    <Footer
      fbIcon={fbIcon}
      igIcon={igIcon}

      email={email}
      setEmail={setEmail}
      checked={checked}
      setChecked={setChecked}
      errorMessage={errorMessage}
      successMessage={successMessage}
      onSubmit={onSubmit}
      emailError={emailError}
    />
  </div>
);

export default Layout;
