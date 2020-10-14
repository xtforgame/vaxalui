import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBox from 'library/saya/Kenny/ImageBox';
import ImageContainer from 'library/saya/ImageContainer';
import GreenNumberSection from 'library/saya/Kenny/GreenNumberSection';
import TransparentBlock from 'library/saya/Kenny/TransparentBlock';

import Layout from '../../shared/Layout';

import background_TopSection from '../../img/bg49.jpg';

import introduction1 from '../../img/bg38.jpg';
import introduction2 from '../../img/bg39.jpg';
import introduction3 from '../../img/bg40.jpg';
import introduction4 from '../../img/bg42.jpg';
import introduction5 from '../../img/bg43.jpg';

import circle from '../../img/bg41.jpg';
import sevenIcons from '../../img/fig4.svg';
import leftBox from '../../img/bg44.jpg';
import rightBox from '../../img/bg45.jpg';

storiesOf('saya|Pages/Desktop/Technologies/Next', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Rscuw',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle="SAYA NEXT Series"
            secondTitle="RSCUW"
            thirdTitle={'Cutting Scraps and Overstocks, Addressing the Real Elephant In the Room\nWe seek out the high hanging fruits to capture what really matters.'}
            backgroundImage={background_TopSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="140px"
          />

          <div style={{ marginTop: 35 }}>
            <Introduction
              height={600}
              backgroundImage={introduction1}
              title={'SAYA RSCUW provides a renewal solution\nfor rolls of fabric that don’t make it to \nthe garment stage.'}
              subtitle="SAYA RSCUW = Recycled Scrap and Cutting Waste"
              description={'Seeking to provide solutions to the industrial waste problem shrouding our industry, SAYA RSCUW (Recycled Scrap and Cutting Waste) is the industry’s most advanced mix content recycling project yet.\n\nThe program addresses the garment industry’s largest areas of hidden waste: cutting scrap and overstock fabrics. Historically, cutting scrap (up to 20% waste per yard) and fabric overstock recycling has been difficult and expensive. SAYA RSCUW creates new recycling possibilities for what would typically be discarded.'}
              fontColor="#ffffff"
              titleWidth="100%"
              lineBorder="solid 1px #ffffff"
              descriptionWidth="460px"
            />
          </div>
          <div style={{ marginTop: 35, backgroundColor: '#e3e3e3' }}>
            <ImageContainer
              image={introduction2}
              style={{ height: 350, backgroundColor: '#444343' }}
            >
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  fontFamily: 'FilsonSoft-Bold',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  display: 'flex',

                  fontSize: 40,
                  color: '#ffffff',
                }}
              >
                Lorem ipsum dolor sit amet.
              </div>
            </ImageContainer>
            <GreenNumberSection
              number="20"
              topTile="industrial waste"
              bottomTitle="garment cutting scraps"
              rightTitle="Cutting Scrap"
              description="Fabric cutting scrap is an inevitable part of garment manufacturing that results in up to 20% wastage per yard. In the past most of these scraps end up in landfills or incinerators as there are no commercially effective methods of recycling them. As a leader in the industry, SAYA is committed to finding a solution. Working together with our global network of brands and garment manufacturers worldwide, SAYA is tackling the issue head on."
              height="560px"
              lineWidth="250px"
              leftPaddingTop="165px"
              rightPaddingTop="180px"
              leftPaddingRight="65px"
              rightPaddingLeft="65px"
              numberColor="#000000"
              percentColor="#000000"
            />
          </div>
          <div style={{ marginTop: 35, backgroundColor: '#e3e3e3' }}>
            <ImageContainer
              image={introduction3}
              style={{ height: 350, backgroundColor: '#444343' }}
            >
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  fontFamily: 'FilsonSoft-Bold',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  display: 'flex',

                  fontSize: 40,
                  color: '#ffffff',
                }}
              >
                Lorem ipsum dolor sit amet.
              </div>
            </ImageContainer>

            <GreenNumberSection
              number="34"
              topTile="overstock"
              bottomTitle="annual waste"
              rightTitle="Overstock Fabrics"
              description="Fabric cutting scrap is an inevitable part of Despite good intentions and improved efficiencies in production planning, fast fashion and the textile industry on the whole, production overstock is still a serious and overlooked problem. Overstock accounts for XXX% of our industry’s annual waste. SAYA RSCUW provides a renewal solution for rolls of fabric that don’t make it to the garment stage."
              height="560px"
              lineWidth="250px"
              leftPaddingTop="165px"
              rightPaddingTop="180px"
              leftPaddingRight="65px"
              rightPaddingLeft="65px"
              numberColor="#000000"
              percentColor="#000000"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', }}>
            <Introduction
              height="505px"
              title="Challenges"
              subtitle="Make it available and affordable"
              description="Removing colors, pigments and finishings from fabrics is a difficult task. Previous technology has been extremely expensive and price prohibitive. SAYA’s team was able to make this commercially available and affordable."
              descriptionWidth="380px"
              fontColor="#000000"
              lineBorder="solid 1px #000000"
              titlMarginTop="40px"
            />
            <img
              src={circle}
              style={{
                width: 345,
                height: 345,
                borderRadius: '50%',
                marginTop: 80,
                marginRight: 100,
              }}
            />
          </div>

          <Introduction
            height="900px"
            backgroundColor="#64703f"
            title="Methodology"
            subtitle="SAYA’s advanced methods"
            description="The complex input stream of sources requires SAYA’s engineering team to innovate new proprietary and advanced methods of sorting, cleaning, mechanical and chemical recycling."
            descriptionWidth="460px"
            fontColor="#ffffff"
            lineBorder="solid 1px #ffffff"
            backDescriptionDisplay="none"

          >
            <div
              style={{
                fontSize: 20,
                fontFamily: 'FilsonSoftRegular',
                paddingTop: 100,
              }}
            >
              SAYA’s advanced methods
            </div>
            <img
              src={sevenIcons}
              style={{
                width: '100%',
                height: 330,
                marginTop: 45,
              }}
            />
          </Introduction>

          <Introduction
            height="585px"
            backgroundImage={introduction4}
            title="Where we are?"
            subtitle="Recruiting like-minded brands and garment manufacturers"
            description="SAYA is working on pilot projects with key brand partners on recovering and recycling cutting scrap from their garment factories."
            descriptionWidth="780px"
            fontColor="#ffffff"
            lineBorder="solid 1px #ffffff"
            backDescriptionDisplay="none"
          >
            <TransparentBlock
              leftDescription="Right now we are limited to 100% Polyester fabric cutting scraps without coating not finishing, including water repellent."
              rightDescription="SAYA RSCUW Fibers consist of 3 types of recycled components. Garment cutting scrap, overstock fabric, waste yarn, and post-consumer PET bottles. Post industrial wastes make up a minimum of 15%, and post consumer bottles about 80-85%. "
              marginTop="35px"
            />
          </Introduction>

          <div style={{ marginTop: 35 }}>
            <Introduction
              height="585px"
              backgroundImage={introduction5}
              title="What’s Next?"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
              backDescriptionDisplay="none"
            >
              <TransparentBlock
                leftDescription="We aim to start recovering and recycling uncoated 100% Polyester fabrics with WR or DWR finishing by 1H 2021."
                rightDescription="Removing colors and pigments We aim to continuously increase the percentage of garment cutting scrap and overstock fabrics."
                marginTop="125px"
              />
            </Introduction>
          </div>

          
          <TitleLineBox
            title="SAYA NOW Serial Projects"
            height="785px"
            fontColor="#000000"
            boxWidth={780}
            lineBorder="solid 1px #979797"
          >
            <ImageBox
              title="SAYA"
              titleBack="GLOBAL"
              subtitle="lor sit amet, consectetuer ad"
              backgroundImage={leftBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />
            <ImageBox
              title="SAYA"
              titleBack="COASTAL"
              subtitle="lor sit amet, consectetuer ad"
              backgroundImage={rightBox}
              paddingTop="105px"
              fontColor="#ffffff"
              buttonDisplay="none"
            >
              <div
                style={{
                  fontSize: 14,
                  fontFamily: 'FilsonSoft-Bold',
                  marginTop: 175,
                }}
              >
                Comming Soon
              </div>
            </ImageBox>
          </TitleLineBox>

        </Layout>
      </div>
    )
  );
