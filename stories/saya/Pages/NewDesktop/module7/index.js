import React from 'react';
import { storiesOf } from '@storybook/react';
import ClassicFibers from 'library/saya/bob/ClassicFibers';
import ImageBoxSmall from 'library/saya/bob/ImageBoxSmall';
import BigGreenSection from 'library/saya/bob/BigGreenSection';

import leftBox from '../../../img/bg60.jpg';
import midBox from '../../../img/bg61.jpg';
import rightBox from '../../../img/bg62.jpg';

import Layout from '../../../shared/Layout';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Module7',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          {/* <BigGreenSection
            height="465px"
            backgroundColor="#64703f"
            title="Not all Recycled Fibers are Created Equal, SAYA Just Get More TLC"
            subtitle="Five-stage Filtration and Two-stage Purification"
            fontColor="#ffffff"
            titleWidth="461px"
            lineBorder="solid 1px #ffffff"
            subtitleWidth="620px"
            descriptionWidth="460px"
            description={
              <div style={{ fontSize: 14, width: 460, height: 72, color: '#ffffff' }}>
                SAYA continues to perfect the process of renewing water bottles into yarns for multiple uses. Discarded water bottles are renewed through our proprietary, five-stage filtration process which are followed by two stages of purification. 
              </div>
            }
          /> */}
          <ClassicFibers
            title="Partners & Certifications"
            subtitle="Collaborate to Achieve Sustainability Like a Pro"
            height="910px"
            backgroundColor="#c9c7c7"
            fontColor="#000000"
            marginTop="0"
            borderStyle="1px solid #000000"
            boxWidth={900}
          >
            <ImageBoxSmall
              title={`TEXTILE\nPARTNERS`}
              backgroundImage={leftBox}
              paddingTop='75px'
              fontColor="#000000"
              marginTop="150px"
            />
            <ImageBoxSmall
              title="BRAND PARTNERS"
              backgroundImage={midBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="150px"
            />
            <ImageBoxSmall
              title="CERTIFICATIONS"
              backgroundImage={rightBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="150px"
            />
          </ClassicFibers>
        </Layout>
      </div>
    )
  );
  