import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TwocircleSection from 'library/saya/Kenny/TwocircleSection';
import TwoBox from 'library/saya/Kenny/TwoBox';
import FourBox from 'library/saya/Kenny/FourBox';

import Background1 from '../img/bg1.jpg';
import Background2 from '../img/bg2.jpg';

import LeftBox from '../img/bg3.jpg';
import RightBox from '../img/bg4.jpg';

import TopLeftBox from '../img/bg5.jpg';
import TopRightBox from '../img/bg6.jpg';
import BottomLeftBox from '../img/bg7.jpg';
import BottomRightBox from '../img/bg8.jpg';

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
            backgroundImage={Background1}
          />
          <Introduction
            backgroundImage={Background2}
          />
          <TwocircleSection />
          <TwoBox
            leftImage={LeftBox}
            rightImage={RightBox}
          />
          <FourBox
            topLeftImage={TopLeftBox}
            topRightImage={TopRightBox}
            bottomLeftImage={BottomLeftBox}
            bottomRightImage={BottomRightBox}
          />
        </Layout>
      </div>
    )
  );