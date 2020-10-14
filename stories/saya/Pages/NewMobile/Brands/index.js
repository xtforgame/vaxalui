import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/Rick/TopSection';
import CollapseSection from 'library/saya/Rick/CollapseSection';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';
import PartnerSection from 'library/saya/Rick/PartnerSection';
import ImageContainer from 'library/saya/ImageContainer';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection1 from '../../../img/mobile/m_banner15.jpg';
import Background from '../../../img/mobile/m_bg14.jpg';

import icon1 from '../../../img/mobile/icon1.svg';
import icon2 from '../../../img/mobile/icon2.svg';
import icon3 from '../../../img/mobile/icon3.svg';
import icon4 from '../../../img/mobile/icon4.svg';
import icon5 from '../../../img/mobile/icon5.svg';
import icon6 from '../../../img/mobile/icon6.svg';
import icon7 from '../../../img/mobile/icon7.svg';
import icon8 from '../../../img/mobile/icon8.svg';
import icon9 from '../../../img/mobile/icon9.svg';
import icon10 from '../../../img/mobile/icon10.svg';
import icon11 from '../../../img/mobile/icon11.svg';
import icon12 from '../../../img/mobile/icon12.svg';
import icon13 from '../../../img/mobile/icon13.svg';
import icon14 from '../../../img/mobile/icon14.svg';


storiesOf('saya|Pages/NewMobile', module)
  .add('Brands',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={350}
            firstTitle="BRANDS"
            title="Design Responsibly with Confidence"
            backgroundImage={background_TopSection1}
            titleFontFamily="light"
            paddingTop={45}
            titlePaddingTop={40}
          />

          <div style={{ marginTop: 6 }}>
            <CollapseSection
              height="335px"
              title="Develop with Confidence,and Good Conscience"
              subtitle="Building Blocks Behind Every Great Product"
              // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
              description={`Reliability and performance are the fundamentals of designing and building outstanding gear. SAYA has been making functional fibers for the past 50 years and now they are available sustainably. Leading brands of the world count on SAYA’s innovation, dependability, and quality. Join us and take advantage of the world’s largest renewing network built for you.`}
              backgroundColor="#e3e3e3"
              color="#000000"
              buttonColor="#64703f"
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <ImageContainer >
              <div style={{ backgroundSize: 'cover', width: '100%', height: 175, color: '#ffffff', textAlign: 'center', fontSize: 24, fontFamily: 'FilsonSoft-Bold', backgroundImage: `url(${Background})`, paddingTop: 56, margin: 0 }}>
                Brands Running on SAYA
              </div>
            </ImageContainer>
          </div>

          <div style={{ backgroundColor: "#c8c6c6", paddingTop: 40, paddingBottom: 72, }}>
            <PartnerSection
              borderColor="#858585"
              partner={[
                [icon1, icon2, icon3, icon4],
                [icon5, icon6, icon7, icon8],
                [icon9, icon10, icon11, icon12],
                [icon13, icon14, null, null]]
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
