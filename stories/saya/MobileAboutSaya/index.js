import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import Introduction from 'library/saya/Rick/Introduction';
import ImageContainer from 'library/saya/ImageContainer';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';

import MobileLayout from '../shared/MobileLayout';

import MobileBg1 from '../img/mobile/m_bg69.jpg'
import MobileBg2 from '../img/mobile/m_bg70.jpg'
import MobileBg3 from '../img/mobile/m_bg71.jpg'

import leftBox from '../img/mobile/m_bg66.jpg';
import rightBox from '../img/mobile/m_bg67.jpg';


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
  .add('MobileAboutSaya',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="ABOUT"
            secondTitle={'SAYA'}
            thirdTitle={'Renewed Fiber is\nthe Name of the Game'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={148}
            secondLineMarginTop={138}
          />

          <ImageContainer
            style={{ height: 165, }}
          >
            <div style={{
              fontSize: 27,
              fontFamily: 'FilsonSoft-Bold',
              paddingTop: 52,
            }}
            >
              Vision & Mission
            </div>
            <div style={{
              fontSize: 17,
              fontFamily: 'FilsonSoftRegular',
              paddingTop: 4,
              color: '#231f20',
            }}
            >
              A Greater Expectation
            </div>
          </ImageContainer>

          <Introduction
            height={700}
            title={'Recover,\nRenew,\nRebuild'}
            content={`We manufacture sustainable fibers from\nrecycled resources to lessen our impacts,\ngrow our partners and better our world.\n\nOur motto is recover, renew, rebuild and our\nmission is to bring new life to what was once\ndiscarded.\n\nWe innovate to bring better manufacturing\nmethods, cleaner processes and more\nsustainable products to market. We don’t shy\naway from more challenging endeavors as we\nseek to redefine what’s possible in textile\nrenewal.\n\nAt SAYA, we believe that raising the bar,\nwithin the supply chain, elevates us all.`}
            backgroundImage={MobileBg2}
            color="#000000"
            lineColor="#000000"
          />

          <div style={{ marginTop: 23, }}>
            <Introduction
              height={684}
              title={'Look Beyond the\nLabel and Into the\nConscience'}
              content={`SAYA is able to push the boundaries thanks\nto its parent company Nan Ya Plastics, a\nbranch of the Formosa Plastics Group, a\nfamily business founded by two brothers in\n1954. More than 60 years later, Formosa has\nbecome one of the largest privately-held\ncompanies in Taiwan, and Forbes’ 1000\nLargest Public Companies in the world.\n\nAs a global leader in performance fibers, Nan\nYa has committed to reliably deliver quality,\ninnovative products through a transparent\nsupply chain. By fostering close partnerships,\ncreating responsible solutions and improving\nthe environmental performance of all their\nproducts, Nan Ya continues to innovate to\nstay ahead of fast-moving market trends and\nraise the bar of the entire industry.`}
              backgroundImage={MobileBg3}
              color="#ffffff"
              lineColor="#ffffff"
            />
          </div>


          <TitleLineBox
            title="About SAYA"
            backgroundColor="#e5e5e5"
            color="#000000"
          >
            <ImageBoxSmall
              title={'News'}
              backgroundImage={leftBox}
              paddingTop={70}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title={'Media\n&\nDownloads'}
              backgroundImage={rightBox}
              paddingTop={35}
              fontColor="#ffffff"
            />
          </TitleLineBox>
        </MobileLayout>
      </div>
    )
  );