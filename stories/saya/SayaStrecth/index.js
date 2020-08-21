import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import Features from 'library/saya/Kenny/Features';
import TitleWithContent from 'library/saya/Kenny/TitleWithContent';
import Table from 'library/saya/Rick/Table';
import ImageContainer from 'library/saya/ImageContainer';


import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';

import background_TopSection from '../img/bg20.jpg';
import introduction1 from '../img/bg78.jpg';
import material from '../img/bg21.jpg';
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
  .add('SayaStrecth',
    () => (
      <div style={{ width: '100%' }}>
        <Layout
          logo={(
            <img src={Logo} height={18} style={{ paddingLeft: 12 }} />
          )}
        >
          <TopSection
            firstTitle="SAYA Performance Fiber"
            secondTitle="SAYASTRETCH"
            thirdTitle="Stretch with Good Conscious"
            backgroundImage={background_TopSection}
            fontColor="#ffffff"
            lineBorder="1px solid #ffffff"
            firstLineWidth="85px"
          />

          <Features
            height={380}
            title="Features"
            description={'100% recycled content .\n100% SAYA Recyclable.\nMore chlorine and chemical resistant than Spandex.'}
            titleWidth="545px"
            descriptionWidth="460px"
            fontColor="#000000"
            lineBorder="solid 1px #000000"
          />

          <div style={{ marginTop: 35 }}>
            <Introduction
              height={586}
              backgroundImage={introduction1}
              title="Lor sit amet, consectetuer ad"
              subtitle="lor sit amet, consectetuer ad"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore."
              titleWidth={600}
              descriptionWidth="460px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>

          <div style={{ marginTop: 35 }}>
            <TitleWithContent
              height={586}
              backgroundImage={material}
              title="Lor sit amet, consectetuer ad"
              titleWidth={600}
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>


          <div style={{ marginTop: 35 }}>
            <TitleWithContent
              height={900}
              title="Spec"
              titleWidth={600}
              fontColor="#000000"
              lineBorder="solid 1px #000000"
            >
              <Table />
            </TitleWithContent>
          </div>

          <TitleLineBox
            title="Other SAYA Performance fibers"
            height="730px"
            fontColor="#000000"
            boxWidth="820px"
            lineBorder="solid 1px #979797"
            backgroundColor="transparent"
          >
            <ImageBoxSmall
              title="CHROMUCU"
              secondTitle="Solution Dyed"
              subtitle={'Color without\nCompromise.'}
              backgroundImage={leftBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="150px"

            />
            <ImageBoxSmall
              title="SAYAFRESH"
              subtitle={'Lorem ipsum\ndolor sit amet'}
              backgroundImage={midBox}
              titleWidth="105px"
              paddingTop='50px'
              fontColor="#000000"
              marginTop="125px"
            />
            <ImageBoxSmall
              title="SAYASTRETCH"
              backgroundImage={rightBox}
              subtitle={'Stretch with\na Good Conscious'}
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