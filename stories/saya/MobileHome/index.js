import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import TwoCircleSection from 'library/saya/Rick/TwoCircleSection';
import HomeTopSection from 'library/saya/Rick/HomeTopSection';
import GreenButton from 'library/saya/Rick/GreenButton';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';
import Partner from 'library/saya/Rick/Partner';

import MobileLayout from '../shared/MobileLayout';

import MobileBg1 from '../img/mobile/m_bg38.jpg'
import MobileBg2 from '../img/mobile/m_bg1.jpg'
import MobileBg3 from '../img/mobile/m_bg39.jpg'

import NextCircle from '../img/mobile/m_now_next_circle.png';
import roundArrow from '../img/mobile/m_round_arrow.svg'
import leftBox from '../img/mobile/m_bg40.jpg';
import midBox from '../img/mobile/m_bg41.jpg';
import rightBox from '../img/mobile/m_bg16.jpg';
import backgroundPartner from '../img/mobile/m_bg42.jpg';


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
          <HomeTopSection
            backgroundImage={MobileBg1}
            img={roundArrow}
          />

          <div style={{ paddingTop: 33, backgroundColor: "#f4f4f4", }}>
            <TwoCircleSection
              backgroundImage={NextCircle}
              height={1176}
              circleMarginTop={0}
            >
              <TopSection
                height={473}
                firstTitle="TECHNOLOGIES"
                secondTitle={'In the\nBusiness of\nRenewal'}
                thirdTitle={'The Next of Recycled Goods'}
                secondTitlePaddingTop={40}
                secondLineMarginTop={40}
                firsrtTitlePaddingTop={90}
              />
            </TwoCircleSection>
          </div>

          <TopSection
            firstTitle="PRODUCTS"
            secondTitle={'Micro fibers,\nMacro\nChanges'}
            thirdTitle={'Functional Fibers for\nEvery Challenge'}
            backgroundImage={MobileBg2}
            secondTitlePaddingTop={40}
            secondLineMarginTop={40}
            firsrtTitlePaddingTop={90}
            thirdTitleFontFamily="FilsonSoft-Bold"
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <GreenButton
                marginTop={45}
                text="Learn More"
              />
            </div>
          </TopSection>

          <div style={{ marginTop: 23 }}>
            <TopSection
              secondTitle={'Cleaning Up\nthe World,\n75 Billion Bottles\nat a Time.'}
              thirdTitle={'World’s Largest Recycling\nand Renewing Network'}
              backgroundImage={MobileBg3}
              secondTitlePaddingTop={0}
              secondLineMarginTop={40}
              firsrtTitlePaddingTop={90}
              thirdTitleFontFamily="FilsonSoft-Bold"
              lineDisplay="none"
              lineBackgroundColor="#ffffff"
              color="#ffffff"
              secondTitleFontSize={33}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <GreenButton
                  marginTop={90}
                  text="Learn More"
                />
              </div>
            </TopSection>
          </div>

          <TitleLineBox
            title={'Featured Content'}
            backgroundColor="#f3f3f3"
            color="#000000"
          >
            <ImageBoxSmall
              title={'About\nSAYA'}
              backgroundImage={leftBox}
              paddingTop={52}
              fontColor="#000000"
            />
            <ImageBoxSmall
              title={'Partners in\nSustainability'}
              backgroundImage={midBox}
              paddingTop={52}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title={'SAYA'}
              titleBack="COASTAL"
              subtitle={'Traceable Ocean\nPreventing Plastic Fibers'}
              backgroundImage={rightBox}
              paddingTop={70}
              fontColor="#000000"
            />
          </TitleLineBox>

          <Partner
            backgroundImage={backgroundPartner}
          />
        </MobileLayout>
      </div >
    ));
