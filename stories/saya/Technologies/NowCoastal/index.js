import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import GreenNumberSection from 'library/saya/Kenny/GreenNumberSection';
import Microfibers from 'library/saya/Kenny/Microfibers';
import OceanCycle from 'library/saya/Kenny/OceanCycle';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBox from 'library/saya/Kenny/ImageBox';

import background_TopSection from '../../img/bg9.jpg';
import backgroundMicrofibers1 from '../../img/bg10.jpg';
import backgroundMicrofibers2 from '../../img/bg11.jpg';
import leftBox from '../../img/bg12.jpg';
import rightBox from '../../img/bg13.jpg';

import backgroundOceanCycle from '../../img/ocean-cycle-218x300.png';
import scrollArrowLeftImage from '../../img/scroll_left.svg';
import scrollArrowRightImage from '../../img/scroll_right.svg';

import Logo from '../../img/mobile/m_logo_w.svg'

storiesOf('saya|Pages/Desktop/Technologies/Now', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Coastal',
    () => (
      <div style={{ width: '100%' }}>
        <Layout
          logo={(
            <img src={Logo} height={18} style={{ paddingLeft: 12 }} />
          )}
        >

          <TopSection
            firstTitle="SAYA NOW Series"
            secondTitle="SAYA"
            secondTitleBack="COASTAL"
            thirdTitle="prevent Post-consumer PET Bottles from Being Washed into The Ocean"
            backgroundImage={background_TopSection}
            fontColor="#ffffff"
            lineBorder="1px solid #ffffff"
            firstLineWidth="135px"
            thirdTitleWidth="390px"
          />

          <GreenNumberSection
            number="80"
            topTile="ocean plastics"
            bottomTitle="from coastal land"
            description="SAYA Coastal is a specialized recycling program that targets the clean-up and renewal of discarded plastic bottles in coastal regions that would otherwise migrate out to sea. Study shows more than 80% of ocean plastics actually originated from coastal land."
            height="560px"
            lineWidth="250px"
            leftPaddingTop="165px"
            rightPaddingTop="248px"
            leftPaddingRight="65px"
            rightPaddingLeft="65px"
            numberColor="#64703f"
            percentColor="#64703f"
          />

          <Microfibers
            backgroundImages={[
              backgroundMicrofibers2,
              backgroundMicrofibers1,
            ]}
            scrollArrowLeftImage={scrollArrowLeftImage}
            scrollArrowRightImage={scrollArrowRightImage}
          />
          <OceanCycle
            backgroundImage={backgroundOceanCycle}
          />

          <TitleLineBox
            title="SAYA NOW Serial Projects"
            height="785px"
            fontColor="#000000"
            boxWidth={850}
            lineBorder="solid 1px #979797"
          >
            <ImageBox
              title="SAYA"
              titleBack="GLOBAL"
              subtitle="lor sit amet, consectetuer ad"
              backgroundImage={leftBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />
            <ImageBox
              title="SAYA"
              titleBack="USA"
              subtitle="USA-based fiber program"
              backgroundImage={rightBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />
          </TitleLineBox>

        </Layout>
      </div>
    )
  );