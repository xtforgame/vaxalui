import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import GreenNumberSection from 'library/saya/Kenny/GreenNumberSection';
import Microfibers from 'library/saya/Kenny/Microfibers';
import OceanCycle from 'library/saya/Kenny/OceanCycle';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBox from 'library/saya/Kenny/ImageBox';

import background_TopSection from '../img/bg9.jpg';
import background_Microfibers from '../img/bg10.jpg';
import leftBox from '../img/bg12.jpg';
import rightBox from '../img/bg13.jpg';

import backgroundOceanCycle from '../img/ocean-cycle-218x300.png';


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
  .add('TechnologiesNowCoastal2',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>

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
            percentColor="##64703f"
          />

          <Microfibers
            backgroundImage={background_Microfibers}
          />
          <OceanCycle
            backgroundImage={backgroundOceanCycle}
          />

          <TitleLineBox
            title="SAYA NOW Serial Projects"
            height="785px"
            fontColor="#000000"
            boxWidth="780px"
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