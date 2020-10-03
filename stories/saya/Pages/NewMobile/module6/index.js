import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/Rick/TopSection';
import TopSection4 from 'library/saya/Rick/TopSection4';
import ProductFeatures from 'library/saya/Rick/ProductFeatures';
import ImageNumberBox from 'library/saya/Rick/ImageNumberBox';
import Section2 from 'library/saya/Rick/Section2';
import TitleButton from 'library/saya/Rick/TitleButton';
import TitleWithContent from 'library/saya/Kenny/TitleWithContent';
import Table from 'library/saya/Rick/Table';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection from '../../../img/mobile/m_banner02.jpg';
import SectionBG from '../../../img/mobile/m_product01.jpg';

storiesOf('saya|Pages/NewMobile', module)
  .add('Module6',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={555}
            firstTitle="BOTTLES"
            title="Upgrade Your Bottle Renewal Technology"
            subtitle="Advanced Recycled Fibers"
            backgroundImage={background_TopSection}
            titleFontFamily="bold"
            subtitleFontFamily="light"
          />

          <div style={{ marginTop: 6 }}>
            <TopSection4
              height={350}
              firstTitle="SAYA recycles over"
              title="75,000,000,000"
              topTitle="single-use plastic bottles per year"
              bottomTitle="into functional and recyclable fibers"
            />
          </div>

          <ProductFeatures
            title="PRODUCT FEATURES"
            list={[
              'Up to 35% Superior Stretch and Recovery',
              '50% Recycled PET + 50% Bio-Based PTT',
              'Inherent moisture management stays cool and dry'
            ]}
          />

          <ImageNumberBox
            number="100"
            topTile="Post Consumer "
            bottomTitle="Recycled Fiber"
            backgroundColor="#d8d8d8"
            color="#000000"
            lineColor="#000000"
          // backgroundImage={}
          />
          <Section2
            color="#FFFFFF"
            title="Most Vibrant Color Spectrum in Recycled Solution Dye"
            backgroundImage={SectionBG}
          />
          <TitleButton
            color="#ffffff"
            title={`Learn more about\nSAYA Next Technology.`}
            onClick={() => { }}
            label="Learn More"
            background="#444343"
          />
          <TitleWithContent
            height={900}
            title="CHROMUCH Product Specs"
            fontColor="#000000"
            lineBorder="solid 1px #000000"
            fontSize={30}
          >
            <div style={{ overflow: 'scroll', marginTop: 5, }}>
              <Table />
            </div>
          </TitleWithContent>
        </MobileLayout>
      </div>
    )
  );
