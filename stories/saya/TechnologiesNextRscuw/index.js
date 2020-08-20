import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import ImageContainer from 'library/saya/ImageContainer';
import GreenNumberSection from 'library/saya/Kenny/GreenNumberSection';


import background_TopSection from '../img/bg49.jpg';
import introduction1 from '../img/bg38.jpg';
import oneTitle1 from '../img/bg39.jpg';
import oneTitle2 from '../img/bg40.jpg';
import circle from '../img/bg41.jpg';
import sevenIcon from '../img/fig4.svg';



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
  .add('TechnologiesNextRscuw',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle="SAYA NEXT Series"
            secondTitle="RSCUW"
            thirdTitle="Cutting Scraps and Overstocks, Addressing the Real Elephant In the Room We seek out the high hanging fruits to capture what really matters."
            backgroundImage={background_TopSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="140px"
            thirdTitleWidth="720px"
          />

          <Introduction
            height="590px"
            backgroundImage={introduction1}
            title="SAYA RSCUW provides a renewal solution for rolls of fabric that don’t make it to the garment stage."
            subtitle="SAYA RSCUW = Recycled Scrap and Cutting Waste"
            description="Seeking to provide solutions to the industrial waste problem shrouding our industry, SAYA RSCUW (Recycled Scrap and Cutting Waste) is the industry’s most advanced mix content recycling project yet."
            secondDescription="The program addresses the garment industry’s largest areas of hidden waste: cutting scrap and overstock fabrics. Historically, cutting scrap (up to 20% waste per yard) and fabric overstock recycling has been difficult and expensive. SAYA RSCUW creates new recycling possibilities for what would typically be discarded."
            fontColor="#ffffff"
            lineBorder="solid 1px #ffffff"
            descriptionWidth="460px"
          />

          <ImageContainer
            style={{
              height: 350,
              backgroundImage: `url(${oneTitle1})`,
              color: '#ffffff',
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'FilsonSoft-Bold',
              marginTop: 35,
              paddingTop: 150,
            }}
          >
            Lorem ipsum dolor sit amet.
          </ImageContainer>

          <GreenNumberSection
            numberUpTitle="about"
            number="20"
            topTile="industrial waste"
            bottomTitle="garment cutting scraps"
            rightTitle="Cutting Scrap"
            description="Fabric cutting scrap is an inevitable part of garment manufacturing that results in up to 20% wastage per yard. In the past most of these scraps end up in landfills or incinerators as there are no commercially effective methods of recycling them. As a leader in the industry, SAYA is committed to finding a solution. Working together with our global network of brands and garment manufacturers worldwide, SAYA is tackling the issue head on."
            height="450px"
            lineWidth="218px"
            numberPaddingTop="20px"
            leftPaddingTop="65px"
            rightPaddingTop="120px"
            leftPaddingRight="70px"
            rightPaddingLeft="70px"
            descriptionPaddingTop="20px"
            backgroundColor="#e3e3e3"
            numberColor="#000000"
            percentColor="#000000"
          />

          <ImageContainer
            style={{
              height: 350,
              backgroundImage: `url(${oneTitle2})`,
              color: '#ffffff',
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'FilsonSoft-Bold',
              marginTop: 35,
              paddingTop: 150,
            }}
          >
            Lorem ipsum dolor sit amet.
          </ImageContainer>


          <GreenNumberSection
            number="34"
            topTile="overstock"
            bottomTitle="annual waste"
            rightTitle="Overstock Fabrics"
            description="Fabric cutting scrap is an inevitable part of Despite good intentions and improved efficiencies in production planning, fast fashion and the textile industry on the whole, production overstock is still a serious and overlooked problem. Overstock accounts for XXX% of our industry’s annual waste. SAYA RSCUW provides a renewal solution for rolls of fabric that don’t make it to the garment stage."
            height="450px"
            lineWidth="218px"
            leftPaddingTop="110px"
            rightPaddingTop="120px"
            leftPaddingRight="72px"
            rightPaddingLeft="72px"
            descriptionPaddingTop="20px"
            backgroundColor="#e3e3e3"
            numberColor="#000000"
            percentColor="#000000"
          />

          <div style={{ display: 'flex' }}>
            <Introduction
              height="505px"
              title="Challenges"
              subtitle="Make it available and affordable"
              description="Removing colors, pigments and finishings from fabrics is a difficult task. Previous technology has been extremely expensive and price prohibitive. SAYA’s team was able to make this commercially available and affordable."
              fontColor="#000000"
              lineBorder="solid 1px #000000"
              descriptionWidth="380px"
            >

            </Introduction>
            <img src={circle}
              style={{
                width: 345,
                height: 345,
                borderRadius: '50%',
                backgroundImage: { circle },
                marginRight: 100,
                marginTop: 80,
              }}
            />
          </div>

          <Introduction
            height="900px"
            backgroundColor="#64703f"
            title="Methodology"
            subtitle="SAYA’s advanced methods"
            description="The complex input stream of sources requires SAYA’s engineering team to innovate new proprietary and advanced methods of sorting, cleaning, mechanical and chemical recycling."
            descriptionWidth="440px"
            fontColor="#ffffff"
            lineBorder="solid 1px #ffffff"
          >
            <div
              style={{
                fontSize: 20,
                color: '#ffffff',
                fontFamily: 'FilsonSoftRegular',
                paddingTop: 100,
              }}
            >
              SAYA’s advanced methods
            </div>
            <img 
            src={sevenIcon}
            style={{
              
              marginTop:45,
            }}
            />
          </Introduction>


        </Layout>
      </div>
    )
  );