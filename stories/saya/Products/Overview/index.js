import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TwoCircleSection from 'library/saya/Kenny/TwoCircleSection';
import ImageBox from 'library/saya/Kenny/ImageBox';
import ClassicFibers from 'library/saya/Kenny/ClassicFibers';

import Layout from '../../shared/Layout';

import background_TopSection from '../../img/bg1.jpg';
import background_Introduction from '../../img/bg2.jpg';
import backgroundNextCircle from '../../img/now_next_circle_sample.jpg';

import leftBox from '../../img/bg3.jpg';
import rightBox from '../../img/bg4.jpg';

import topLeftBox from '../../img/bg5.jpg';
import topRightBox from '../../img/bg6.jpg';
import bottomLeftBox from '../../img/bg7.jpg';
import bottomRightBox from '../../img/bg8.jpg';

storiesOf('saya|Pages/Desktop/Products', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Overview',
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
            thirdTitleWidth="390px"
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

          <TwoCircleSection
            backgroundImage={backgroundNextCircle}
          />

          <ClassicFibers
            title="SAYA Classic Fibers"
            subtitle="Nam dapibus nisl vitae elit."
            height="1000px"
            backgroundColor="#444343"
            fontColor="#ffffff"
            marginTop="0"
            borderStyle="1px solid #ffffff"
            boxWidth="780px"
          >
            <ImageBox
              title="FDY"
              subtitle="Fully drawn yarn"
              backgroundImage={leftBox}
              paddingTop="105px"
              fontColor="#000000"
            />

            <ImageBox
              title="DTY"
              subtitle="Drawn-texturning yarn"
              backgroundImage={rightBox}
              paddingTop="105px"
              fontColor="#000000"
            />
          </ClassicFibers>

          <ClassicFibers
            title="SAYA Classic Fibers"
            subtitle="Nam dapibus nisl vitae elit."
            height="1500px"
            backgroundColor="#c8c6c6"
            fontColor="#000000"
            marginTop="35px"
            borderStyle="1px solid #000000"
            boxWidth="780px"
          >
            <ImageBox
              title="CHROMUCH Solution Dyed"
              subtitle="Color without Compromise"
              backgroundImage={topLeftBox}
              paddingTop='50px'
              fontColor="#ffffff"
            />

            <ImageBox
              title="UltraStretch"
              subtitle="Stretch with a Good Conscious"
              backgroundImage={topRightBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />

            <ImageBox
              title="TopFresh"
              subtitle="lor sit amet, consectetuer ad"
              backgroundImage={bottomLeftBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />

            <ImageBox
              title="MicroFilament"
              subtitle="lor sit amet, consectetuer ad"
              backgroundImage={bottomRightBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />
          </ClassicFibers>

        </Layout>
      </div>
    )
  );