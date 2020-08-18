import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import HomeTopSection from 'library/saya/Kenny//HomeTopSection';
import HomeTwocircleSection from 'library/saya/Kenny//HomeTwocircleSection';
import MacroChanges from 'library/saya/Kenny//MacroChanges';
import CleaningUp from 'library/saya/Kenny//CleaningUp';
import Partner from 'library/saya/Kenny//Partner';


storiesOf('saya|Pages/Desktop', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Home',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>

          <HomeTopSection />
          <HomeTwocircleSection />
          <MacroChanges />
          <CleaningUp />
          <Partner />

        </Layout>
      </div>
    )
  );