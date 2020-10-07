import React from 'react';
import { storiesOf } from '@storybook/react';
import { AddCircle } from '@material-ui/icons';
import TopSection from 'library/saya/bob/TopSection';
import Section from 'library/saya/bob/Section';
import Breadcrumbs from 'library/saya/bob/Breadcrumbs';
import Introduction from 'library/saya/bob/Introduction';
import CollapseSection from 'library/saya/bob/CollapseSection';
import GreenNumberSection from 'library/saya/bob/GreenNumberSection';
import GreenNumberSection2 from 'library/saya/bob/GreenNumberSection2';
import Challenges from 'library/saya/bob/Challenges';
import Methodology from 'library/saya/bob/Methodology';
import ChallengesAndTransparency from 'library/saya/bob/ChallengesAndTransparency';
import TechnologyProjects from 'library/saya/bob/TechnologyProjects';

import Layout from '../../../shared/Layout';

import background_TopSection from '../../../img/banner03.jpg';
import timeline from '../../../img/fig01.svg';
import GreenNumberSectionBG1 from '../../../img/bg04.jpg';
import GreenNumberSectionBG2 from '../../../img/bg05.jpg';
import SectionBG from '../../../img/bg07.jpg';
import ChallengeImg from '../../../img/image01.png';
import ChallengesAndTransparencyBG from '../../../img/bg43.jpg';
import ProudlyImg from '../../../img/image03.png';
import OceanCycleImg from '../../../img/image04.png';


