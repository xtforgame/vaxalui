import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import Features from 'library/saya/Kenny/Features';
import TitleWithContent from 'library/saya/Kenny/TitleWithContent';
import Table from 'library/saya/Rick/Table';

import GreenButton from 'library/saya/Kenny/GreenButton';

import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageContainer from 'library/saya/ImageContainer';

import SayaStretch from '../shared/SmallImageBoxs/SayaStretch';
import Chromuch from '../shared/SmallImageBoxs/Chromuch';
import SayaFresh from '../shared/SmallImageBoxs/SayaFresh';
import SayaMicrofiber from '../shared/SmallImageBoxs/SayaMicrofiber';

import background_TopSection from '../../img/bg85.jpg';
import introduction1 from '../../img/bg78.jpg';
import introduction2 from '../../img/bg87.jpg';
import introduction3 from '../../img/bg88.jpg';

import Logo from '../../img/mobile/m_logo_w.svg'

storiesOf('saya|Pages/Desktop/Products', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Saya365',
    () => (
      <div style={{ width: '100%' }}>
        <Layout
          logo={(
            <img src={Logo} height={18} style={{ paddingLeft: 12 }} />
          )}
        >
          <TopSection
            firstTitle="PRODUCTS"
            secondTitle="SAYA365"
            thirdTitle="Under SAYA Now Technology"
            backgroundImage={background_TopSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="85px"
          />

          <div style={{ marginTop: 35 }}>
            <Introduction
              height={586}
              backgroundImage={introduction1}
              title="Color Dyeing Consistency"
              subtitle="lor sit amet, consectetuer ad"
              description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.'}
              titleWidth={600}
              descriptionWidth="460px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>

          <div style={{ marginTop: 35 }}>
            <Introduction
              height={586}
              backgroundImage={introduction2}
              title="Closest Whiteness Factor"
              subtitle="Lorem ipsum dolor sit amet."
              description={'SAYA boasts industry leading (L*a*b) whiteness rating of under 5 (lower the better). This represents the closest color dyeing vibrancy compared to that of virgin polyester.\n\nEvery single batch of yarn is photospectrum tested for purity and whiteness to ensure the best color reproducibility possible. One shouldn’t compromise color accuracy for sustainability.'}
              titleWidth={600}
              descriptionWidth="460px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>

          <div style={{ marginTop: 35 }}>
            <Introduction
              height={586}
              backgroundImage={introduction3}
              title="Highest Strength and Tenacity "
              subtitle="Lorem ipsum dolor sit amet."
              description={'Intrinsic viscosity (IV) rating is a critical factor in measuring recycled polyester fiber’s performance and physical stability.\n\nSAYA guarantees the performance of its renewed polyester fibers to be on par with virgin petrochemical sources, ensuring the best Grade A yield and strength.'}
              titleWidth={600}
              descriptionWidth="460px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>
          <ImageContainer
            style={{ height: 256, backgroundColor: '#444343' }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                fontFamily: 'FilsonSoftRegular',
                alignItems: 'center',
                justifyContent: 'space-around',
                display: 'flex',

                fontSize: 32,
                color: '#ffffff',
              }}
            >
              Learn more about SAYA Now Technology.
              <GreenButton text="GO"/>
            </div>
          </ImageContainer>

          <div style={{ marginTop: 35 }}>
            <TitleWithContent
              height={900}
              title="SAYA 365 Product Specs"
              titleWidth={600}
              fontColor="#000000"
              lineBorder="solid 1px #000000"
            >
              <Table />
            </TitleWithContent>
          </div>
          <ImageContainer
            style={{ height: 256, backgroundColor: '#444343' }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                fontFamily: 'FilsonSoftRegular',
                alignItems: 'center',
                justifyContent: 'space-around',
                display: 'flex',

                fontSize: 32,
                color: '#ffffff',
              }}
            >
              Learn more about SAYA Now Technology.
            </div>
          </ImageContainer>

          <TitleLineBox
            title="Other SAYA Performance fibers"
            height="730px"
            fontColor="#000000"
            boxWidth={700}
            lineBorder="solid 1px #979797"
            backgroundColor="transparent"
          >
            <Chromuch />
            <SayaStretch />
            <SayaFresh />
            <SayaMicrofiber />
          </TitleLineBox>

        </Layout>
      </div>
    )
  );