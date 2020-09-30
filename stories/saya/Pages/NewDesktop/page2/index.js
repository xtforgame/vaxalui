import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/bob/TopSection';
import ProductFeatures from 'library/saya/bob/ProductFeatures';
import CollapseSection from 'library/saya/bob/CollapseSection';
import Section2 from 'library/saya/bob/Section2';
import LearnMoreSection from 'library/saya/bob/LearnMoreSection';
import CollapseTable from 'library/saya/bob/CollapseTable';
import TechnologyProjects from 'library/saya/bob/TechnologyProjects';

import topBanner from '../../../img/banner07.jpg';
import blockBG1 from '../../../img/bg10.jpg';
import blockBG2 from '../../../img/bg11.jpg';
import product02 from '../../../img/product02.jpg';

import Layout from '../../../shared/Layout';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Page2',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle={
              <>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>PERFORMANCE</span>
              </>
            }
            secondTitle="Stretch Fibers with Good Conscious"
            thirdTitle="STRETCH"
            backgroundImage={topBanner}
          />
          <ProductFeatures
            title="PRODUCT FEATURES"
            list={[
              '35% Stretch and Recovery',
              '50% Recycled PET + 50% Bio-Based PTT',
              'Moisture management to keep cool and dry',
              '0% Rubber content',
            ]}
            block={[]}
          />
          <CollapseSection
            height="465px"
            color="#ffffff"
            buttonColor="#ffffff"
            title="Greater Stretch, Durability and Recovery"
            subtitle="SAYA Renew, Bio-Based, and Rubber-Free"
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={<div style={{ marginBottom: 80 }}>SAYA offers industry's highest stretch ratio with recycled and bio-based fibers. This makes fabrics that flexes and expands with your potentials, not limiting it. Chlorine resistant, rubber free, durable stretch, our Stretch is where durability and sustainability meet.</div>}
            
          />
          <Section2
            color="#FFFFFF"
            title="Superior Hybrid Stretch with SAYA Renew Technology"
            backgroundImage={product02}
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
  