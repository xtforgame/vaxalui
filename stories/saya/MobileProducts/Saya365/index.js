import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import Introduction from 'library/saya/Rick/Introduction';
import Table from 'library/saya/Rick/Table';
import TitleWithContent from 'library/saya/Kenny/TitleWithContent';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';
import ImageContainer from 'library/saya/ImageContainer';
import GreenButton from 'library/saya/Rick/GreenButton';

import MobileLayout from '../../shared/MobileLayout';

import MobileBg1 from '../../img/mobile/m_bg62.jpg'
import MobileBg2 from '../../img/mobile/m_bg65.jpg'
import MobileBg3 from '../../img/mobile/m_bg33.jpg'
import MobileBg4 from '../../img/mobile/m_bg63.jpg'
import MobileBg5 from '../../img/mobile/m_bg64.jpg'

import box1 from '../../img/mobile/m_bg35.jpg';
import box2 from '../../img/mobile/m_bg36.jpg';
import box3 from '../../img/mobile/m_bg43.jpg';
import box4 from '../../img/mobile/m_bg37.jpg';


storiesOf('saya|Pages/Mobile/MobileProducts', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Saya365',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="PRODUCTS"
            secondTitle={'SAYA'}
            secondTitleBack={'365'}
            thirdTitle={'with SAYA Now\nRenewing Technology'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={148}
            secondLineMarginTop={138}
            lineBackgroundColor="#000000"
            color="#000000"
          />

          <Introduction
            height={638}
            title={'Industry’s Favorite*\nRecycled PET Bottle\nFiber for\nEvery Application\nand Budget'}
            subtitle={'Better Color, Yield, and Consistency'}
            content={`SAYA 365 is largest recycled PET bottle fiber\nsource you have heard little of. Equipped with\nmost advanced and comprehensive selection\nof renewed PET fibers, we offer you painless\ntransition to reliable, transparent. and\ncertified sustainnability solutions.`}
            backgroundImage={MobileBg2}
            color="#ffffff"
            lineColor="#ffffff"
          >
            <div style={{ fontSize: 10, letterSpacing: -1, fontFamily: 'FilsonSoftRegular', paddingTop: 30 }}>
              (*Industry’s favorite based on global capacity and volume sold in 2019)
            </div>
          </Introduction>

          <ImageContainer
            style={{
              height: 165,
              justifyContent: 'center',
            }}
          >
            <pre style={{ fontSize: 27, fontFamily: 'FilsonSoft-Bold', textAlign: 'center', }}>
              {'The SAYA 365\nDifference'}
            </pre>
          </ImageContainer>

          <Introduction
            height={570}
            title={'Color Dyeing\nConsistency'}
            subtitle={'More Accurate Color = Even Better\nSustainability'}
            content={`SAYA’s proprietary 7-stage filtration on\nrecycled bottles results in the most\nchemically stable PET fibers offering the best\nweaving consistency and dyeability on\nrecycled fibers. This means less re-dyed and\nre-runs and less carbon footprints.\nMost virgin polyester dyestuff formulas can\nbe converted directly with a single or no re-\nlab dipping process.`}
            backgroundImage={MobileBg3}
            color="#ffffff"
            lineColor="#ffffff"
          />


          <div style={{ marginTop: 23, }}>
            <Introduction
              height={570}
              title={'Vibrant Like New '}
              subtitle={'Closest CIE Lab* Color to Virgin'}
              content={`SAYA boasts industry leading (Lab) whiteness\nrating of under 5 (lower the better). This\nrepresents the closest color dyeing vibrancy\ncompared to that of virgin polyester.\nEvery single batch of yarn is photospectrum\ntested for purity and whiteness to ensure the\nbest color reproducibility possible. One\nshouldn’t compromise color accuracy for\nsustainability.`}
              backgroundImage={MobileBg4}
              color="#ffffff"
              lineColor="#ffffff"
            />
          </div>

          <div style={{ marginTop: 23, }}>
            <Introduction
              height={570}
              title={'Highest Strength\nand Tenacity '}
              subtitle={'Never Compromise on Performance'}
              content={`Intrinsic viscosity (IV) rating is a critical factor\nin measuring recycled polyester fiber’s\nperformance and physical stability.\n\nSAYA’s propreitary renewing and spinning\nprocess guarantees the performance of its\nrecycled polyester fibers to be on par with\nvirgin petrochemical sources, ensuring the\nbest Grade AA yield and strength.`}
              backgroundImage={MobileBg5}
              color="#ffffff"
              lineColor="#ffffff"
            />
          </div>

          <ImageContainer
            style={{
              height: 307,
              backgroundColor: '#333333',
              fontSize: 27,
              fontFamily: 'FilsonSoft-Bold',
              color: '#ffffff',
              paddingTop: 53,
            }}
          >
            <pre style={{ textAlign: 'center', }}>{`Learn more about\nSAYA Now Technology.`} </pre>
            <GreenButton
              height={50}
              width={160}
              marginTop={0}
              text="Learn More"
            />
          </ImageContainer>

          <TitleWithContent
            height={895}
            width={235}
            title="SAYA 365 Product Specs"
            fontColor="#000000"
            lineBorder="solid 1px #000000"
            fontSize={33}
          >
            <div style={{ overflow: 'scroll', marginTop: 5, textAlign: 'center', }}>
              <Table />
            </div>
          </TitleWithContent>

          <ImageContainer
            style={{
              height: 266,
              backgroundColor: '#333333',
              fontSize: 27,
              fontFamily: 'FilsonSoft-Bold',
              color: '#ffffff',
              textAlign: 'center',
              paddingTop: 53,
            }}
          >
            <pre style={{ textAlign: 'center', }}>{`For Renewing\nTechnology Beyond\nBottles`} </pre>
          </ImageContainer>

          <TitleLineBox
            title={'SAYA Performance fibers'}
            backgroundColor="#d8d8d8"
            color="#000000"
          >
            <ImageBoxSmall
              title={'CHROMUCH\nSolution Dyed'}
              subtitle="Color without Compromise"
              backgroundImage={box1}
              paddingTop={35}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title="SAYA"
              titleBack="FRESH"
              subtitle={'Antibacterial Infused\nOdor Prevention'}
              backgroundImage={box2}
              paddingTop={70}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title="SAYA"
              titleBack="STRETCH"
              subtitle={'Superior Stretch in\nRecycled Content'}
              backgroundImage={box3}
              paddingTop={70}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title={'SAYA\n'}
              titleBack="MICROFIBER"
              subtitle={'Fine Denier, High Filament\nSustainable Luxury'}
              backgroundImage={box4}
              paddingTop={35}
              fontColor="#ffffff"
            />
          </TitleLineBox>
        </MobileLayout>
      </div>
    )
  );