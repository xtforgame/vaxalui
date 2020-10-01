import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import AboutNews from 'library/saya/Rick/AboutNews';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection from '../../../img/mobile/m_banner11.jpg';


import background_Card1 from '../../../img/mobile/m_pic1.jpg';
import background_Card2 from '../../../img/mobile/m_pic2.jpg';
import background_Card3 from '../../../img/mobile/m_pic3.jpg';
import background_Card4 from '../../../img/mobile/m_pic4.jpg';


storiesOf('saya|Pages/NewMobile', module)
  .add('Module4',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={350}
            firstTitle="ABOUT"
            title="News"
            backgroundImage={background_TopSection}
            titleFontFamily="light"
          />

          <div style={{ marginTop: 6, marginBottom: 20 }}>
            <AboutNews
              backgroundColor="#FFFFFF"
              title={
                <>
                  <span style={{ fontSize: 12, fontFamily: 'FilsonSoftRegular', fontWeight: 300 }}>About /</span>
                  <span style={{ fontSize: 12, fontFamily: 'FilsonSoft-Bold' }}>
                    News
                </span>
                </>
              }
              item={[
                {
                  height: 310,
                  width: 305,
                  title: 'What is Post-consumer Recycled Polyester',
                  description: 'Recycled polyester (rPET) is obtained by melting down existing plastic and re-spinning it into new polyester fiber.',
                  image: background_Card1,
                  onClick: () => { }
                },
                {
                  height: 310,
                  width: 305,
                  title: 'Recycled vs. Recyclable',
                  description: 'Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash...',
                  image: background_Card2,
                  onClick: () => { }
                },
                {
                  height: 310,
                  width: 305,
                  title: 'Mechanical Recycling',
                  description: 'Mechanical recycling transforms materials into "new" secondary raw materials without changing the base...',
                  image: background_Card3,
                  onClick: () => { }
                },
                {
                  height: 310,
                  width: 305,
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
              title="More About SAYA"
              backgroundColor="#e3e3e3"
              list={[
                {
                  title: "Renewed Fiber is the Name of the Game",
                  buttonText: "Learn More",
                  disabled: false,
                  type: <span>SAYA</span>,
                },
                {
                  title: "MEDIA & DOWNLOADS",
                  buttonText: "Learn More",
                  disabled: false,
                  type: '',
                },
              ]}
            />
          </div>
        </MobileLayout>
      </div>
    )
  );