import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/Rick/TopSection';
import ProductFeatures from 'library/saya/Rick/ProductFeatures';
import ImageNumberBox from 'library/saya/Rick/ImageNumberBox';
import Section2 from 'library/saya/Rick/Section2';
import TitleButton from 'library/saya/Rick/TitleButton';
import CollapseSection from 'library/saya/Rick/CollapseSection';
import CollapseTable from 'library/saya/Rick/CollapseTable';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection1 from '../../../img/mobile/m_banner06.jpg';
import numberBox1 from '../../../img/mobile/m_bg10.jpg';
import numberBox2 from '../../../img/mobile/m_bg11.jpg';
import SectionBG from '../../../img/mobile/m_product01.jpg';

storiesOf('saya|Pages/NewMobile', module)
  .add('SolutionDyed',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={550}
            firstTitle="PERFORMANCE"
            title="Color without Compromise"
            subtitle="Chromuch Solution Dyed"
            backgroundImage={background_TopSection1}
            titleFontFamily="bold"
            subtitleFontFamily="light"
            paddingTop={151}
            titlePaddingTop={43}
            subtitlePaddingTop={16}
          />

          <div style={{ marginTop: 6 }}>
            <ProductFeatures
              title="PRODUCT FEATURES"
              list={[
                'Patneted ChromShield™ Yields Most Saturate and Vibrant Colors',
              ]}
            />
          </div>

          <div style={{ display: 'flex' }}>
            <ImageNumberBox
              number="100"
              topTile="Post Consumer"
              bottomTitle="Recycled Fiber"
              backgroundColor="#d8d8d8"
              color="#000000"
              lineColor="#000000"
            // backgroundImage={}
            />
            <ImageNumberBox
              number="94"
              topTile="less"
              bottomTitle="water usage"
              color="#ffffff"
              lineColor="#ffffff"
              backgroundImage={numberBox1}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <ImageNumberBox
              number="78"
              topTile="less"
              bottomTitle="CO² production"
              color="#ffffff"
              lineColor="#ffffff"
              backgroundImage={numberBox2}
            />
            <ImageNumberBox
              number="64"
              topTile="less"
              bottomTitle="energy usage"
              backgroundColor="#d8d8d8"
              color="#000000"
              lineColor="#000000"
            // backgroundImage={}
            />
          </div>

          <CollapseSection
            height="336px"
            title="Where Breathtaking Color Meets Conscious Design "
            subtitle="Color without Compromise"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={`CHROMUCH advances a new standard in sustainable color design that takes the compromises out of the equation. For the deepest blacks, richest reds and the brightest blues, CHROMUCH uses a patented ChromShield™ Technology to provide ultra-rich color and superior fade resistance from the elements like UV, machine washing and general wear and tear. Our water-free, eco-colors stay brighter and more vibrant longer.`}
          />

          <div style={{ marginTop: 6 }}>
            <Section2
              color="#FFFFFF"
              title="Most Vibrant Color Spectrum in Recycled Solution Dye "
              backgroundImage={SectionBG}
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <TitleButton
              color="#ffffff"
              title={`Learn more about\nSAYA Next Technology.`}
              onClick={() => { }}
              label="Learn More"
              background="#444343"
            />
          </div>

          <CollapseTable
            title={'CHROMUCH\nProduct Specs'}
          />
          <TechnologyProjects
            height={1018}
            backgroundColor="#e3e3e3"
            title="See Technology Projects"
            list={[
              {
                title: "For Every Task and Budget",
                buttonText: "Learn More",
                disabled: false,
                type: <span>SAYA</span>,
                typeBack: <span>365</span>,
              },
              {
                title: "Stretch Fibers with Good Conscious",
                buttonText: "Learn More",
                disabled: false,
                type: <span>STRETCH</span>,
              },
              {
                title: "High Performance Antibacterial Fiber",
                buttonText: "Learn More",
                disabled: false,
                type: <span>FRESH</span>,
              },
              {
                title: "Fluffy Soft, Ultimate Drape and Versatile",
                buttonText: "Learn More",
                disabled: false,
                type: <span>MICROFIBER</span>,
              },
            ]}
          />
        </MobileLayout>
      </div>
    )
  );
