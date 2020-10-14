import React from 'react';
import { storiesOf } from '@storybook/react';
import TopSection from 'library/saya/Rick/TopSection';
import CollapseSection from 'library/saya/Rick/CollapseSection';
import ImageContainer from 'library/saya/ImageContainer';
import TitleButton from 'library/saya/Rick/TitleButton';
import CollapseTable from 'library/saya/Rick/CollapseTable';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection1 from '../../../img/mobile/m_banner05.jpg';
import background_TopSection2 from '../../../img/mobile/m_bg08.jpg';
import Background from '../../../img/mobile/m_bg09.jpg';


storiesOf('saya|Pages/NewMobile', module)
  .add('Saya365',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            height={550}
            firstTitle="PRODUCT"
            title="Fiber Solutions for Every Task and budget"
            subtitle="SAYA Advanced Recycled Fibers"
            backgroundImage={background_TopSection1}
            titleFontFamily="bold"
            subtitleFontFamily="light"
            paddingTop={92}
            titlePaddingTop={43}
            subtitlePaddingTop={16}
          />

          <div style={{ marginTop: 6 }}>
            <CollapseSection
              height="336px"
              title="Design Consciously,Know What Goes Into Your Fabrics"
              subtitle="Smooth and Painless Transition to Smarter Fibers. "
              // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
              description={`As designers and developers you hold the key to making the right choices for a sustainable product line. We also understand the challenge of juggling between ethos, budget, on-time delivery and quality. Value driven and quality focused, we work with you and your supply chain to offer maximum efficiency and minimum hassle. SAYA 365 is our answer to make things easier for everyone to adopt and convert to a more sustainable fiber. `}
            />
          </div>

          <div style={{ marginTop: 6 }}>
            <TopSection
              color="#000000"
              lineColor="#000000"
              height={550}
              firstTitle="SAYA"
              firstTitleBack="365"
              title={'Industry’s\nFavorite\nRecycled\nBottle Fiber'}
              subtitle="with SAYA Bottle Renewing Technology"
              backgroundImage={background_TopSection2}
              titleFontFamily="light"
              subtitleFontFamily="bold"
              paddingTop={112}
              titlePaddingTop={43}
              subtitlePaddingTop={16}
              titleFontSize={50}
            />
          </div>

          <CollapseSection
            height="415px"
            title="Industry’s Favorite Recycled PET Bottle Fiber for Every Application and Budget"
            subtitle="Better Color, Yield, and Consistency "
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={`SAYA 365 is the largest recycled PET bottle fiber source, but you have likely heard little about it. Equipped with the most advanced and comprehensive selection of renewed PET fibers, we offer a painless to transition to reliable, transparent. and certified sustainability solutions.

(*Industry’s favorite based on global capacity and volume sold in 2019) `}
          />

          <div style={{ marginTop: 6 }}>
            <ImageContainer >
              <div style={{ width: '100%', height: 175, color: '#ffffff', textAlign: 'center', fontSize: 24, fontFamily: 'FilsonSoft-Bold', backgroundImage: `url(${Background})`, paddingTop: 72, }}>
                The SAYA 365 Advantage
              </div>
            </ImageContainer>
          </div>

          <CollapseSection
            height="296px"
            title="Color Dyeing Consistency "
            subtitle="Get Accurate Colors the First Time "
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={`Contaminants and residues often affects the dyeability and color consistency in recycled fibers. SAYA’s proprietary 7-stage filtration on recycled bottles results in the most chemically stable PET fibers offering the best weaving consistency and dyeability. 
This means less re-dyes and re-runs and reduced carbon footprints.
            
With SAYA 365, most of your existing virgin polyester dyestuff formulas can be converted directly with a single or no re-lab dipping process. `}
            backgroundColor="#444343"
          />

          <div style={{ marginTop: 6 }}>
            <CollapseSection
              height="296px"
              title="Bright & Vibrant Like New "
              subtitle="Closest CIE L*a*b* Color to Virgin"
              // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
              description={`SAYA boasts industry leading (L*a*b) whiteness rating of under 5 (lower the better). This represents the closest color dyeing vibrancy compared to that of virgin polyester.  

Every single batch of yarn is photospectrum tested for purity and whiteness to ensure the best color reproducibility possible. One shouldn’t compromise color accuracy for sustainability. `}
              backgroundColor="#e3e3e3"
              color="#000000"
              buttonColor="#64703f"
            />
          </div>

          <CollapseSection
            height="303px"
            title="Highest Strength and Tenacity "
            subtitle="Never Compromise on Performance"
            // image={<div style={{ width: 340, height: 440, backgroundColor: 'black' }} />}
            description={`Intrinsic viscosity (IV) rating is a critical factor in measuring recycled polyester fiber’s performance and physical stability.
 
SAYA’s propreitary renewing and spinning process guarantees the performance of its recycled polyester fibers to be on par with virgin petrochemical sources, ensuring the best Grade AA yield and strength. `}
            backgroundColor="#ffffff"
            color="#000000"
            buttonColor="#64703f"
          />

          <div style={{ marginTop: 6 }}>
            <TitleButton
              color="#ffffff"
              title={`Learn More on\nSAYA’s Bottle Recycling\nTechnology`}
              onClick={() => { }}
              label="Learn More"
              background="#444343"
            />
          </div>

          <CollapseTable
            title={'SAYA 365\nAvailability'}
          />
          <TechnologyProjects
            height={1018}
            backgroundColor="#e3e3e3"
            title="See Technology Projects"
            list={[
              {
                title: "Stretch Fibers with Good Conscious",
                buttonText: "Learn More",
                disabled: false,
                type: <span>STRETCH</span>,
              },
              {
                title: "Color without Compromise",
                buttonText: "Learn More",
                disabled: false,
                type: <span>CHROMUCH Solution Dyed</span>,
              },
              {
                title: "High Performance Antibacterial Fiber",
                buttonText: "Learn More",
                disabled: false,
                type: <span>FRESH</span>,
              },
              {
                title: "Fluffy Soft, Ultimate Drape and Versatile",
                buttonText: "Learn More",
                disabled: false,
                type: <span>MICROFIBER</span>,
              },
            ]}
          />
        </MobileLayout>
      </div>
    )
  );
