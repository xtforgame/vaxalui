import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/Rick/TopSection';
import CollapseSection from 'library/saya/Rick/CollapseSection';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';
import PartnerSection from 'library/saya/Rick/PartnerSection';
import ImageContainer from 'library/saya/ImageContainer';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection1 from '../../../img/mobile/m_banner14.jpg';
import Background from '../../../img/mobile/m_bg13.jpg';

import icon1 from '../../../img/mobile/icon15.svg';
import icon2 from '../../../img/mobile/icon16.svg';
import icon3 from '../../../img/mobile/icon17.svg';
import icon4 from '../../../img/mobile/icon18.svg';
import icon5 from '../../../img/mobile/icon19.svg';
import icon6 from '../../../img/mobile/icon20.svg';
import icon7 from '../../../img/mobile/icon21.svg';
import icon8 from '../../../img/mobile/icon22.svg';
import icon9 from '../../../img/mobile/icon23.svg';
import icon10 from '../../../img/mobile/icon24.svg';
import icon11 from '../../../img/mobile/icon25.svg';
import icon12 from '../../../img/mobile/icon26.svg';
import icon13 from '../../../img/mobile/icon27.svg';
import icon14 from '../../../img/mobile/icon28.svg';
import icon15 from '../../../img/mobile/icon29.svg';
import icon16 from '../../../img/mobile/icon30.svg';
import icon17 from '../../../img/mobile/icon31.svg';
import icon18 from '../../../img/mobile/icon32.svg';
import icon19 from '../../../img/mobile/icon33.svg';
import icon20 from '../../../img/mobile/icon34.svg';
import icon21 from '../../../img/mobile/icon35.svg';
import icon22 from '../../../img/mobile/icon36.svg';
import icon23 from '../../../img/mobile/icon37.svg';


storiesOf('saya|Pages/NewMobile', module)
  .add('Manufacturers',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            color="#000000"
            lineColor="#000000"
            height={350}
            firstTitle="MANUFACTURERS"
            title="One Professional to Another"
            backgroundImage={background_TopSection1}
            titleFontFamily="light"
            paddingTop={70}
            titlePaddingTop={40}
          />

          <div style={{ marginTop: 6 }}>
            <CollapseSection
              height="296px"
              title="We Know Your Manufacturing Needs"
              subtitle="The Best-In-Class Quality Yield"
              // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
              description={`SAYA supplies the best-in-class performance fibers for top fabric manufacturers around the world. SAYA recycled fibers retain the best strength, dyeability, and overall A Grade yield.

Whether you need better fabric tenacity, color matching or simply hassle-free transition to recycled content, we’ve got your back.`}
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <ImageContainer >
              <pre style={{ backgroundSize: 'cover', width: '100%', height: 175, color: '#ffffff', textAlign: 'center', fontSize: 24, fontWeight: 'bold', fontFamily: 'FilsonSoft-Bold', backgroundImage: `url(${Background})`, paddingTop: 56, margin: 0 }}>
                {'Industry Professionals\nRunning on SAYA'}
              </pre>
            </ImageContainer>
          </div>

          <div style={{ backgroundColor: "#444343", paddingTop: 40, paddingBottom: 72, }}>
            <PartnerSection
              partner={[
                [icon1, icon2, icon3, icon4],
                [icon5, icon6, icon7, icon8],
                [icon9, icon10, icon11, icon12],
                [icon13, icon14, icon15, icon16],
                [icon17, icon18, icon19, icon20],
                [icon21, icon22, icon23, null]]
              }
            />
          </div>

          <TechnologyProjects
            height={594}
            backgroundColor="#ffffff"
            title="Explore More"
            list={[
              {
                title: "Design Responsibly with Confidence",
                buttonText: "Learn More",
                disabled: false,
                type: <span>BRANDS</span>,
              },
              {
                title: "Certified Peace of Mind",
                buttonText: "Learn More",
                disabled: false,
                type: <span>CERTIFICATIONS</span>,
              },
            ]}
          />
        </MobileLayout>
      </div>
    )
  );
