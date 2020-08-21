import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import ImageContainer from 'library/saya/ImageContainer';


import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBox from 'library/saya/Kenny/ImageBox';

import background_TopSection from '../img/bg50.jpg';
import introduction1 from '../img/bg51.jpg';
import leftBox from '../img/bg52.jpg';
import rightBox from '../img/bg53.jpg';



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
  .add('PartnersTextilePartners',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>



          <TopSection
            firstTitle="PARTNERS"
            secondTitle="Textile Partners"
            thirdTitle="From One Professional to Another"
            backgroundImage={background_TopSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="85px"
          />


          <div style={{ marginTop: 35, }}>
            <Introduction
              height="470px"
              backgroundImage={introduction1}
              title="From One Professional to Another"
              subtitle="We know how to make your job easier."
              description="SAYA supplies the best-in-class performance fibers to top fabric manufacturers around the world. SAYA recycled fibers retain the best strength, dyeability, and overall A Grade yield."
              secondDescription="Whether you need better fabric tenacity, color matching or simply hassle-free transition to recycled content, we got your back."
              descriptionWidth="460px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
            />
          </div>

          <ImageContainer
            style={{
              height: 330,
              backgroundColor: ' #64703f',
              color: '#ffffff',
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'FilsonSoft-Bold',
              marginTop: 35,
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            Industry Professionals<br />Using SAYA
          </ImageContainer>


          <TitleLineBox
            title="Related Informations"
            height="785px"
            fontColor="#000000"
            boxWidth="780px"
            lineBorder="solid 1px #979797"
          >
            <ImageBox
              title="Brand Partners"
              backgroundImage={leftBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />
            <ImageBox
              title="Certifications"
              backgroundImage={rightBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />
          </TitleLineBox>

        </Layout>
      </div>
    )
  );