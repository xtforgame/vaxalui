import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBox from 'library/saya/Kenny/ImageBox';
import ImageContainer from 'library/saya/ImageContainer';
import GreenNumberSection from 'library/saya/Kenny/GreenNumberSection';

import background_TopSection from '../../img/bg49.jpg';
import introduction1 from '../../img/bg38.jpg';
import introduction2 from '../../img/bg39.jpg';
import introduction3 from '../../img/bg40.jpg';
import leftBox from '../../img/bg12.jpg';
import rightBox from '../../img/bg48.jpg';

import Logo from '../../img/mobile/m_logo_w.svg'

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
        <Layout
          logo={(
            <img src={Logo} height={18} style={{ paddingLeft: 12 }} />
          )}
        >
          <TopSection
            firstTitle="SAYA NEXT Series"
            secondTitle="SAYA"
            secondTitleBack="RSCUW"
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

          <TitleLineBox
            TitleLineBox="SAYA NOW Serial Projects"
            height="785px"
            fontColor="#000000"
            boxWidth={850}
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
            />
          </TitleLineBox>
        </Layout>
      </div>
    )
  );
