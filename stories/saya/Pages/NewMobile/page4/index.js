import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/bob/TopSection';
import ProductFeatures from 'library/saya/bob/ProductFeatures';
import CollapseSection from 'library/saya/bob/CollapseSection';
import Section2 from 'library/saya/bob/Section2';
import LearnMoreSection from 'library/saya/bob/LearnMoreSection';
import CollapseTable from 'library/saya/bob/CollapseTable';
import TechnologyProjects from 'library/saya/bob/TechnologyProjects';

import topBanner from '../../../img/banner09.jpg';
import blockBG1 from '../../../img/bg10.jpg';
import blockBG2 from '../../../img/bg11.jpg';
import product04 from '../../../img/product04.jpg';

import Layout from '../../../shared/Layout';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Page4',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle={
              <>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>PERFORMANCE</span>
              </>
            }
            secondTitle="Fluffy Soft, Ultimate Drape and Versatile"
            thirdTitle="MICROFIBER"
            backgroundImage={topBanner}
          />
          <ProductFeatures
            title="PRODUCT FEATURES"
            list={[
              '0.2 dpf - as low as',
              '100% Recycled content',
              'Up to 432 filaments',
              'Starting from 5 deniers and up'
            ]}
            block={[]}
          />
          <CollapseSection
            height="465px"
            color="#ffffff"
            buttonColor="#ffffff"
            title={`Ultra Fine Filament, 
The Ultimate Drape and Luxury`}
            subtitle="0.2 dpf Softech(r) Direct Spinning Technology "
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={<div style={{ marginBottom: 80 }}>{`SAYA Microfiber provides the finest performance in 100% recycled content. Each filament can be 100x thinner than a human hair with a luxurious drape, hand feel, and lint-free absorption.`}</div>}
            
          />
          <Section2
            color="#FFFFFF"
            title="Microfiber Redefined and Renewed"
            backgroundImage={product04}
          />
          <LearnMoreSection
            color="#FFFFFF"
            title={`Learn more about\nSAYA Next Technology.`}
            onClick={()=> {}}
            label="Learn More"
            background="#444343"
          />
          <CollapseTable
            title="CHROMUCH Product Specs"
          />
          <TechnologyProjects
            title="Explore More"
            backgroundColor="#ffffff"
            list={[
              {
                title: "For Every Task and Budget",
                buttonText: "Learn More",
                disabled: false,
                type: <><span>SAYA</span><span style={{ fontFamily: 'FilsonSoftLight', fontWeight: 300 }}>365</span></>,
              },
              {
                title: "Stretch Fibers with Good Conscious",
                buttonText: "Learn More",
                disabled: false,
                type: 'STRETCH',
              },
              {
                title: "High Performance Antibacterial Fiber",
                buttonText: "Learn More",
                disabled: false,
                type: 'FRESH',
              },
              {
                title: "Fluffy Soft, Ultimate Drape and Versatile",
                buttonText: "Learn More",
                disabled: false,
                type: 'MICROFIBER',
              },
            ]}
          />
        </Layout>
      </div>
    )
  );
  