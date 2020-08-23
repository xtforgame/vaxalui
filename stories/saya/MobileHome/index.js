import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import Introduction from 'library/saya/Rick/Introduction';
import Boxes from 'library/saya/Rick/Boxes';
import ImageBox from 'library/saya/Rick/ImageBox';
import TwoCircleSection from 'library/saya/Rick/TwoCircleSection';

import MobileLayout from '../shared/MobileLayout';

import LeftBox from '../img/bg3.jpg';
import RightBox from '../img/bg4.jpg';

import TopLeftBox from '../img/bg5.jpg';
import TopRightBox from '../img/bg6.jpg';
import BottomLeftBox from '../img/bg7.jpg';
import BottomRightBox from '../img/bg8.jpg';

import MobileBg1 from '../img/mobile/m_bg1.png'
import MobileBg2 from '../img/mobile/bg2.jpg'

import NextCircle from '../img/mobile/m_now_next_circle.png';

storiesOf('saya|Pages/Mobile', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('MobileHome',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="PRODUCTS"
            secondTitle={'SAYA\nRenew\nFiber'}
            thirdTitle={'Design Consciously,\nKnow What Goes Into Your Gear'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={40}
            secondLineMarginTop={32}
          />
          <Introduction
            height={570}
            title={'Not all Recycled\nFibers are\nCreated Equal,'}
            subtitle={'Work with the Best to Transition\nto Sustainable Fibers.'}
            content={`SAYA has the industry’s widest selection of\nPET recycled fiber specifications to meet all\nyour design needs and budget. Find out how\nwe can help to make your transition a smooth\none.`}
            backgroundImage={MobileBg2}
            color="#ffffff"
            lineColor="#ffffff"
          />          
          <Boxes
            title="SAYA 365"
            subtitle="Under SAYA Now Technology."
            content={'Industry’s Favorite* Recycle\nPET Bottle Fiber for Every\nApplication and Budget'}
            backgroundColor="#444343"
            color="#ffffff"
          >
            <ImageBox
              title="SAYA 365"
              subtitle="Lorem ipsum dolor sit amet."
              backgroundImage={LeftBox}
              paddingTop={80}
              fontColor="#000000"
            />
          </Boxes>
          <Boxes
            title={'Re Performance\nFibers'}
            subtitle="Under SAYA Now Technology."
            content={'Industry’s Favorite* Recycle\nPET Bottle Fiber for Every\nApplication and Budget'}
            backgroundColor="#c8c6c6"
            color="#000000"
          >
            <ImageBox
              title={'CHROMUCH\nSolution Dyed'}
              subtitle="Lorem ipsum dolor sit amet."
              backgroundImage={TopLeftBox}
              paddingTop={40}
              fontColor="#ffffff"
            />
            <ImageBox
              title="SAYA 365"
              subtitle="Lorem ipsum dolor sit amet."
              backgroundImage={TopRightBox}
              paddingTop={80}
              fontColor="#ffffff"
            />
            <ImageBox
              title="SAYA 365"
              subtitle="Lorem ipsum dolor sit amet."
              backgroundImage={BottomLeftBox}
              paddingTop={80}
              fontColor="#ffffff"
            />
            <ImageBox
              title="SAYA 365"
              subtitle="Lorem ipsum dolor sit amet."
              backgroundImage={BottomRightBox}
              paddingTop={80}
              fontColor="#ffffff"
            />
          </Boxes>
          <TwoCircleSection
            backgroundImage={NextCircle}
          />
        </MobileLayout>
      </div>
    ));
