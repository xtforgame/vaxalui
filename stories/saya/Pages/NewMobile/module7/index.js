import React from 'react';
import { storiesOf } from '@storybook/react';
import ClassicFibers from 'library/saya/bob/ClassicFibers';
import ImageBoxSmall from 'library/saya/bob/ImageBoxSmall';
import BigGreenSection from 'library/saya/bob/BigGreenSection';
import StageWithIcon from 'library/saya/bob/StageWithIcon';
import CollapseTable from 'library/saya/bob/CollapseTable';

import leftBox from '../../../img/bg60.jpg';
import midBox from '../../../img/bg61.jpg';
import rightBox from '../../../img/bg62.jpg';
import topImg from '../../../img/fig1.svg';
import bottomImg from '../../../img/fig2.svg';
import process from '../../../img/fig3.svg';

import Layout from '../../../shared/Layout';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Module7',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <BigGreenSection
            backgroundColor="#64703f"
            title="Not all Recycled Fibers are Created Equal, SAYA Just Get More TLC"
            subtitle="Five-stage Filtration and Two-stage Purification"
            fontColor="#ffffff"
            titleWidth="461px"
            lineBorder="solid 1px #ffffff"
            subtitleWidth="620px"
            description={
              <>
                <div style={{ fontSize: 14, width: 460, height: 72, color: '#ffffff' }}>
                  SAYA continues to perfect the process of renewing water bottles into yarns for multiple uses. Discarded water bottles are renewed through our proprietary, five-stage filtration process which are followed by two stages of purification. 
                </div>
                <StageWithIcon
                  topImg={topImg}
                  bottomImg={bottomImg}
                />
                <div style={{ width: 461, height: 1, marginTop: 120, border: '1px solid #FFFFFF' }} />
                <div style={{ fontFamily: 'FilsonSoftLight', fontWeight: 300, fontSize: 20, width: 460, marginTop: 40, color: '#ffffff' }}>
                  Enhanced Process
                </div>
                <div style={{ fontSize: 14, width: 460, height: 72, marginTop: 8, color: '#ffffff' }}>
                The resulting flakes are then transported to in-house facilities where they are batch-optimized to control color and tenacity and transformed into pellets ready to be extruded into recycled yarns designated for a specific end-use.
                </div>
                <img src={process} />
              </>
            }
          >
            
          </BigGreenSection>
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
          <CollapseTable
            title="CHROMUCH Product Specs"
          />
        </Layout>
      </div>
    )
  );
  