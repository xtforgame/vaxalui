import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import Introduction from 'library/saya/Rick/Introduction';
import ImageContainer from 'library/saya/ImageContainer';
import IconBox from 'library/saya/Rick/IconBox';
import IconBoxSection from 'library/saya/Rick/IconBoxSection';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';

import MobileLayout from '../../shared/MobileLayout';

import MobileBg1 from '../../img/mobile/m_bg53.jpg'
import MobileBg2 from '../../img/mobile/m_bg54.jpg'
import icon1 from '../../img/icon15.svg'
import icon2 from '../../img/icon16.svg';
import icon3 from '../../img/icon17.svg';
import icon4 from '../../img/icon18.svg';
import leftBox from '../../img/mobile/m_bg58.jpg';
import rightBox from '../../img/mobile/m_bg21.jpg';


storiesOf('saya|Pages/Mobile/MobilePartners', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('BrandPartners',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="PARTNERS"
            secondTitle={'Brand\nPartners'}
            thirdTitle={'Design with Peace of Mind,\nand Good Conscience'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={115}
            secondLineMarginTop={106}
            lineBackgroundColor="#ffffff"
            color="#ffffff"
          />

          <div style={{ marginTop: 23, }}>
            <Introduction
              height={575}
              title={'Design with Peace\nof Mind, and Good\nConscience'}
              subtitle={'Building Blocks Behind Every\nGreat Product'}
              content={`Cras quis nulla commodo, aliquam lectus sed,\nblandit augue. Cras ullamcorper bibendum\nbibendum.Duis tincidunt urna non pretium\nporta. Nam condimentum vitae ligula vel\nornare. Phasellus at semper turpis. Nunc eu\ntellus tortor. Etiam at condimentum nisl, vitae\nsagittis orci. Donec id dignissim nunc. Donec\nelit ante, eleifend a dolor et, venenatis facilisis\ndolor.`}
              backgroundImage={MobileBg2}
              color="#ffffff"
              lineColor="#ffffff"
            />
          </div>

          <ImageContainer
            style={{
              height: 165,
              backgroundColor: '#c0c823',
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
              height: 486,
              justifyContent: 'center',
              backgroundColor: '#444343'
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
              <IconBox width={90} />
              <IconBox width={90} />
            </IconBoxSection>
          </ImageContainer>

          <TitleLineBox
            title="Other SAYA Partners"
            backgroundColor="#ffffff"
            color="#000000"
          >
            <ImageBoxSmall
              title="Textile Partners"
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