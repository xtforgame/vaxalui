import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import Introduction from 'library/saya/Rick/Introduction';
import ImageContainer from 'library/saya/ImageContainer';
import SubtitleContent from 'library/saya/SubtitleContent';
import GreenNumberSection from 'library/saya/Rick/GreenNumberSection';
import TransparentSection from 'library/saya/Rick/TransparentSection';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';

import MobileLayout from '../../shared/MobileLayout';

import MobileBg1 from '../../img/mobile/m_bg22.jpg';
import MobileBg2 from '../../img/mobile/m_bg23.jpg';
import MobileBg3 from '../../img/mobile/m_bg24.jpg';
import MobileBg4 from '../../img/mobile/m_bg25.jpg';
import MobileBg5 from '../../img/mobile/m_bg27.jpg';
import MobileBg6 from '../../img/mobile/m_bg28.jpg';

import icon1 from '../../img/mobile/m_fig4.svg';
import icon2 from '../../img/mobile/m_fig5.svg';
import leftBox from '../../img/mobile/m_bg20.jpg';
import rightBox from '../../img/mobile/m_bg21.jpg';
import circle from '../../img/mobile/m_bg26.jpg';


storiesOf('saya|Pages/Mobile/MobileTechnologies', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('NextRscuw',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="SAYA NEXT Series"
            secondTitle={'RSCUW'}
            thirdTitle={'Cutting Scraps and Overstocks,\nAddressing the Real Elephant In\nthe Room. We seek out the high\nhanging fruits to capture what\nreally matters.'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={93}
            secondLineMarginTop={82}
          />

          <div style={{ marginTop: 23 }}>
            <Introduction
              height={880}
              title={'SAYA RSCUW\nprovides a renewal\nsolution for rolls of\nfabric that don’t\nmake it to the\ngarment stage.'}
              subtitle={'SAYA RSCUW = Recycled Scrap\nand Cutting Waste'}
              content={`Seeking to provide solutions to the industrial\nwaste problem shrouding our industry, SAYA\nRSCUW (Recycled Scrap and Cutting Waste)\nis the industry’s most advanced mix content\nrecycling project yet.\n\nThe program addresses the garment\nindustry’s largest areas of hidden waste:\ncutting scrap and overstock fabrics.\nHistorically, cutting scrap (up to 20% waste\nper yard) and fabric overstock recycling has\nbeen difficult and expensive. SAYA RSCUW\ncreates new recycling possibilities for what\nwould typically be discarded.`}
              backgroundImage={MobileBg2}
              color="#ffffff"
              lineColor="#ffffff"
            />
          </div>

          <ImageContainer
            style={{
              height: 165,
              backgroundImage: `url(${MobileBg3})`,
              fontSize: 27,
              fontFamily: 'FilsonSoft-Bold',
              color: '#ffffff',
              justifyContnet: 'center',
              paddingTop: 20,
              textAlign: 'center',
              marginTop: 23,
            }}
          >
            <pre>{`Lorem ipsum dolor sit\namet.`} </pre>
          </ImageContainer>

          <GreenNumberSection
            numberUpTitle="about"
            marginTop={80}
            number="50"
            topTile="years"
            bottomTitle="experience"
            height={713}
            subtitle={`Cutting Scrap`}
            content={`Fabric cutting scrap is an inevitable part of\ngarment manufacturing that results in up to\n20% wastage per yard. In the past most of\nthese scraps end up in landfills or incinerators\nas there are no commercially effective\nmethods of recycling them. As a leader in the\nindustry, SAYA is committed to finding a\nsolution. Working together with our global\nnetwork of brands and garment\nmanufacturers worldwide, SAYA is tackling\nthe issue head on.`}
            backgroundColor="#e3e3e3"
          />

          <ImageContainer
            style={{
              height: 165,
              backgroundImage: `url(${MobileBg4})`,
              fontSize: 27,
              fontFamily: 'FilsonSoft-Bold',
              color: '#ffffff',
              justifyContnet: 'center',
              paddingTop: 20,
              textAlign: 'center',
              marginTop: 23,
            }}
          >
            <pre>{`Lorem ipsum dolor sit\namet.`} </pre>
          </ImageContainer>

          <GreenNumberSection
            marginTop={80}
            number="34"
            topTile="overstock"
            bottomTitle="annual waste"
            height={653}
            subtitle={`Overstock Fabrics`}
            content={`Fabric cutting scrap is an inevitable part of\nDespite good intentions and improved\nefficiencies in production planning, fast\nfashion and the textile industry on the whole,\nproduction overstock is still a serious and\noverlooked problem. Overstock accounts for\nXXX% of our industry’s annual waste. SAYA\nRSCUW provides a renewal solution for rolls of\nfabric that don’t make it to the garment\nstage.`}
            backgroundColor="#e3e3e3"
          />

          <ImageContainer>
            <img src={circle} style={{ width: 231, height: 231, borderRadius: '50%', position: 'absolute', top: 80, }} />
            <div style={{ paddingTop: 286, }}>
              <Introduction
                height={422}
                title={'Challenges'}
                subtitle={'Make it available and affordable'}
                content={`Removing colors, pigments and finishings\nfrom fabrics is a difficult task. Previous\ntechnology has been extremely expensive\nand price prohibitive. SAYA’s team was able\nto make this commercially available and\naffordable.`}
                color="#000000"
                lineColor="#000000"
              />
            </div>
          </ImageContainer>

          <Introduction
            height={1381}
            backgroundColor="#64703f"
            title={'Methodology'}
            subtitle={'SAYA’s advanced methods'}
            content={`The complex input stream of sources requires\nSAYA’s engineering team to innovate new\nproprietary and advanced methods of\nsorting, cleaning, mechanical and chemical\nrecycling.`}
            color="#ffffff"
            lineColor="#ffffff"
          >
            <div style={{ textAlign: 'left', paddingTop: 55, }} >
              SAYA’s advanced methods
              </div>
            <img src={icon1} />
            <div >
              <img src={icon2} style={{ marginTop: 55 }} />
            </div>
          </Introduction>

          <TransparentSection
            height={796}
            title={'Where we are?'}
            subtitle={'Recruiting like-minded brands\nand garment manufacturers'}
            content={`SAYA is working on pilot projects with key\nbrand partners on recovering and recycling\ncutting scrap from their garment factories.`}
            backgroundImage={MobileBg5}
            titlePaddingTop={85}
            marginTop={32}
          >
            <div style={{ marginTop: 30, }}>
              <SubtitleContent
                height={190}
                backgroundColor=" rgba(0, 0, 0, 0.3)"
                fontColor="#ffffff"
                subtitle={'Type of Materials and Finishing'}
                content={`Right now we are limited to 100% Polyester\nfabric cutting scraps without coating not\nfinishing, including water repellent.`}
                paddingTop={25}
              />
              <SubtitleContent
                height={227}
                backgroundColor=" rgba(0, 0, 0, 0.3)"
                fontColor="#ffffff"
                subtitle={'Content Percentage'}
                content={`SAYA RSCUW Fibers consist of 3 types of\nrecycled components. Garment cutting scrap,\noverstock fabric, waste yarn, and post-\nconsumer PET bottles. Post industrial wastes\nmake up a minimum of 15%, and post\nconsumer bottles about 80-85%.`}
                paddingTop={0}
              />
            </div>
          </TransparentSection>

          <TransparentSection
            height={555}
            title={'What’s Next?'}
            backgroundImage={MobileBg6}
            titlePaddingTop={47}
            marginTop={23}
          >
            <div style={{ marginTop: 0, }}>
              <SubtitleContent
                height={190}
                backgroundColor=" rgba(0, 0, 0, 0.3)"
                fontColor="#ffffff"
                subtitle={'Type of Materials and Finishing'}
                content={`We aim to start recovering and recycling\nuncoated 100% Polyester fabrics with WR or\nDWR finishing by 1H 2021.`}
                paddingTop={25}
              />
              <SubtitleContent
                height={168}
                backgroundColor=" rgba(0, 0, 0, 0.3)"
                fontColor="#ffffff"
                subtitle={'Content Percentage'}
                content={`Removing colors and pigments We aim to\ncontinuously increase the percentage of\ngarment cutting scrap and overstock fabrics.`}
                paddingTop={0}
              />
            </div>
          </TransparentSection>

          <TitleLineBox
            title="SAYA NEXT Serial Projects"
            backgroundColor="#d8d8d8"
            color="#000000"
          >
            <ImageBoxSmall
              title="SAYA"
              titleBack="RSCUW RAW"
              subtitle={'Unbleached Renew FIbers\nRaw from the Source'}
              backgroundImage={leftBox}
              paddingTop={35}
              fontColor="#000000"
            />
            <ImageBoxSmall
              title="SAYA"
              titleBack="GARMA"
              subtitle={'One Stop Used\nGarment to Fiber Solution'}
              backgroundImage={rightBox}
              paddingTop={70}
              fontColor="#ffffff"
            />
          </TitleLineBox>
        </MobileLayout>
      </div>
    )
  );