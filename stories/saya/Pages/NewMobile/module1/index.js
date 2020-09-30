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
  .add('Module1',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={550}
            firstTitle="RSCUW / SAYA"
            firstTitleBack="NEXT"
            title="Cutting Scraps and Overstocks"
            subTitle="Addressing the Industry’s Real Elephant In the Room."
            backgroundImage={background_TopSection1}
          />
          <div style={{ marginTop: 6 }}>
            <CollapseSection
              height="500px"
              title="RSCUW provides a renewal solution for rolls of fabric and offcuts that don’t make it into a garment"
              subtitle="RSCUW = Recycled Scrap and Cutting Waste"
              // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
              description={'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
            />
          </div>
          <div style={{ marginTop: 6 }}>
            <GreenNumberSection
              topTitle={'Offcut Waste, a Big\nInconvenient Reality'}
              backgroundImage={GreenNumberSectionBG1}
              backgroundColor="#e3e3e3"
              number="20"
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
              number="34"
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
              subTitle="Less Chemicals. Less CO2. "
              backgroundImage={background_TopSection2}
              titleFontFamily="light"
              subtitleFontFamily="bold"
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <ImageContainer>
              <img src={circle2} style={{ width: 230, height: 230, borderRadius: '50%', position: 'absolute', top: 60 }} />
              <div style={{ paddingTop: 310, }}>
                <Introduction
                  height={428}
                  title={'More Character\nLess Footprint'}
                  subtitle={'xx% compared to other bleached\nproduct lines '}
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
            title="Proudly Show Off Your Recycled Content"
            subtitle="Lightly Tinted Shade is Part of its True DNA"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
          />

          <div style={{ marginTop: 6 }}>
            <TechnologyProjects
              title="Other Technology Projects"
              list={[
                {
                  title: "Backbone of our sustainable textile business",
                  buttonText: "Learn More",
                  disabled: false,
                  type: <span>BOTTLES</span>,
                },
                {
                  title: "One Stop Used Garment to Fiber Solution",
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
