import React from 'react';
import { storiesOf } from '@storybook/react';

import HomeTopSection from 'library/saya/Rick/HomeTopSection';
import Section from 'library/saya/Rick/Section';
import PartnerSection from 'library/saya/Rick/PartnerSection';
import Partner from 'library/saya/Rick/Partner';

import MobileLayout from '../../../shared/MobileLayout';

import mobileBg1 from '../../../img/mobile/m_banner01.jpg';
import mobileBg2 from '../../../img/mobile/m_home01.jpg';
import mobileBg3 from '../../../img/mobile/m_home02.jpg';

import roundArrowImage from '../../../img/round_arrow.svg';
import backgroundPartner from '../../../img/mobile/m_home03.jpg';
import bottleImage from '../../../img/mobile/m_home_bottle.svg';

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
  .add('Home',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <HomeTopSection
            backgroundImage={mobileBg1}
            roundArrowImage={roundArrowImage}
          />
          <div style={{ marginTop: 6 }}>
            <Section
              height={700}
              firstTitle="RSCUW / SAYA"
              firstTitleBack="NEXT"
              title="The industry’s most advanced mix content recycling project yet."
              subTitle="The SAYA RSCUW Project"
              backgroundImage={mobileBg2}
            />
          </div>
          <div style={{ marginTop: 6 }}>
            <Section
              height={610}
              firstTitle="PRODUCT"
              title={'Micro\nfibers.\nMacro\nimpact.'}
              subTitle="Sustainable Fiber Solutions for Every Budget and Design"
              backgroundImage={mobileBg3}
            />
          </div>
          <div style={{ marginTop: 6 }}>
            <Section
              height={795}
              color="#000000"
              firstTitle="PARTNERS"
              title={'Partners in\nSustainability'}
              subTitle="It takes a village to achieve sustainability"
              lineColor="#000000"
              buttonPosition="center"
            >
              <PartnerSection
                partner={[
                  [
                    { imgUrl: icon1, url: 'http://google.com' },
                    { imgUrl: icon2, url: 'http://google.com' },
                    { imgUrl: icon3, url: 'http://google.com' },
                    { imgUrl: icon4, url: 'http://google.com' },
                    { imgUrl: icon5, url: 'http://google.com' },
                  ],
                  [
                    { imgUrl: icon5, url: 'http://google.com' },
                    { imgUrl: icon4, url: 'http://google.com' },
                    { imgUrl: icon2, url: 'http://google.com' },
                    { imgUrl: icon3, url: 'http://google.com' },
                    { imgUrl: icon1, url: 'http://google.com' },
                  ],
                  [
                    { imgUrl: icon3, url: 'http://google.com' },
                    { imgUrl: icon1, url: 'http://google.com' },
                    { imgUrl: icon4, url: 'http://google.com' },
                    { imgUrl: icon5, url: 'http://google.com' },
                    { imgUrl: icon2, url: 'http://google.com' },
                  ],
                ]}
              />
            </Section>
          </div>
          <div style={{ marginTop: 6 }}>
            <Partner
              backgroundImage={backgroundPartner}
              bottleImage={bottleImage}
            />
          </div>
        </MobileLayout>
      </div>
    ));
