import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/bob/TopSection';
import TopSection3 from 'library/saya/bob/TopSection3';
import ProductFeatures from 'library/saya/bob/ProductFeatures';
import Section2 from 'library/saya/bob/Section2';
import LearnMoreSection from 'library/saya/bob/LearnMoreSection';
import TitleWithContent from 'library/saya/Kenny/TitleWithContent';
import Table from 'library/saya/bob/Table';

import Layout from '../../../shared/Layout';

import background_TopSection from '../../../img/banner03.jpg';
import SectionBG from '../../../img/bg07.jpg';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Module6',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle={
              <span style={{ fontFamily: 'FilsonSoft-Bold' }}>BOTTLE</span>
            }
            secondTitle="Next Generation of Recycing Technology"
            thirdTitle="Recycle - Renew - Repeat"
            backgroundImage={background_TopSection}
          />
          <TopSection3
            firstTitle={
              <span style={{ fontFamily: 'FilsonSoft-Bold' }}>SAYA recycles over</span>
            }
            secondTitle="10,000,000,000"
            topTitle="single-use plastic bottles per year "
            bottomTitle="into functional and recyclable fibers"
          />
          <ProductFeatures
            title="PRODUCT FEATURES"
            list={[
              'Up to 35% Superior Stretch and Recovery',
              '50% Recycled PET + 50% Bio-Based PTT',
              'Inherent moisture management stays cool and dry'
            ]}
            block={[
              {
                color: '#000000',
                num: '100',
                top: 'Post Consumer',
                bottom: 'Recycled Fiber by SAYA Now',
                bg: '#d8d8d8',
              },
              {
                color: '#FFFFFF',
                num: '100',
                top: 'Post Consumer',
                bottom: 'Recycled Fiber by SAYA Now',
                bg: background_TopSection,
              },
              {
                color: '#FFFFFF',
                num: '100',
                top: 'Post Consumer',
                bottom: 'Recycled Fiber by SAYA Now',
                bg: background_TopSection,
              },
              {
                color: '#000000',
                num: '100',
                top: 'Post Consumer',
                bottom: 'Recycled Fiber by SAYA Now',
                bg: '#d8d8d8',
              }
            ]}
          />
          <Section2
            color="#FFFFFF"
            title="Most Vibrant Color Spectrum in Recycled Solution Dye"
            backgroundImage={SectionBG}
          />
          <LearnMoreSection
            color="#FFFFFF"
            title={`Learn more about\nSAYA Next Technology.`}
            onClick={()=> {}}
            label="Learn More"
            background="#444343"
          />
          <LearnMoreSection
            color="#000000"
            title={`See our Product Section\nfor more details on yarn selection.`}
            onClick={()=> {}}
            label="Learn More"
            background="#ffffff"
          />
          <TitleWithContent
            height={900}
            title="CHROMUCH Product Specs"
            titleWidth={600}
            fontColor="#000000"
            lineBorder="solid 1px #000000"
          >
            <div style={{ display: 'flex', justifyContent: 'center', }}>
              <Table />
            </div>
          </TitleWithContent>
        </Layout>
      </div>
    )
  );
  