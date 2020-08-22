import React from 'react';
import MobileLayout from 'library/saya/MobileLayout';
import FbIcon from '../img/mobile/fb_w.svg'
import IgIcon from '../img/mobile/ig_w.svg'
import Logo from '../img/mobile/m_logo_w.svg'

export default props => (
  <MobileLayout
    fbIcon={(
      <img src={FbIcon} height={30} style={{}} />
    )}
    igIcon={(
      <img src={IgIcon} height={30} style={{}} />
    )}
    logo={(
      <img src={Logo} height={18} style={{ paddingLeft: 12 }} />
    )}
    {...props}
  />
);
