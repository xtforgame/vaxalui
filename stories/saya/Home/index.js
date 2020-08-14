import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TwocircleSection from 'library/saya/Kenny/TwocircleSection';
import TwoBox from 'library/saya/Kenny/TwoBox';
import FourBox from 'library/saya/Kenny/FourBox';
import Background from 'library/saya/img/bg1.jpg';

storiesOf('saya|Home', module)
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
    ()=>(
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle="PRODUCTS"
            secondTitle="SAYA Recycled Fiber"
            thirdTitle="The next of generation of recycled fiber"
            backgroundImage= {Background}
          />
          <Introduction />
          <TwocircleSection />
          <TwoBox />
          <FourBox />
        </Layout>
      </div>
    )
  );