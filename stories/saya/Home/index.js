import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import HomeTopSection from 'library/saya/Kenny/HomeTopSection';
import HomeTwoCircleSection from 'library/saya/Kenny/HomeTwoCircleSection';
import MacroChanges from 'library/saya/Kenny/MacroChanges';
import CleaningUp from 'library/saya/Kenny/CleaningUp';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';
import Partner from 'library/saya/Kenny/Partner';

import backgroundMacroChanges from '../img/bg14.jpg';
import backgroundCleaningUp from '../img/bg15.jpg';

import backgroundNextCircle from '../img/now_next_circle_sample.jpg';

import leftBox from '../img/bg17.jpg';
import midBox from '../img/bg18.jpg';
import rightBox from '../img/bg19.jpg';

import backgroundPartner from '../img/bg16.jpg';
import bottle from '../img/bottle_w.svg';

import backgroundHomeTopSection from '../img/bg0.jpg';

import roundArrowImage from '../img/round_arrow.svg';
import scrollArrowImage from '../img/scroll arrow.png';

import scrollArrowLeftImage from '../img/scroll_left.svg';
import scrollArrowRightImage from '../img/scroll_right.svg';


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
  .add('Home',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>

          <HomeTopSection
            backgroundImage={backgroundHomeTopSection}
            roundArrowImage={roundArrowImage}
            scrollArrowImage={scrollArrowImage}
            scrollArrowLeftImage={scrollArrowLeftImage}
            scrollArrowRightImage={scrollArrowRightImage}
          />
          <HomeTwoCircleSection
            backgroundImage={backgroundNextCircle}
          />
          <MacroChanges
            backgroundImage={backgroundMacroChanges}
          />
          <CleaningUp
            backgroundImage={backgroundCleaningUp}
          >
            <ImageBoxSmall
              title="About SAYA"
              backgroundImage={leftBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="150px"
            />
            <ImageBoxSmall
              title="Partners in Sustainability"
              backgroundImage={midBox}
              paddingTop='60px'
              fontColor="#ffffff"
              marginTop="125px"
            />
            <ImageBoxSmall
              title="SAYA"
              titleBack="COASTAL"
              backgroundImage={rightBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="150px"
            />
          </CleaningUp>
          <Partner
            backgroundImage={backgroundPartner}
            bottleImage={bottle}
          />

        </Layout>
      </div>
    )
  );