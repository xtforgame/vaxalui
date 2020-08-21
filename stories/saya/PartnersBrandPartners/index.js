import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import ImageContainer from 'library/saya/ImageContainer';


import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBox from 'library/saya/Kenny/ImageBox';

import background_TopSection from '../img/bg54.jpg';
import introduction1 from '../img/bg38.jpg';
import leftBox from '../img/bg56.jpg';
import rightBox from '../img/bg53.jpg';

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
  .add('PartnersBrandPartners',
    () => (
      <div style={{ width: '100%' }}>
        <Layout
          logo={(
            <img src={Logo} height={18} style={{ paddingLeft: 12 }} />
          )}
        >



          <TopSection
            firstTitle="PARTNERS"
            secondTitle="Brand Partners"
            thirdTitle="Design with Peace of Mind, and Good Conscience"
            backgroundImage={background_TopSection}
            fontColor="#ffffff"
            lineBorder="1px solid #ffffff"
            firstLineWidth="85px"
          />


          <div style={{ marginTop: 35, }}>
            <Introduction
              height="470px"
              backgroundImage={introduction1}
              title="Design with Peace of Mind,and Good Conscience"
              subtitle="Building Blocks Behind Every Great Product"
              description="Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. "
              titleWidth="545px"
              descriptionWidth="460px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>

          <ImageContainer
            style={{
              height: 330,
              backgroundColor: ' #c0c823',
              color: '#000000',
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'FilsonSoft-Bold',
              marginTop: 35,
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            Industry Professionals<br />Using SAYA
          </ImageContainer>


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
              title="Certifications"
              backgroundImage={rightBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />
          </TitleLineBox>

        </Layout>
      </div>
    )
  );