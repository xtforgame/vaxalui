import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBox from 'library/saya/Kenny/ImageBox';

import background_TopSection from '../img/bg46.jpg';
import introduction1 from '../img/bg47.jpg';
import leftBox from '../img/bg12.jpg';
import rightBox from '../img/bg48.jpg';



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
  .add('TechnologiesNowUsa',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle="SAYA NOW Series"
            secondTitle="SAYA"
            secondTitleBack="USA"
            thirdTitle="USA-based fiber program"
            backgroundImage={background_TopSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="140px"
          />

          <div style={{ marginTop: 35 }}>
            <Introduction
              height="600px"
              backgroundImage={introduction1}
              title="Turnkey Solution to 
              Made in USA Strategy"
              subtitle="Facility in South Carolina"
              description="SAYA USA is a special collection of recycled polyester fibers made in our facility in South Carolina, USA. Here we provide the options to use locally or internationally recycled bottles and wastes. If you are looking for a USA-based fiber program, SAYA is here to help with not only quality, delivery, but also global traceability and transparency."
              secondDescription="We partner with mills and finishing facilities around the USA to provide turnkey solutions to complete your sustainable and circular design product needs."
              fontColor="#ffffff"
              titleWidth="440px"
              lineBorder="solid 1px #ffffff"
              descriptionWidth="460px"
            />

            <TitleLineBox
              TitleLineBox="SAYA NOW Serial Projects"
              height="785px"
              fontColor="#000000"
              boxWidth="780px"
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
          </div>
        </Layout>
      </div>
    )
  );