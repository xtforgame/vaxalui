import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TwocircleSection from 'library/saya/Kenny/TwocircleSection';
import TwoBox from 'library/saya/Kenny/TwoBox';
import FourBox from 'library/saya/Kenny/FourBox';

import background_TopSection from '../img/bg1.jpg';
import background_Introduction from '../img/bg2.jpg';
import backgroundNextCircle from '../img/now_next_circle_sample.jpg';


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
  .add('Products',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>

          <TopSection
            firstTitle="PRODUCTS"
            secondTitle="SAYA Recycled Fiber"
            thirdTitle="The next of generation of recycled fiber"
            backgroundImage={background_TopSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="85px"
          />

          <Introduction
            height="590px"
            backgroundImage={background_Introduction}
            title="Design Consciously,"
            titleBack="Know What Goes Into Your Gears."
            subtitle="Smooth and Painless Transition to Smarter Fibers."
            description="Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam gravida mollis tortor quis porttitor."
            fontColor="#ffffff"
            lineBorder="solid 1px #ffffff"
            descriptionWidth="460px"
          />

          <TwocircleSection
            backgroundImage={backgroundNextCircle}
          />
          <TwoBox />
          <FourBox />

        </Layout>
      </div>
    )
  );