storiesOf('saya|Pages/NewDesktop', module)
  .add('Module1',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle={
              <>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>RSCUW</span>
                <span> / </span>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>SAYA</span>
                <span style={{ fontFamily: 'FilsonSoft-light' }}>NEXT</span>
              </>
            }
            secondTitle="Cutting Scraps and Overstocks"
            thirdTitle="Addressing the Industry’s Real Elephant In the Room"
            backgroundImage={background_TopSection}
          />
          <CollapseSection
            height="465px"
            backgroundColor="#e3e3e3"
            color="#000000"
            buttonColor="#64703f"
            title="RSCUW provides a renewal solution for rolls of fabric and offcuts that don’t make it into a garment"
            subtitle="RSCUW = Recycled Scrap and Cutting Waste"
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
            
          />
          <CollapseSection
            height="465px"
            backgroundColor="#e3e3e3"
            color="#000000"
            buttonColor="#64703f"
            title="RSCUW provides a renewal solution for rolls of fabric and offcuts that don’t make it into a garment"
            subtitle="RSCUW = Recycled Scrap and Cutting Waste"
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
          />
          <CollapseSection
            height="465px"
            title="RSCUW provides a renewal solution for rolls of fabric and offcuts that don’t make it into a garment"
            subtitle="RSCUW = Recycled Scrap and Cutting Waste"
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
          />
          <GreenNumberSection
            topTitle="Offcut Waste, a Big Inconvenient Reality"
            backgroundImage={GreenNumberSectionBG1}
            backgroundColor="#e3e3e3"
            number="20"
            topTile="industrial waste"
            bottomTitle="garment cutting scraps"
            rightTitle="Cutting Scrap"
            description="Fabric cutting scrap is an inevitable part of garment manufacturing that results in up to 20% wastage per yard. In the past most of these scraps are downcycled, end up in landfills or incinerators as there are no commercially effective methods of recycling them. As a leader in the renewal fiber industry, SAYA is committed to finding a solution. Working together with our global network of brands and garment manufacturers worldwide, SAYA is tackling the issue head on."
            height="450px"
            lineWidth="220px"
            leftPaddingTop="110px"
            leftPaddingRight="80px"
            rightPaddingLeft="80px"
            descriptionPaddingTop="22px"
            percentDisplay="inline-block"
            numberColor="#000000"
            percentColor="#000000"
          />
          <GreenNumberSection
            topTitle="Offcut Waste, a Big Inconvenient Reality"
            backgroundImage={GreenNumberSectionBG2}
            backgroundColor="#e3e3e3"
            number="34"
            topTile="overstock"
            bottomTitle="annual waste"
            rightTitle="Deadstock and Overstock Fabrics"
            description={`Despite good intentions and improved efficiencies in production planning, fast fashion and the textile industry on the whole, production overstock is still a serious and overlooked problem.

These deadstock and overstock creates millions of yards of our industry’s unaccountable waste. This has been a hidden and inconvenient reality as there are no effective ways of alleviating them. SAYA RSCUW provides a renewal solution for rolls of fabric that don’t make it to the garment stage.`}
            height="450px"
            lineWidth="220px"
            leftPaddingTop="110px"
            leftPaddingRight="80px"
            rightPaddingLeft="80px"
            descriptionPaddingTop="22px"
            percentDisplay="inline-block"
            numberColor="#000000"
            percentColor="#000000"
          />
          <GreenNumberSection2
            image={<img width={178} height={244} src={OceanCycleImg} />}
            leftColumnStyle={{ width: 340 }}
            backgroundColor="#ffffff"
            rightTitle="Cutting Scrap"
            description="Fabric cutting scrap is an inevitable part of garment manufacturing that results in up to 20% wastage per yard. In the past most of these scraps are downcycled, end up in landfills or incinerators as there are no commercially effective methods of recycling them. As a leader in the renewal fiber industry, SAYA is committed to finding a solution. Working together with our global network of brands and garment manufacturers worldwide, SAYA is tackling the issue head on."
            height="450px"
            lineWidth="220px"
            rightPaddingLeft="80px"
            descriptionPaddingTop="22px"
            percentDisplay="inline-block"
          />
          <Challenges
            title="Challenges"
            subtitle="Make it available and affordable"
            description="Removing colors, pigments and finishings from fabrics is a difficult task. Previous technology has been extremely expensive and price prohibitive. SAYA’s team was able to make this commercially available and affordable."
            height="520px"
            lineWidth="220px"
            leftPaddingTop="110px"
            leftPaddingRight="80px"
            descriptionPaddingTop="22px"
            image={ChallengeImg}
          />
          <Methodology
            height="756px"
            backgroundColor="#64703f"
            title="Methodology"
            subtitle="SAYA’s advanced methods"
            description="The complex input stream of sources requires SAYA’s engineering team to innovate new proprietary and advanced methods of sorting, cleaning, mechanical and chemical recycling."
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            subtitleWidth="620px"
            descriptionWidth="460px"
            bottomContent={<div><img style={{ height: 321 }} src={timeline} /></div>}
          />
          <ChallengesAndTransparency
            height='496px'
            backgroundImage={ChallengesAndTransparencyBG}
            backgroundColor="#64703f"
            title="Challenges and Transparency"
            subtitle="Recruiting like-minded brands and garment manufacturers"
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            subtitleWidth="620px"
            descriptionWidth="780px"
            description="SAYA is working on pilot projects with key brand partners to recover and recycle deadstock and cutting scrap from their mills and garment factories."
          />
          <Section
            color="#FFFFFF"
            breadCrumbs={
              <Breadcrumbs
                bread={[
                  { name: <span style={{ fontFamily: 'FilsonSoft-Bold' }}>RSCUW RAW</span>, path: '/RSCUWRAW' },
                ]}
              />
            }
            title={`Unbleached Recycled Fibers, Created Raw From the Source`}
            subTitle="Less Chemicals, Less CO2, More Identity"
            backgroundImage={SectionBG}
            onClick={() => { console.log('read More') }}
            showButton={false}
            height="500px"
          />
          <Challenges
            title="Carbon Footprints Reduced"
            subtitle="xx% compared to other bleached product lines "
            description="Fibers made of offcuts, deadstock and/or tinted PET bottles retaining its original source color. These fibers are recycled without the bleaching process, and hence are the most energy efficient and carbon friendly. "
            height="520px"
            lineWidth="220px"
            leftPaddingTop="110px"
            leftPaddingRight="80px"
            descriptionPaddingTop="22px"
            image={ChallengeImg}
          />
          <Introduction
            height="417px"
            backgroundColor="#64703f"
            title="Proudly Show Off Your Recycled Content"
            subtitle="Lightly Tinted Shade is Part of its True DNA"
            fontColor="#ffffff"
            titleWidth="780px"
            lineBorder="solid 1px #ffffff"
            subtitleWidth="620px"
            descriptionWidth="460px"
            description={<AddCircle onClick={()=>{}} style={{ width: 46, height: 46, color: '#e3e3e3' }} />}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'relative',
                marginTop: -184,
                marginBottom: 52
                }}
              >
              <img src={ProudlyImg} style={{ marginRight: 102 }} />
            </div>
          </Introduction>
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
                title: "Backbone of our sustainable textile business",
                buttonText: "Coming Soon",
                disabled: true,
                type: <span>BOTTLES</span>,
              },
              {
                title:"One Stop Used Garment to Fiber Solution",
                buttonText: "Learn More",
                disabled: false,
                type: <span>GARMA / SAYANEXT</span>,
              },
              {
                title: "One Stop Used Garment to Fiber Solution",
                buttonText: "Coming Soon",
                disabled: true,
                type: <span>GARMA / SAYANEXT</span>,
              }
            ]}
          />
        </Layout>
      </div>
    )
  );
  