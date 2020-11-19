import React, { useContext } from 'react';
import Layout from 'library/saya/Layout';
import useSubscription from 'library/saya/hooks/useSubscription';
import subscriptionContext from 'library/saya/contexts/subscriptionContext';
import FbIcon from '../img/mobile/fb_w.svg';
import IgIcon from '../img/mobile/ig_w.svg';
import Logo from '../img/mobile/m_logo_w.svg';

export default (props) => {
  const v = useSubscription(() => Promise.resolve());
  return (
    <subscriptionContext.Provider value={v}>
      <Layout
        fbIcon={(
          <img src={FbIcon} height={40} style={{}} />
        )}
        igIcon={(
          <img src={IgIcon} height={40} style={{}} />
        )}
        logo={(
          <img src={Logo} height={18} style={{ paddingLeft: 12 }} />
        )}
        {...props}
      />
    </subscriptionContext.Provider>
  );
};
