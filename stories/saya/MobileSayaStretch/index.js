import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import ImageContainer from 'library/saya/ImageContainer';
import Card from 'library/saya/Card';

import MobileLayout from '../shared/MobileLayout';

import MobileBg1 from '../img/mobile/m_bg31.jpg'
import articlePic1 from '../img/mobile/m_pic1.jpg';
import articlePic2 from '../img/mobile/m_pic2.jpg';
import articlePic3 from '../img/mobile/m_pic3.jpg';
import articlePic4 from '../img/mobile/m_pic4.jpg';

import Table from 'library/saya/Rick/Table';
import TitleWithContent from 'library/saya/Kenny/TitleWithContent';


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
  .add('MobileSayaStretch',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          

          
          <div style={{ paddingTop: 10, }}>
            <TitleWithContent
              height={900}
              title="Spec"
              fontColor="#000000"
              lineBorder="solid 1px #000000"
              fontSize={33}
            >
              <div style={{ overflow: 'scroll', marginTop: 5, }}>
                <Table />
              </div>
            </TitleWithContent>
          </div>
        </MobileLayout>
      </div>
    )
  );