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

import MobileBg1 from '../img/mobile/m_bg55.jpg'
import icon1 from '../img/icon20.svg'
import icon2 from '../img/icon21.svg';
import icon3 from '../img/icon23.svg';
import icon4 from '../img/icon22.svg';
import icon5 from '../img/icon24.svg';
import leftBox from '../img/mobile/m_bg20.jpg';
import rightBox from '../img/mobile/m_bg58.jpg';


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
  .add('MobileCertifications',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="PARTNERS"
            secondTitle={'Certifications'}
            thirdTitle={'3rd Party Certified Peace of Mind'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={148}
            secondLineMarginTop={138}
            lineBackgroundColor="#ffffff"
            color="#ffffff"
          />

          <ImageContainer
            style={{
              height: 396,
              justifyContent: 'center',
              backgroundColor: '#c9c7c7'
            }}
          >
            <IconBoxSection>
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon2} width={90} />
              <IconBox imgUrl={icon3} width={180} />

            </IconBoxSection>

            <IconBoxSection>
              <IconBox imgUrl={icon4} width={90} />
              <IconBox imgUrl={icon3} width={180} />
              <IconBox imgUrl={icon2} width={90} />
            </IconBoxSection>

            <IconBoxSection>
              <IconBox imgUrl={icon2} width={90} />
              <IconBox imgUrl={icon5} width={90} />
              <IconBox imgUrl={icon1} width={90} />
              <IconBox imgUrl={icon5} width={90} />
            </IconBoxSection>

          </ImageContainer>

          <TitleLineBox
            title="Other SAYA Partners"
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
              title="Textile Partners"
              backgroundImage={rightBox}
              paddingTop={70}
              fontColor="#ffffff"
            />

          </TitleLineBox>
        </MobileLayout>
      </div>
    )
  );