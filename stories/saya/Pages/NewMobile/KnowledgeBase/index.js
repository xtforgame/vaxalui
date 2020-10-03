import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import AboutNews from 'library/saya/Rick/AboutNews';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection from '../../../img/mobile/m_banner04.jpg';


import background_Card1 from '../../../img/mobile/m_pic1.jpg';
import background_Card2 from '../../../img/mobile/m_pic2.jpg';
import background_Card3 from '../../../img/mobile/m_pic3.jpg';
import background_Card4 from '../../../img/mobile/m_pic4.jpg';


storiesOf('saya|Pages/NewMobile', module)
  .add('KnowledgeBase',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={350}
            firstTitle="KNOWLEDGE BASE"
            title="Sustainable Innovations"
            backgroundImage={background_TopSection}
            titleFontFamily="light"
            paddingTop={70}
            titlePaddingTop={43}
            titleFontSize={50}
          />

          <div style={{ marginTop: 6, marginBottom: 20 }}>
            <AboutNews
              backgroundColor="#FFFFFF"
              title={
                <>
                  <span style={{ fontSize: 12, fontFamily: 'FilsonSoftRegular', fontWeight: 300 }}>Technology /</span>
                  <span style={{ fontSize: 12, fontFamily: 'FilsonSoft-Bold' }}>Knowledge Base</span>
                </>
              }
              item={[
                {
                  height: 305,
                  width: 310,
                  title: 'What is Post-consumer Recycled Polyester',
                  description: 'Recycled polyester (rPET) is obtained by melting down existing plastic and re-spinning it into new polyester fiber.',
                  image: background_Card1,
                  onClick: () => { }
                },
                {
                  height: 305,
                  width: 310,
                  title: 'Recycled vs. Recyclable',
                  description: 'Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash...',
                  image: background_Card2,
                  onClick: () => { }
                },
                {
                  height: 305,
                  width: 310,
                  title: 'Mechanical Recycling',
                  description: 'Mechanical recycling transforms materials into "new" secondary raw materials without changing the base...',
                  image: background_Card3,
                  onClick: () => { }
                },
                {
                  height: 305,
                  width: 310,
                  title: 'Chemical Recycling',
                  description: 'Chemical recycling, also called advanced recycling,  is taking  plastic waste  and reducing it back to its...',
                  image: background_Card4,
                  onClick: () => { }
                }
              ]}
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <TechnologyProjects
              height={806}
              title="Explore More"
              backgroundColor="#e3e3e3"
              list={[
                {
                  title: "Upgrade Your Bottle Renewal Technology",
                  buttonText: "Learn More",
                  disabled: false,
                  type: <span>BOTTLES</span>,
                },
                {
                  title: "Cutting Scraps and Overstocks",
                  buttonText: "Learn More",
                  disabled: false,
                  type: <span>RSCUW / SAYA</span>,
                  typeBack: <span>NEXT</span>
                },
                {
                  title: "Used Garment to Fiber Solution",
                  buttonText: "Coming Soon",
                  disabled: true,
                  type: <span>GARMA / SAYA</span>,
                  typeBack: <span>NEXT</span>
                },
              ]}
            />
          </div>
        </MobileLayout>
      </div>
    )
  );