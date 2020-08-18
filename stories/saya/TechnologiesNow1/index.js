import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import ImageNumberSection from 'library/saya/Kenny/ImageNumberSection';
import Introduction from 'library/saya/Kenny/Introduction';
import GreenNumberSection from 'library/saya/Kenny/GreenNumberSection';
import TwoIconSection from 'library/saya/Kenny/TwoIconSection';
import GreenIconBottom from 'library/saya/Kenny/GreenIconBottom';
import SeeProduct from 'library/saya/Kenny/SeeProduct';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';
import StageWithIcon from 'library/saya/Kenny/StageWithIcon';

import topSection from '../img/bg1.jpg';
import introduction1 from '../img/bg34.jpg';
import introduction2 from '../img/bg35.jpg';
import introduction3 from '../img/bg37.jpg';
import leftBox from '../img/bg27.jpg';
import midBox from '../img/bg19.jpg';
import rightBox from '../img/bg28.jpg';

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
  .add('TechnologiesNow1',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>

          <TopSection
            firstTitle="TECHNOLOGIES"
            secondTitle="SAYA Now"
            thirdTitle="Backbone of our sustainable textile business"
            backgroundImage={topSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="125px"
          />

          <ImageNumberSection />

          <Introduction
            height="600px"
            backgroundImage={introduction1}
            title="Global Recycling Network"
            subtitle="Transparency and the ability and capacity to scale"
            description="Based in Taiwan, SAYA’s PET bottle recovery and renewal map spans throughout Asia including China, Japan, Philippines, Thailand and Vietnam. In recent years, collection efforts have expanded into regions of the USA and South America. SAYA continues to innovate our manufacturing processes and expand our sources for recycled fiber."
            fontColor="#ffffff"
            lineBorder="solid 1px #ffffff"
            descriptionWidth="460px"
          />

          <GreenNumberSection
            number="50"
            topTile="years"
            bottomTitle="experience"
            rightTitle="Backbone of Sustainable Textile Business"
            description="SAYA has quietly grown into the world’s largest manufacturer of post-consumer recycled performance fiber with recycling networks that repurpose over 75 billion bottles every year. Working with a network of 13 PET recycling facilities worldwide, SAYANow serves as the backbone of our sustainable textile business."
            height="450px"
            lineWidth="220px"
            leftPaddingTop="110px"
            rightPaddingTop="145px"
            leftPaddingRight="80px"
            rightPaddingLeft="80px"
            descriptionPaddingTop="22px"
            percentDisplay="none"
          />

          <Introduction
            height="770px"
            backgroundImage={introduction2}
            title="Not all Recycled Fibers are Created Equal, "
            titleBack="SAYA Just Get More TLC"
            subtitle="Five-stage Filtration and Two-stage Purification"
            description="SAYA continues to perfect the process of renewing water bottles into yarns for multiple uses. Discarded water bottles are renewed through our proprietary, five-stage filtration process which are followed by two stages of purification."
            titleWidth="540px"
            descriptionWidth="940px"
            fontColor="#ffffff"
            lineBorder="solid 1px #ffffff"
          >
            <StageWithIcon />
          </Introduction>

          <TwoIconSection />

          <Introduction
            height="570px"
            backgroundColor="#c6c4c4"
            title="Highest Safety and Performance Standards"
            subtitle="EU REACH (2020) and Oeko Tex 100 standards"
            description="The melting process goes through temperatures over 200C, this removes most potential virus and bacteria that may remain after the recycling process. SAYA’s proprietary filtration process ensures all yarns meet European Union REACH (2020) and Oeko Tex 100 standards for heavy metal and other harmful RSL and residues. "
            titleWidth="475px"
            descriptionWidth="460px"
            fontColor="#000000"
            lineBorder="solid 1px #000000"
          >
            <GreenIconBottom />
          </Introduction>

          <div style={{ marginTop: 35 }}>
            <Introduction
              height="580px"
              backgroundImage={introduction3}
              title="Functional Yarns for Every Challenge"
              subtitle="SAYA of Nan Ya Plastics "
              description="With over 50 years as a market leader in polyester fiber engineering, Nan Ya Plastics now defines their comprehensive selection of recycled performance fibers with the name SAYA. SAYA boasts the most comprehensive selection in performance fibers. We offer smart options including rubber free mechanical stretch, low denier, high microfilament, and colorfast solution dyed fiber just to name a few."
              descriptionWidth="460px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>

          <SeeProduct />

          <TitleLineBox
            height="730px"
            fontColor="#000000"
            boxWidth="820px"
            lineBorder="solid 1px #979797"
          >
            <ImageBoxSmall
              title="SAYA"
              titleBack="GLOBAL"
              subtitle="Lorem ipsum dolor sit amet"
              backgroundImage={leftBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="95px"
            />
            <ImageBoxSmall
              title="SAYA"
              titleBack="COASTAL"
              subtitle="Lorem ipsum dolor sit amet"
              backgroundImage={midBox}
              paddingTop='75px  '
              fontColor="#ffffff"
              marginTop="95px"
            />
            <ImageBoxSmall
              title="SAYA"
              titleBack="USA"
              subtitle="USA-based fiber program"
              backgroundImage={rightBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="95px"
            />
          </TitleLineBox>
        </Layout>
      </div>
    )
  );