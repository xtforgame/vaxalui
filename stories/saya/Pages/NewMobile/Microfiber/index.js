import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/Rick/TopSection';
import ProductFeatures from 'library/saya/Rick/ProductFeatures';
import Section2 from 'library/saya/Rick/Section2';
import TitleButton from 'library/saya/Rick/TitleButton';
import CollapseSection from 'library/saya/Rick/CollapseSection';
import CollapseTable from 'library/saya/Rick/CollapseTable';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection1 from '../../../img/mobile/m_banner09.jpg';
import SectionBG from '../../../img/mobile/m_product04.jpg';

storiesOf('saya|Pages/NewMobile', module)
  .add('Microfiber',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={550}
            firstTitle="PERFORMANCE"
            title="Fluffy Soft, Ultimate Drape and Versatile"
            subtitle="MICROFIBER"
            backgroundImage={background_TopSection1}
            titleFontFamily="bold"
            subtitleFontFamily="light"
            paddingTop={92}
            titlePaddingTop={43}
            subtitlePaddingTop={16}
          />

          <div style={{ marginTop: 6 }}>
            <ProductFeatures
              title="PRODUCT FEATURES"
              list={[
                '0.2 dpf - as low as',
                '100% Recycled content',
                'Up to 432 filaments',
                'Starting from 5 deniers and up',
              ]}
            />
          </div>

          <CollapseSection
            height="375px"
            title="Ultra Fine Filament,The Ultimate Drape and Luxury"
            subtitle="0.2 dpf Softech(r) Direct Spinning Technology "
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={`SAYA Microfiber provides the finest performance in 100% recycled content. Each filament can be 100x thinner than a human hair with a luxurious drape, hand feel, and lint-free absorption.`}
          />

          <div style={{ marginTop: 6 }}>
            <Section2
              color="#FFFFFF"
              title={'Microfiber Redefined\nand Renewed'}
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
            title={'MICROFIBER\nProduct Specs'}
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
                title: "Color without Compromise",
                buttonText: "Learn More",
                disabled: false,
                type: <span>CHROMUCH Solution Dyed</span>,
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
            ]}
          />
        </MobileLayout>
      </div>
    )
  );
