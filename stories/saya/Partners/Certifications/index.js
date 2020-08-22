import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Kenny/TopSection';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';import ImageBox from 'library/saya/Kenny/ImageBox';
import ImageBox from 'library/saya/Kenny/ImageBox';
import IconBox from 'library/saya/Kenny/IconBox';
import IconBoxSection from 'library/saya/Kenny/IconBoxSection';
import ImageContainer from 'library/saya/ImageContainer';

import Layout from '../../shared/Layout';

import background_TopSection from '../img/bg57.jpg';
import leftBox from '../img/bg56.jpg';
import rightBox from '../img/bg52.jpg';
import icon1 from '../img/icon20.svg';
import icon2 from '../img/icon21.svg';
import icon3 from '../img/icon23.svg';
import icon4 from '../img/icon24.svg';
import icon5 from '../img/icon22.svg';


storiesOf('saya|Pages/Desktop/Partners', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Certifications',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle="PARTNERS"
            secondTitle="Certifications"
            thirdTitle="3rd Party Certified Peace of Mind"
            backgroundImage={background_TopSection}
            fontColor="#ffffff"
            lineBorder="1px solid #ffffff"
            firstLineWidth="85px"
          />

          <ImageContainer
            style={{
              height: 700,
              justifyContent: 'center',
              backgroundColor: '#c9c7c7'
            }}
          >
            <IconBoxSection>
              <IconBox width="162px" />
              <IconBox imgUrl={icon1} width="140px" />
              <IconBox imgUrl={icon2} width="140px" />
              <IconBox imgUrl={icon3} width="280px" />
              <IconBox imgUrl={icon4} width="140px" />
              <IconBox width="162px" />
            </IconBoxSection>

            <IconBoxSection>
              <IconBox width="162px" />
              <IconBox imgUrl={icon5} width="140px" />
              <IconBox imgUrl={icon2} width="140px" />
              <IconBox imgUrl={icon4} width="140px" />
              <IconBox imgUrl={icon3} width="280px" />
              <IconBox width="162px" />
            </IconBoxSection>

            <IconBoxSection>
              <IconBox width="162px" />
              <IconBox imgUrl={icon2} width="140px" />
              <IconBox imgUrl={icon4} width="140px" />
              <IconBox imgUrl={icon1} width="140px" />
              <IconBox width="140px" />
              <IconBox width="140px" />
              <IconBox width="162px" />
            </IconBoxSection>
          </ImageContainer>

          <TitleLineBox
            title="Related Informations"
            height="785px"
            fontColor="#000000"
            boxWidth="780px"
            lineBorder="solid 1px #979797"
          >
            <ImageBox
              title="Textile Partners"
              backgroundImage={leftBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />
            <ImageBox
              title="Brand Partners"
              backgroundImage={rightBox}
              paddingTop="105px"
              fontColor="#ffffff"
            />
          </TitleLineBox>
        </Layout>
      </div>
    )
  );