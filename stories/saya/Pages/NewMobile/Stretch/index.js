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

import background_TopSection1 from '../../../img/mobile/m_banner07.jpg';
import SectionBG from '../../../img/mobile/m_product02.jpg';

storiesOf('saya|Pages/NewMobile', module)
  .add('Stretch',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={550}
            firstTitle="PERFORMANCE"
            title="Stretch Fibers with Good Conscious"
            subtitle="STRETCH"
            backgroundImage={background_TopSection1}
            titleFontFamily="bold"
            subtitleFontFamily="light"
            paddingTop={122}
            titlePaddingTop={43}
            subtitlePaddingTop={16}
          />

          <div style={{ marginTop: 6 }}>
            <ProductFeatures
              title="PRODUCT FEATURES"
              list={[
                '35% Stretch and Recovery',
                '50% Recycled PET + 50% Bio-Based PTT',
                'Moisture management to keep cool and dry',
                '0% Rubber content',
              ]}
            />
          </div>

          <CollapseSection
            height="336px"
            title="Greater Stretch,Durability and Recovery "
            subtitle="SAYA Renew, Bio-Based, and Rubber-Free"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={`SAYA offers industry's highest stretch ratio with recycled and bio-based fibers. This makes fabrics that flexes and expands with your potentials, not limiting it. Chlorine resistant, rubber free, durable stretch, our Stretch is where durability and sustainability meet.`}
          />

          <div style={{ marginTop: 6 }}>
            <Section2
              color="#FFFFFF"
              title={'Superior Hybrid\nStretch with\nSAYA Renew\nTechnology'}
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
            title={'STRETCH\nProduct Specs'}
            rows={[
              {
                item: 'STRETCH - Carefree\n(PTT/PET)',
                types: [
                  {
                    type: 'DTY',
                    denie: [30, 50, 75, 80, 100, 150],
                    filame: [36, 36, 36, 84, 108, 72],
                    luster: ['SD', 'SD', 'SD', 'FD', 'FD', 'SD'],
                  },
                  {
                    type: 'FDY',
                    denie: [30, 40, 50, 75],
                    filame: [24, 36, 36, 36],
                    luster: ['SD', 'SD', 'SD', 'SD'],
                  },
                ],
              },
            ]}
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
