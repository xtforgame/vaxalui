import React from 'react';
import { storiesOf } from '@storybook/react';
import { AddCircle } from '@material-ui/icons';

import TopSection from 'library/saya/Rick/TopSection';
import Introduction from 'library/saya/Rick/Introduction';
import CollapseSection from 'library/saya/Rick/CollapseSection';
import ImageContainer from 'library/saya/ImageContainer';
import GreenNumberSection from 'library/saya/Rick/GreenNumberSection';
import TransparentSection from 'library/saya/Rick/TransparentSection';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection1 from '../../../img/mobile/m_banner03.jpg';
import background_TopSection2 from '../../../img/mobile/m_bg07.jpg';
import GreenNumberSectionBG1 from '../../../img/mobile/m_bg04.jpg';
import GreenNumberSectionBG2 from '../../../img/mobile/m_bg05.jpg';
import circle1 from '../../../img/mobile/m_bg26.jpg';
import circle2 from '../../../img/mobile/m_image02.png';
import fig1 from '../../../img/mobile/m_fig01.svg';
import TransparentSectionBG1 from '../../../img/mobile/m_bg06.jpg';
import ProudlyImg from '../../../img/mobile/m_image03.png';

storiesOf('saya|Pages/NewMobile', module)
  .add('Rscuw',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={550}
            firstTitle="RSCUW / SAYA"
            firstTitleBack="NEXT"
            title={'Cutting\nScraps and\nOverstocks'}
            subtitle="Recycling the Industry’s Elephant In the Room"
            backgroundImage={background_TopSection1}
            subtitleFontFamily="light"
            paddingTop={122}
            titlePaddingTop={43}
            subtitlePaddingTop={16}
          />

          <div style={{ marginTop: 6 }}>
            <CollapseSection
              height="500px"
              title="RSCUW provides a renewal solution for rolls of fabric and offcuts that don’t make it into a garment"
              subtitle="RSCUW = Recycled Scrap and Cutting Waste"
              // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
              description={`Seeking to provide solutions to the industrial waste problem shrouding our industry, SAYA RSCUW (Recycled Scrap and Cutting Waste) is the industry’s most advanced mix content recycling project yet.

The program addresses the garment industry’s largest areas of hidden waste: cutting scrap and overstock fabrics. Statiscally cutting scrap (up to 30% waste per yard) and fabric overstock recycling has been difficult and expensive. SAYA RSCUW creates new recycling possibilities for what would typically be discarded.`}
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <GreenNumberSection
              hideSign
              topTitle={'Offcut Waste, a Big\nInconvenient Reality'}
              backgroundImage={GreenNumberSectionBG1}
              backgroundColor="#e3e3e3"
              number="30"
              topTile="industrial waste"
              bottomTitle="garment cutting scraps"
              subtitle="Cutting Scrap"
              description="Fabric cutting scrap is an inevitable part of garment manufacturing that results in up to 20% wastage per yard. In the past most of these scraps are downcycled, end up in landfills or incinerators as there are no commercially effective methods of recycling them. As a leader in the renewal fiber industry, SAYA is committed to finding a solution. Working together with our global network of brands and garment manufacturers worldwide, SAYA is tackling the issue head on."
              height="680px"

            />
          </div>

          <div style={{ marginTop: 6 }}>
            <GreenNumberSection
              topTitle={'Resurrecting the\nDeadstock'}
              backgroundImage={GreenNumberSectionBG2}
              backgroundColor="#e3e3e3"
              number="25"
              topTile="overstock"
              bottomTitle="annual waste"
              subtitle={'Deadstock and Overstock\nFabrics'}
              description={`Despite good intentions and improved efficiencies in production planning, fast fashion and the textile industry on the whole, production overstock is still a serious and overlooked problem.

These deadstock and overstock creates millions of yards of our industry’s unaccountable waste. This has been a hidden and inconvenient reality as there are no effective ways of alleviating them. SAYA RSCUW provides a renewal solution for rolls of fabric that don’t make it to the garment stage.`}
              height="727px"
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <ImageContainer>
              <img src={circle1} style={{ width: 230, height: 230, borderRadius: '50%', position: 'absolute', top: 60 }} />
              <div style={{ paddingTop: 310, }}>
                <Introduction
                  height={350}
                  title={'Challenges'}
                  subtitle={'Make it available and affordable'}
                  description="Removing colors, pigments and finishings from fabrics is a difficult task. Previous technology has been extremely expensive and price prohibitive. SAYA’s team was able to make this commercially available and affordable."
                  color="#000000"
                  lineColor="#000000"
                  subtitleFontFamily="light"
                />
              </div>
            </ImageContainer>
          </div>

          <div style={{ marginTop: 6 }}>
            <Introduction
              height={1295}
              title={'Methodology'}
              subtitle={'SAYA’s Mixed Waste Stream Recycling'}
              description="The complex input stream of sources requires SAYA’s engineering team to innovate new proprietary and advanced methods of sorting, cleaning, mechanical and chemical recycling."
              color="#ffffff"
              lineColor="#ffffff"
              subtitleFontFamily="light"
              backgroundColor="#64703f"
            >
              <img src={fig1} style={{ width: 320, height: 815, marginTop: 80 }} />
            </Introduction>
          </div>

          <div style={{ marginTop: 6 }}>
            <TransparentSection
              backgroundImage={TransparentSectionBG1}
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <TopSection
              height={550}
              firstTitle="RSCUW"
              firstTitleBack="RAW"
              title="Unbleached Recycled Raw From the Source"
              subtitle="Less Chemicals. Less CO2."
              backgroundImage={background_TopSection2}
              titleFontFamily="light"
              subtitleFontFamily="bold"
              paddingTop={106}
              titlePaddingTop={43}
              subtitlePaddingTop={16}
              titleFontSize={50}
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <ImageContainer>
              <img src={circle2} style={{ width: 230, height: 230, borderRadius: '50%', position: 'absolute', top: 60 }} />
              <div style={{ paddingTop: 310, }}>
                <Introduction
                  height={428}
                  title={'More Character\nLess Footprint'}
                  subtitle={'30% less compared to bleached\nrenewed fibers'}
                  description="Fibers made of offcuts, deadstock and/or tinted PET bottles retaining its original source color. These fibers are recycled without the bleaching process, and hence are the most energy efficient and carbon friendly. "
                  color="#000000"
                  lineColor="#000000"
                  subtitleFontFamily="light"
                />
              </div>
            </ImageContainer>
          </div>

          <div style={{ marginTop: 26 }}>
            <ImageContainer>
              <div style={{ height: 150, width: 320 }}>
                <div style={{ position: 'absolute', }}>
                  <img src={ProudlyImg} style={{ width: 230, height: 300, marginLeft: 45 }} />
                </div>
              </div>
              <div style={{ width: '100%', height: 150, backgroundColor: '#64703f' }} />
            </ImageContainer>
          </div>

          <CollapseSection
            height="500px"
            title="Wear Your Recycled Content with Pride"
            subtitle="Lightly Tinted Fibers, Inherits the True DNA"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description="RSCUW Raw fiber colors can vary depending on the sources of recycled content. It usually comes in shades of silver grey to light copper. Be creative in fabric design with heather, stripes, or ripstops. Wear your recycled efforts with pride with Rscuw Raw fibers."
          />

          <div style={{ marginTop: 6, marginBottom: 40 }}>
            <TechnologyProjects
              title="Explore More"
              list={[
                {
                  title: "Upgrade Your Bottle Renewal Technology",
                  buttonText: "Learn More",
                  disabled: false,
                  type: <span>BOTTLES</span>,
                },
                {
                  title: "Used Garment to Fiber Solution",
                  buttonText: "Coming Soon",
                  disabled: true,
                  type: <span>GARMA / SAYA</span>,
                  typeBack: <span>NEXT</span>
                },
              ]}
            />
          </div>
        </MobileLayout>
      </div >
    )
  );
