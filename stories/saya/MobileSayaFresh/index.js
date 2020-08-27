import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import Introduction from 'library/saya/Rick/Introduction';
import Table from 'library/saya/Rick/Table';
import TitleWithContent from 'library/saya/Kenny/TitleWithContent';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';

import MobileLayout from '../shared/MobileLayout';

import MobileBg1 from '../img/mobile/m_bg61.jpg'
import MobileBg2 from '../img/mobile/m_bg33.jpg'
import MobileBg3 from '../img/mobile/m_bg34.jpg'

import leftBox from '../img/mobile/m_bg35.jpg';
import midBox from '../img/mobile/m_bg43.jpg';
import rightBox from '../img/mobile/m_bg37.jpg';


storiesOf('saya|Pages/Mobile', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('MobileSayaFresh',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="SAYA Performance Fiber"
            secondTitle={'SAYA'}
            secondTitleBack={'FRESH'}
            thirdTitle={'High Performance Antibacterial Fiber'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={148}
            secondLineMarginTop={138}
            lineBackgroundColor="#ffffff" 
            color="#ffffff"
          />

          <Introduction
            height={385}
            title={'Features'}
            subtitle={'100% recycled content.\n\n100% SAYA Recyclable.\n\nMore chlorine and chemical\nresistant than Spandex.'}
            color="#000000"
            lineColor="#000000"
          />

          <Introduction
            height={570}
            title={'lor sit amet,\nconsectetuer'}
            subtitle={'lor sit amet, consectetuer'}
            content={`Nam porttitor blandit accumsan. Ut vel\ndictum sem, a pretium dui. In malesuada\nenim in dolor euismod, id commodo mi\nconsectetur. Curabitur at vestibulum nisi.\nNullam vehicula nisi ve.`}
            backgroundImage={MobileBg2}
            color="#ffffff"
            lineColor="#ffffff"
          />

          <div style={{ marginTop: 23 }}>
            <Introduction
              height={570}
              title={'lor sit amet,\nconsecte'}
              backgroundImage={MobileBg3}
              color="#ffffff"
              lineColor="#ffffff"
              lineDisplay="none"
            />
          </div>

          <div style={{ paddingTop: 10, }}>
            <TitleWithContent
              height={900}
              title="Spec"
              fontColor="#000000"
              lineBorder="solid 1px #000000"
              fontSize={33}
            >
              <div style={{ overflow: 'scroll', marginTop: 5, }}>
                <Table />
              </div>
            </TitleWithContent>
          </div>

          <TitleLineBox
            title={'Other SAYA\nPerformance Fibers'}
            backgroundColor="#d8d8d8"
            color="#000000"
          >
            <ImageBoxSmall
              title={'CHROMUCH\nSolution Dyed'}
              subtitle="Color without Compromise"
              backgroundImage={leftBox}
              paddingTop={35}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title="SAYA"
              titleBack="STRETCH"
              subtitle={'Superior Stretch in\nRecycled Content'}
              backgroundImage={midBox}
              paddingTop={70}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title={'SAYA\n'}
              titleBack="MICROFIBER"
              subtitle={'Fine Denier, High Filament\nSustainable Luxury'}
              backgroundImage={rightBox}
              paddingTop={35}
              fontColor="#ffffff"
            />
          </TitleLineBox>
        </MobileLayout>
      </div>
    )
  );