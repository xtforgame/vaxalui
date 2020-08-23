import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import ImageNumberBox from 'library/saya/Rick/ImageNumberBox';
import Introduction from 'library/saya/Rick/Introduction';
import ImageContainer from 'library/saya/ImageContainer';
import GreenNumberSection from 'library/saya/Rick/GreenNumberSection';
import StageWithIcon from 'library/saya/Rick/StageWithIcon';
import SubtitleContent from 'library/saya/SubtitleContent';
import GreenButton from 'library/saya/Rick/GreenButton';


import MobileBg1 from '../img/mobile/m_bg1.jpg'
import MobileBg2 from '../img/mobile/m_bg11.jpg'
import MobileBg3 from '../img/mobile/m_bg12.jpg'
import MobileBg4 from '../img/mobile/m_bg13.jpg'
import MobileBg5 from '../img/mobile/m_bg14.jpg'


import numberBackground1 from '../img/mobile/m_bg9.jpg'
import numberBackground2 from '../img/mobile/m_bg10.jpg'
import icon1 from '../img/mobile/m_fig1.svg'
import icon2 from '../img/mobile/m_fig2.svg'
import icon3 from '../img/mobile/m_fig3.svg'
import icon4 from '../img/mobile/m_icon1.svg'



import Boxes from 'library/saya/Rick/Boxes';
import ImageBox from 'library/saya/Rick/ImageBox';
import TwoCircleSection from 'library/saya/Rick/TwoCircleSection';

import MobileLayout from '../shared/MobileLayout';

import LeftBox from '../img/bg3.jpg';
import RightBox from '../img/bg4.jpg';

import TopLeftBox from '../img/bg5.jpg';
import TopRightBox from '../img/bg6.jpg';
import BottomLeftBox from '../img/bg7.jpg';
import BottomRightBox from '../img/bg8.jpg';


import NextCircle from '../img/mobile/m_now_next_circle.png'

storiesOf('saya|Pages/Mobile', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('MobileTechnologiesNow',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="TECHNOLOGIES"
            secondTitle={'SAYA'}
            secondTitleBack={'NOW'}
            thirdTitle={'Backbone of our\nsustainable textile business'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={100}
            secondLineMarginTop={138}
          />

          <ImageContainer
            style={{
              height: 675,
              justifyContent: 'space-between',
              paddingTop: 65,
              paddingBottom: 65,
            }}
          >
            <ImageNumberBox
              number="13"
              topTile="PET recycling facilities"
              bottomTitle="worldwide"
              backgroundImage={numberBackground1}
            />
            <ImageNumberBox
              number="75"
              topTile="billion bottles "
              bottomTitle="every year"
              backgroundImage={numberBackground2}
            />
          </ImageContainer>

          <Introduction
            height={805}
            title={'Global\nRecycling\nNetwork'}
            subtitle={'Transparency and the ability and\ncapacity to scale'}
            content={`Based in Taiwan, SAYA’s PET bottle recovery\nand renewal map spans throughout Asia\n qincluding China, Japan, Philippines, Thailand\nand Vietnam. In recent years, collection\nefforts have expanded into regions of the\nUSA and South America. SAYA continues to\ninnovate our manufacturing processes and\nexpand our sources for recycled fiber.`}
            backgroundImage={MobileBg2}
            color="#ffffff"
            lineColor="#ffffff"
          />


          <GreenNumberSection
            marginTop={80}
            number="50"
            topTile="years"
            bottomTitle="experience"
            height={633}
            percentDisplay="none"
            subtitle={`Transparency and the ability and\ncapacity to scale`}
            content={`Based in Taiwan, SAYA’s PET bottle recovery\nand renewal map spans throughout Asia\n qincluding China, Japan, Philippines, Thailand\nand Vietnam. In recent years, collection\nefforts have expanded into regions of the\nUSA and South America. SAYA continues to\ninnovate our manufacturing processes and\nexpand our sources for recycled fiber.`}
          />

          <Introduction
            height={575}
            title={'Not all Recycled\nFibers are Created\nEqual, SAYA Just\nGet More TLC.'}
            subtitle={'Five-stage Filtration and Two-\nstage Purification'}
            content={`SAYA continues to perfect the process of\nrenewing water bottles into yarns for multiple\nuses. Discarded water bottles are renewed\nthrough our proprietary, five-stage filtration\nprocess which are followed by two stages of\npurification. `}
            backgroundImage={MobileBg3}
            color="#ffffff"
            lineColor="#ffffff"
          />

          <StageWithIcon
            content={`5 Stage\nFiltration`}
            icon={icon1}
            backgroundColor="#474747"
          />
          <StageWithIcon
            content={`2 Stage\nPurification`}
            icon={icon2}
            backgroundColor="#64703f"
          />


          <SubtitleContent
            height={575}
            backgroundImage={MobileBg4}
            fontColor="#ffffff"
            subtitle={'Enhanced Process'}
            content={`The resulting flakes are then transported to\nin-house facilities where they are batch-\noptimized to control color and tenacity and\ntransformed into pellets ready to be\nextruded into recycled yarns designated for a\nspecific end-use.`}
          >
            <img src={icon3} style={{ width: '100%', marginTop: 96, }} />
          </SubtitleContent>

          <Introduction
            height={686}
            title={'Highest Safety and\nPerformance\nStandards'}
            subtitle={'EU REACH (2020) and Oeko Tex\n100 standards'}
            content={`The melting process goes through\ntemperatures over 200C, this removes most\npotential virus and bacteria that may remain\nfter the recycling process. SAYA’s\nproprietary filtration process ensures all yarns\nmeet European Union REACH (2020) and\nOeko Tex 100 standards for heavy metal and\nother harmful RSL and residues. `}
            backgroundColor="#d8d8d8"
            color="#000000"
            lineColor="#000000"
          >
            <img src={icon4} style={{ width: '100%', marginTop: 40 }} />
          </Introduction>

          <Introduction
            height={575}
            title={'Functional Yarns\nfor Every\nChallenge'}
            subtitle={'SAYA of Nan Ya Plastics '}
            content={`With over 50 years as a market leader in\npolyester fiber engineering, Nan Ya Plastics\nnow defines their comprehensive selection of\nrecycled performance fibers with the name\nSAYA. SAYA boasts the most comprehensive\nselection in performance fibers. We offer\nsmart options including rubber free\nmechanical stretch, low denier, high\nmicrofilament, and colorfast solution dyed\nfiber just to name a few. `}
            backgroundImage={MobileBg5}
            color="#ffffff"
            lineColor="#ffffff"
          />

          <ImageContainer
            style={{
              height: 378,
              backgroundColor: '#333333',
              fontSize: 27,
              fontWeight: 'bold',
              fontFamily: 'FilsonSoft-Bold',
              color: '#ffffff',
              textAlign: 'center',
              paddingTop: 53,
            }}
          >
            <pre>{`See our Products\nSection for more\ndetails on yarn\nselection.`} </pre>
            <GreenButton
              marginTop={0}
              text="Learn More"
            />
          </ImageContainer>
        </MobileLayout>
      </div>
    )
  );