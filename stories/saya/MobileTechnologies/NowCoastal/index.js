import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import ImageContainer from 'library/saya/ImageContainer';
import GreenNumberSection from 'library/saya/Rick/GreenNumberSection';
import SubtitleContent from 'library/saya/SubtitleContent';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';

import MobileLayout from '../../shared/MobileLayout';

import MobileBg1 from '../../img/mobile/m_bg47.jpg'
import MobileBg2 from '../../img/mobile/m_bg48.jpg'
import oceanCycle from '../../img/mobile/ocean-cycle-218x300.png'

import leftBox from '../../img/mobile/m_bg45.jpg';
import rightBox from '../../img/mobile/m_bg17.jpg';


storiesOf('saya|Pages/Mobile/MobileTechnologies', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('NowCoastal',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="SAYA Now Series"
            secondTitle={'SAYA\n'}
            secondTitleBack={'COASTAL'}
            thirdTitle={'Recycled FIbers from\nOcean Prevented Plastic'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={115}
            secondLineMarginTop={106}
            color="#ffffff"
            lineBackgroundColor="#ffffff"
          />

          <GreenNumberSection
            marginTop={80}
            number="80"
            topTile="ocean plastic"
            bottomTitle="from coastal land"
            height={591}
            numberColor="#64703f"
            percentDisplay="none"
            subtitle={`Ocean Plastics Come from Our\nCoasts `}
            content={`SAYA Coastal is a specialized recycling\nprogram that targets the clean-up and\nrenewal of discarded plastic bottles in coastal\nregions that would otherwise migrate out to\nsea. Study shows more than 80% of ocean\nplastics actually originated from coastal land.`}
          />

          <ImageContainer style={{ backgroundImage: `url(${MobileBg2})`, height: 575, }}>
            <pre style={{
              fontSize: 27,
              fontFamily: 'FilsonSoft-Bold',
              paddingTop: 20,
              alignSelf: 'left'
            }}
            >
              {'Upcycle Ocean Bound\nBottles Before They\nBecome Microplastics'}
            </pre>
          </ImageContainer>

          <ImageContainer style={{ backgroundColor: '#e3e3e3', height: 516, }}>
            <div style={{ width: '80%', alignItems: 'flex-start' }}>
              <img
                src={oceanCycle}
                style={{ width: 109, height: 150, marginTop: 80, }}
              />
            </div>
            <SubtitleContent
              height={575}
              fontColor="#000000"
              subtitle={'Certified Ocean Plastic '}
              content={`We work with OceanCycle’s network of\ncertified coastal recyclers. Treated with SAYA\nNow’s proprietary renewing technology, we\nturn potential microplastics into durable and\nluxurious performance microfibers.`}
              paddingTop={55}
            />
          </ImageContainer>

          <TitleLineBox
            title="Other SAYA Now Projects"
            color="#000000"
          >
            <ImageBoxSmall
              title={'SAYA'}
              titleBack={'365'}
              subtitle={'Certified Recycle PET\nFor Everyday Needs'}
              backgroundImage={leftBox}
              paddingTop={70}
              fontColor="#000000"
            />
            <ImageBoxSmall
              title="SAYA"
              titleBack="USA"
              subtitle={'Certified Recycled\nfrom our South Carolina Plant'}
              backgroundImage={rightBox}
              paddingTop={70}
              fontColor="#ffffff"
            />
          </TitleLineBox>
        </MobileLayout>
      </div>
    )
  );