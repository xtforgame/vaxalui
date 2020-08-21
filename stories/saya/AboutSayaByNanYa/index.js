import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';

import background_TopSection from '../img/bg67.jpg';
import introduction1 from '../img/bg68.jpg';
import leftBox from '../img/bg69.jpg';
import midBox from '../img/bg70.jpg';
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
            secondTitle="SAYA by Nan Ya"
            thirdTitle="Lorem ipsum dolor sit amet  "
            backgroundImage={background_TopSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="60px"
            thirdTitleWidth="420px"
          />

          <div style={{ marginTop: 35 }}>
            <Introduction
              height="590px"
              backgroundImage={introduction1}
              title="Look Beyond the Label and Into the Conscience"
              subtitle="lor sit amet, consectetuer"
              description="SAYA is able to push the boundaries thanks to its parent company Nan Ya Plastics, a branch of the Formosa Plastics Group, a family business founded by two brothers in 1954. More than 60 years later, Formosa has become one of the largest privately-held companies in Taiwan, and Forbes’ 1000 Largest Public Companies in the world."
              secondDescription="As a global leader in performance fibers, Nan Ya has committed to reliably deliver quality, innovative products through a transparent supply chain. By fostering close partnerships, creating responsible solutions and improving the environmental performance of all their products, Nan Ya continues to innovate to stay ahead of fast-moving market trends and raise the bar of the entire industry."
              titleWidth="540px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
              descriptionWidth="460px"
            />
          </div>

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
              title="Vison"
              secondTitle="& Mission"
              backgroundImage={midBox}
              titleWidth="105px"
              paddingTop='50px'
              fontColor="#000000"
              marginTop="125px"
            />
            <ImageBoxSmall
              title="Medias"
              secondTitle="& Downloads"
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