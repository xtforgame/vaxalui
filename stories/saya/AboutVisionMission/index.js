import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';

import background_TopSection from '../img/bg72.jpg';
import leftBox from '../img/bg69.jpg';
import midBox from '../img/bg73.jpg';
import rightBox from '../img/bg71.jpg';

import Logo from '../img/mobile/m_logo_w.svg'


storiesOf('saya|Pages/Desktop', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('AboutSayaByNanYa',
    () => (
      <div style={{ width: '100%' }}>
        <Layout
          logo={(
            <img src={Logo} height={18} style={{ paddingLeft: 12 }} />
          )}
        >
          <TopSection
            firstTitle="ABOUT"
            secondTitle="Vision & Mission"
            thirdTitle="A Greater Expectation"
            backgroundImage={background_TopSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="60px"
            thirdTitleWidth="420px"
          />

          <Introduction
            height="540px"
            title="Recover, Renew, Rebuild"
            subtitle="lor sit amet, consectetuer"
            description="We manufacture sustainable fibers from recycled resources to lessen our impacts, grow our partners and better our world."
            secondDescription="Our motto is recover, renew, rebuild and our mission is to bring new life to what was once discarded."
            thirdDescription="We innovate to bring better manufacturing methods, cleaner processes and more sustainable products to market. We don’t shy away from more challenging endeavors as we seek to redefine what’s possible in textile renewal."
            fourthDescription="At Saya, we believe that raising the bar, within the supply chain, elevates us all."
            fontColor="#000000"
            lineBorder="solid 1px #000000"
            descriptionWidth="460px"
          />

          <TitleLineBox
            title="Related Informations"
            height="730px"
            fontColor="#000000"
            boxWidth="820px"
            lineBorder="solid 1px #979797"
            backgroundColor="#e5e5e5"
          >
            <ImageBoxSmall
              title="News"
              backgroundImage={leftBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="150px"

            />
            <ImageBoxSmall
              title="SAYA"
              secondTitle="by Nan Ya"
              backgroundImage={midBox}
              paddingTop='65px'
              fontColor="#000000"
              marginTop="140px"
            />
            <ImageBoxSmall
              title="Medias"
              secondTitle=" & Downloads"
              backgroundImage={rightBox}
              titleWidth="155px"
              paddingTop='50px'
              fontColor="#ffffff"
              marginTop="125px"
            />
          </TitleLineBox>

        </Layout>
      </div>
    )
  );