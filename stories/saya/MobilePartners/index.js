import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import Introduction from 'library/saya/Rick/Introduction';
import Boxes from 'library/saya/Rick/Boxes';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';

import MobileLayout from '../shared/MobileLayout';

import MobileBg1 from '../img/mobile/m_bg56.jpg'
import MobileBg2 from '../img/mobile/m_bg57.jpg'

import leftBox from '../img/mobile/m_bg58.jpg';
import midBox from '../img/mobile/m_bg20.jpg';
import rightBox from '../img/mobile/m_bg21.jpg';

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
  .add('MobilePartners',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="PARTNERS"
            secondTitle={'Partners in\nSustainability'}
            thirdTitle={'It takes a village to\nachieve sustainability.'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={115}
            secondLineMarginTop={107}
            lineBackgroundColor="#ffffff"
            color="#ffffff"
          />

          <div style={{ marginTop: 23 }}>
            <Introduction
              height={897}
              title={'It takes a village\nto achieve\nsustainability.'}
              subtitle={'Help from you along with millions\nof first line waste collectors, like-\nminded manufacturers, brands,\nand conscious consumers, we\ncreate this global village.'}
              content={`It takes a village to raise a child, and it takes\nmany more villages and expertise to mitigate\nthe plastic mess we made (and making more\neveryday) as we shift to make circular-\neconomy a reality. Help from you along with\nmillions of first line waste collectors, like-\nminded manufacturers, brands, and conscious\nconsumers, we create this global village.\n\nAs manufacturers, we understand the critical\nrole we play in the supply chain as it relates to\nsustainability. We realize that our mission is\ninterdependent upon the success of our\npartners and the networks we co-create. As\nwe continuously strive to build a more\nsustainable business, we seek partners that\nshare our core values. SAYA is honored to\nstand with these dedicated brands and\norganizations as we work together to grow our\nbusinesses and reduce our impacts.`}
              backgroundImage={MobileBg2}
              color="#ffffff"
              lineColor="#ffffff"
            />
          </div>

          <Boxes
            title={'Partners &\nCertifications'}
            content={'To create the global village'}
            backgroundColor="#c9c7c7"
            color="#000000"
          >
            <ImageBoxSmall
              title="Textile Partners"
              backgroundImage={leftBox}
              paddingTop={70}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title="Brand Partners"
              backgroundImage={midBox}
              paddingTop={70}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title={'Certifications'}
              backgroundImage={rightBox}
              paddingTop={70}
              fontColor="#ffffff"
            />
          </Boxes>
        </MobileLayout>
      </div>
    ));
