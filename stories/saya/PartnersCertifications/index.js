import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBox from 'library/saya/Kenny/ImageBox';

import background_TopSection from '../img/bg57.jpg';
import leftBox from '../img/bg56.jpg';
import rightBox from '../img/bg52.jpg';

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
  .add('PartnersCertifications',
    () => (
      <div style={{ width: '100%' }}>
        <Layout
          logo={(
            <img src={Logo} height={18} style={{ paddingLeft: 12 }} />
          )}
        >



        <TopSection
          firstTitle="PARTNERS"
          secondTitle="Certifications"
          thirdTitle="3rd Party Certified Peace of Mind"
          backgroundImage={background_TopSection}
          fontColor="#ffffff"
          lineBorder="1px solid #ffffff"
          firstLineWidth="85px"
        />

        {/* <IconBox
          height="700px"
          backgroundColor='#c9c7c7'
          icon1={icon1} icon11={icon1}
          icon2={icon2} icon6={icon2} icon9={icon2}
          icon3={icon3} icon8={icon3}
          icon4={icon4} icon7={icon4} icon10={icon4}
          icon5={icon5}
        /> */}

        <TitleLineBox
          title="Related Informations"
          height="785px"
          fontColor="#000000"
          boxWidth="780px"
          lineBorder="solid 1px #979797"
        >
          <ImageBox
            title="Textile Partners"
            backgroundImage={leftBox}
            paddingTop="105px"
            fontColor="#ffffff"
          />
          <ImageBox
            title="Brand Partners"
            backgroundImage={rightBox}
            paddingTop="105px"
            fontColor="#ffffff"
          />
        </TitleLineBox>

      </Layout>
       </div>
    )
  );