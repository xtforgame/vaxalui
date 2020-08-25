import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import Introduction from 'library/saya/Rick/Introduction';
import ImageContainer from 'library/saya/ImageContainer';
import IconBox from 'library/saya/Rick/IconBox';
import IconBoxSection from 'library/saya/Rick/IconBoxSection';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';

import MobileLayout from '../shared/MobileLayout';

import MobileBg1 from '../img/mobile/m_bg18.jpg'
import MobileBg2 from '../img/mobile/m_bg19.jpg'
import icon1 from '../img/icon15.svg'
import icon2 from '../img/icon16.svg';
import icon3 from '../img/icon17.svg';
import icon4 from '../img/icon18.svg';
import leftBox from '../img/mobile/m_bg20.jpg';
import rightBox from '../img/mobile/m_bg21.jpg';


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
  .add('MobileTextilePartners',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="PARTNERS"
            secondTitle={'Textile\nPartners'}
            thirdTitle={'Backbone of our\nsustainable textile business'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={65}
            secondLineMarginTop={56}
          />

          <Introduction
            height={575}
            title={'From One\nProfessional to\nAnother'}
            subtitle={'We know how to make your job\neasier'}
            content={`SAYA supplies the best-in-class performance\nfibers to top fabric manufacturers around the\nworld. SAYA recycled fibers retain the best\nstrength, dyeability, and overall A Grade yield.\n\nWhether you need better fabric tenacity, color\nmatching or simply hassle-free transition to\nrecycled content, we got your back.`}
            backgroundImage={MobileBg2}
            color="#ffffff"
            lineColor="#ffffff"
          />

          <ImageContainer
            style={{
              height: 165,
              backgroundColor: '#64703f',
              fontSize: 27,
              fontWeight: 'bold',
              fontFamily: 'FilsonSoft-Bold',
              color: '#ffffff',
              justifyContnet: 'center',
              paddingTop: 20,
              textAlign: 'center',
              marginTop: 23,
            }}
          >
            <pre>{`Industry Professionals\nUsing SAYA`} </pre>
          </ImageContainer>

          <ImageContainer
            style={{
              height: 666,
              justifyContent: 'center',
              backgroundColor: '#231f20'
            }}
          >
            <IconBoxSection>
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon2} width={90} />
              <IconBox imgUrl={icon3} width={90} />
              <IconBox imgUrl={icon4} width={90} />
            </IconBoxSection>

            <IconBoxSection>
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon2} width={90} />
              <IconBox imgUrl={icon3} width={90} />
              <IconBox imgUrl={icon4} width={90} />
            </IconBoxSection>

            <IconBoxSection>
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon2} width={90} />
              <IconBox imgUrl={icon3} width={90} />
              <IconBox imgUrl={icon4} width={90} />
            </IconBoxSection>

            <IconBoxSection>
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon2} width={90} />
              <IconBox imgUrl={icon3} width={90} />
              <IconBox imgUrl={icon4} width={90} />
            </IconBoxSection>

            <IconBoxSection>
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon2} width={90} />
              <IconBox imgUrl={icon3} width={90} />
              <IconBox imgUrl={icon4} width={90} />
            </IconBoxSection>

            <IconBoxSection>
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon1} width={90} />
            </IconBoxSection>
          </ImageContainer>

          <TitleLineBox
            title="Related Informations"
            backgroundColor="#ffffff"
            color="#000000"
          >
            <ImageBoxSmall
              title="Brand Partners"
              backgroundImage={leftBox}
              paddingTop={70}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title="Certifications"
              backgroundImage={rightBox}
              paddingTop={70}
              fontColor="#ffffff"
            />

          </TitleLineBox>
        </MobileLayout>
      </div>
    )
  );