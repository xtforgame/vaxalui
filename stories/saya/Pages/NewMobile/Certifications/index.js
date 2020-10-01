import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/Rick/TopSection';
import CollapseSection from 'library/saya/Rick/CollapseSection';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';
import PartnerSection from 'library/saya/Rick/PartnerSection';
import ImageContainer from 'library/saya/ImageContainer';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection1 from '../../../img/mobile/m_banner16.jpg';

import icon1 from '../../../img/mobile/icon38.svg';
import icon2 from '../../../img/mobile/icon39.svg';
import icon3 from '../../../img/mobile/icon40.svg';
import icon4 from '../../../img/mobile/icon41.svg';
import icon5 from '../../../img/mobile/icon42.svg';
import icon6 from '../../../img/mobile/icon43.svg';
import icon7 from '../../../img/mobile/icon44.svg';


storiesOf('saya|Pages/NewMobile', module)
  .add('Certifications',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={350}
            firstTitle="CERTIFICATIONS"
            title={'Certified Peace of\nMind'}
            backgroundImage={background_TopSection1}
            titleFontFamily="light"
            paddingTop={70}
            titlePaddingTop={40}
          />

          <div style={{ backgroundColor: "#e3e3e3", paddingTop: 40, paddingBottom: 72, }}>
            <PartnerSection
              borderColor="#c8c6c6"
              partner={[
                [icon1, icon2, icon3, icon4],
                [icon5, icon6, icon7, null]]
              }
            />
          </div>

          <TechnologyProjects
            height={594}
            backgroundColor="#ffffff"
            title="Explore More"
            list={[
              {
                title: "One Professional to Another",
                buttonText: "Learn More",
                disabled: false,
                type: <span>MANUFACTURERS</span>,
              },
              {
                title: "Design Responsibly with Confidence",
                buttonText: "Learn More",
                disabled: false,
                type: <span>BRANDS</span>,
              },
            ]}
          />
        </MobileLayout>
      </div>
    )
  );
