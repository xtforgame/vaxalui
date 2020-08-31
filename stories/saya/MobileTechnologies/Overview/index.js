import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import TwoCircleSection from 'library/saya/Rick/TwoCircleSection';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';
import ImageContainer from 'library/saya/ImageContainer';
import Introduction from 'library/saya/Rick/Introduction';
import Boxes from 'library/saya/Rick/Boxes';

import MobileLayout from '../../shared/MobileLayout';

import MobileBg1 from '../../img/mobile/m_bg1.jpg'
import MobileBg2 from '../../img/mobile/m_bg44.jpg'
import NextCircle from '../../img/mobile/m_now_next_circle.png';
import leftBox1 from '../../img/mobile/m_bg45.jpg';
import midBox1 from '../../img/mobile/m_bg16.jpg';
import rightBox1 from '../../img/mobile/m_bg17.jpg';
import leftBox2 from '../../img/mobile/m_bg46.jpg';
import midBox2 from '../../img/mobile/m_bg29.jpg';
import rightBox2 from '../../img/mobile/m_bg30.jpg';

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
  .add('Overview',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="TECHNOLOGIES"
            secondTitle={'Recycle\nRenew\nRepeat'}
            thirdTitle={'Next Generation of\nRecycing Technology'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={91}
            secondLineMarginTop={83}
          />

          <ImageContainer
            style={{
              fontFamily: 'FilsonSoftRegular',
              fontSize: 16,
              height: 310,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <div style={{ alignSelf: 'left' }}>
              <div>recycle over</div>
              <div style={{
                color: '#64703f',
                fontSize: 40,
                lineHeight: 1,
                paddingTop: 13,
              }}
              >
                10,000,000,000
            </div>
              <div style={{ paddingTop: 14, }}>single us plastic bottles per year</div>
              <div style={{ width: '100%', height: 1, marginTop: 10, backgroundColor: '#000000' }} />
              <div style={{ paddingTop: 10, }}>into functional and recyclable fibers</div>
            </div>
          </ImageContainer>

          <Introduction
            height={575}
            title={'SAYA Renewal\nTechnologies'}
            subtitle={'Not All Recycle Fibers Are Created\nEqual'}
            content={`SAYA recycles single use, low value, high\nvolume plastic bottles and renews them into\ndurable performance and functional fibers\nthat could be put into durable, and yet still\nrenewable use. We recycle over 100,000 tons\nof plastic bottles per year (equivalent to\n1,000,000,000 bottles) and upcycle them\ninto performance fibers that are durable,\nfunctional, and recyclable.`}
            backgroundImage={MobileBg2}
            color="#ffffff"
            lineColor="#ffffff"
          />


          <TwoCircleSection
            backgroundImage={NextCircle}
            height={887}
            circleMarginTop={66}
          >
            <pre style={{
              fontFamily: 'FilsonSoftRegular',
              fontSize: 16,
              margin: 0,
              paddingTop: 72,
            }}
            >
              {'SAYA Recycling Technologies\nfrom Bottles to Garments and Beyond'}
            </pre>
          </TwoCircleSection>

          <Boxes
            title={'SAYA'}
            titleBack="NOW"
            content={'Renewed Fibers from World’s Largest\nPET Bottle Recycling Network'}
            backgroundColor="#c8c6c6"
            color="#000000"
          >
            <ImageBoxSmall
              title={'SAYA'}
              titleBack={'365'}
              subtitle={'Certified Recycle PET\nFor Everyday Needs'}
              backgroundImage={leftBox1}
              paddingTop={70}
              fontColor="#000000"
            />
            <ImageBoxSmall
              title={'SAYA'}
              titleBack={'COASTAL'}
              subtitle={'Traceable Ocean\nPreventing Plastic Fibers'}
              backgroundImage={midBox1}
              paddingTop={70}
              fontColor="#000000"
            />
            <ImageBoxSmall
              title="SAYA"
              titleBack="USA"
              subtitle={'Certified Recycled\nfrom our South Carolina Plant'}
              backgroundImage={rightBox1}
              paddingTop={70}
              fontColor="#ffffff"
            />
          </Boxes>

          <div style={{ marginTop: 23, }}>
            <Boxes
              title={'SAYA'}
              titleBack="NEXT"
              content={'Advanced Recycled Fibers from\nGarments, Overstocks, and More'}
              backgroundColor="#444343"
              color="#ffffff"
            >
              <ImageBoxSmall
                title="SAYA"
                titleBack="RSCUW"
                subtitle={'Recycling Scraps &\nCutting Waste'}
                backgroundImage={leftBox2}
                paddingTop={70}
                fontColor="#ffffff"
              />
              <ImageBoxSmall
                title={'SAYA\n'}
                titleBack="RSCUW RAW"
                subtitle={'Unbleached Renew FIbers\nRaw from the Source'}
                backgroundImage={midBox2}
                paddingTop={35}
                fontColor="#000000"
              />
              <ImageBoxSmall
                title="SAYA"
                titleBack="GARMA"
                subtitle={'One Stop Used\nGarment to Fiber Solution'}
                backgroundImage={rightBox2}
                paddingTop={70}
                fontColor="#ffffff"
              />
            </Boxes>
          </div>
        </MobileLayout>
      </div >
    ));
