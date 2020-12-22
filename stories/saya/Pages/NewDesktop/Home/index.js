import React from 'react';
import { storiesOf } from '@storybook/react';

import HomeTopSection from 'library/saya/bob/HomeTopSection';
import Partner from 'library/saya/bob/Partner';
import Section from 'library/saya/bob/Section';
import Breadcrumbs from 'library/saya/bob/Breadcrumbs';
import PartnerSection from 'library/saya/bob/PartnerSection';
import Layout from '../../../shared/Layout';

import backgroundMacroChanges from '../../../img/bg14.jpg';
import backgroundCleaningUp from '../../../img/bg15.jpg';
import backgroundPartner from '../../../img/bg16.jpg';
import bottle from '../../../img/bottle_w.svg';
import backgroundHomeTopSection from '../../../img/bg78.jpg';
import roundArrowImage from '../../../img/round_arrow.svg';
import scrollArrowImage from '../../../img/scroll arrow.png';
import scrollArrowLeftImage from '../../../img/scroll_left.svg';
import scrollArrowRightImage from '../../../img/scroll_right.svg';
import icon1 from '../../../img/icon15.svg';
import icon2 from '../../../img/icon16.svg';
import icon3 from '../../../img/icon17.svg';
import icon4 from '../../../img/icon18.svg';
import icon5 from '../../../img/icon19.svg';

const Rscuw = () => (
  <span style={{ fontFamily: 'FilsonSoft-Bold' }}>RSCUW</span>
);

const Sayanext = () => (
  <>
    <span style={{ fontFamily: 'FilsonSoft-Bold' }}>SAYA</span>
    <span style={{ fontFamily: 'FilsonSoft-light' }}>NEXT</span>
  </>
);

storiesOf('saya|Pages/NewDesktop', module)
  .add('Home',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <HomeTopSection
            backgroundImage={backgroundHomeTopSection}
            roundArrowImage={roundArrowImage}
            scrollArrowImage={scrollArrowImage}
            scrollArrowLeftImage={scrollArrowLeftImage}
            scrollArrowRightImage={scrollArrowRightImage}
            onClick={() => { console.log('QAQ'); }}
          />
          <Section
            videoId="dIdb9GOEwXA"
            color="#FFFFFF"
            breadCrumbs={
              <Breadcrumbs
                separatorColor="#FFFFFF"
                bread={[
                  { name: <Rscuw />, path: '/' },
                  { name: <Sayanext />, path: '/sayanext' }
                ]}
              />
            }
            title="The industry’s most advanced mixed content recycling project yet."
            subTitle="The SAYA RSCUW Project"
            backgroundImage={backgroundMacroChanges}
            onClick={() => { console.log('read More') }}
          />
          <Section
            color="#FFFFFF"
            breadCrumbs={
              <Breadcrumbs
                bread={[
                  { name: <span style={{ fontFamily: 'FilsonSoft-Bold' }}>PRODUCT</span>, path: '/product' },
                ]}
              />
            }
            title={`Micro fibers.\nMacro changes.`}
            subTitle="Sustainable Fiber Solutions for Every Budget and Design"
            backgroundImage={backgroundCleaningUp}
            onClick={() => { console.log('read More') }}
          />
          <PartnerSection
            breadCrumbs={
              <Breadcrumbs
                color="#000000"
                bread={[
                  { name: <span style={{ fontFamily: 'FilsonSoft-Bold' }}>PARTNER</span>, path: '/partner' },
                ]}
              />
            }
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
            title={'Partners in Sustainability'}
            subTitle="It takes a village to achieve sustainability"
            onClick={() => { console.log('read More') }}
          />
          <Partner
            backgroundImage={backgroundPartner}
            bottleImage={bottle}
          />
        </Layout>
      </div>
    )
  );