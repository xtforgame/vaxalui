import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/bob/TopSection';
import ProductFeatures from 'library/saya/bob/ProductFeatures';
import CollapseSection from 'library/saya/bob/CollapseSection';
import Section2 from 'library/saya/bob/Section2';
import LearnMoreSection from 'library/saya/bob/LearnMoreSection';
import CollapseTable from 'library/saya/bob/CollapseTable';
import TechnologyProjects from 'library/saya/bob/TechnologyProjects';

import topBanner from '../../../img/banner06.jpg';
import blockBG1 from '../../../img/bg10.jpg';
import blockBG2 from '../../../img/bg11.jpg';
import product01 from '../../../img/product01.jpg';

import Layout from '../../../shared/Layout';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Page1',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle={
              <>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>PERFORMANCE</span>
              </>
            }
            secondTitle="Color without Compromise"
            thirdTitle="Chromuch Solution Dyed"
            backgroundImage={topBanner}
          />
          <ProductFeatures
            title="PRODUCT FEATURES"
            list={[
              'Patneted ChromShield™ Yields Most Saturate and Vibrant Colors',
            ]}
            block={[
              {
                color: '#000000',
                num: '100',
                top: 'Post Consumer',
                bottom: 'Recycled Fiber',
                bg: '#d8d8d8',
              },
              {
                color: '#FFFFFF',
                num: '94',
                top: 'less',
                bottom: 'water usage',
                bg: blockBG1,
              },
              {
                color: '#FFFFFF',
                num: '78',
                top: 'less',
                bottom: 'CO² production',
                bg: blockBG2,
              },
              {
                color: '#000000',
                num: '64',
                top: 'less',
                bottom: 'energy usage',
                bg: '#d8d8d8',
              }
            ]}
          />
          <CollapseSection
            height="465px"
            color="#ffffff"
            buttonColor="#ffffff"
            title="Where Breathtaking Color Meets Conscious Design"
            subtitle="Color without Compromise"
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={<div style={{ marginBottom: 80 }}>CHROMUCH advances a new standard in sustainable color design that takes the compromises out of the equation. For the deepest blacks, richest reds and the brightest blues, CHROMUCH uses a patented ChromShield™ Technology to provide ultra-rich color and superior fade resistance from the elements like UV, machine washing and general wear and tear. Our water-free, eco-colors stay brighter and more vibrant longer.</div>}
            
          />
          <Section2
            color="#FFFFFF"
            title="Most Vibrant Color Spectrum in Recycled Solution Dye"
            backgroundImage={product01}
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
  