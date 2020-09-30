import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/bob/TopSection';
import ProductFeatures from 'library/saya/bob/ProductFeatures';
import CollapseSection from 'library/saya/bob/CollapseSection';
import Section2 from 'library/saya/bob/Section2';
import LearnMoreSection from 'library/saya/bob/LearnMoreSection';
import CollapseTable from 'library/saya/bob/CollapseTable';
import TechnologyProjects from 'library/saya/bob/TechnologyProjects';

import topBanner from '../../../img/banner08.jpg';
import blockBG1 from '../../../img/bg10.jpg';
import blockBG2 from '../../../img/bg11.jpg';
import product03 from '../../../img/product03.jpg';

import Layout from '../../../shared/Layout';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Page3',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle={
              <>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>PERFORMANCE</span>
              </>
            }
            secondTitle="High Performance Antibacterial Fiber"
            thirdTitle="FRESH"
            backgroundImage={topBanner}
          />
          <ProductFeatures
            title="PRODUCT FEATURES"
            list={[
              'Certified Anti Bacterial Performance over 50 Washes',
              'Prevents Odor Spreading Organisms',
              'Skin Friendly and Non-Leaching Zinc Oxide',
            ]}
            block={[]}
          />
          <CollapseSection
            height="465px"
            color="#ffffff"
            buttonColor="#ffffff"
            title="High Performance Antibacterial, Infused in Recycled Fiber"
            subtitle="Nature and Skin Friendly Non-leaching Zinc Oxide"
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={<div style={{ marginBottom: 80 }}>{`By effectively hindering the growth of bacteria, fungus and odors, SAYA Fresh extends the life of each wear with permanent bacteria and odor control. Zinc oxide interrupts bacterial and fungi metabolism and prevents growth.
 
Certified Anti Bacterial Performance over 50 Washes:  AATCC 100, ISO 20743, 
            
Certified Anti Fungi Performance over 50 Washes:  AATCC 30-2013 Test III `}</div>}
            
          />
          <Section2
            color="#FFFFFF"
            title="Renewed Fresh and Stays Fresh"
            backgroundImage={product03}
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
  