import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Rick/TopSection';
import ImageContainer from 'library/saya/ImageContainer';
import TitleLineBox from 'library/saya/Rick/TitleLineBox';
import ImageBoxSmall from 'library/saya/Rick/ImageBoxSmall';
import MediaTable from 'library/saya/Rick/MediaTable';
import PartnerForm from 'library/saya/Rick/PartnerForm';

import MobileLayout from '../shared/MobileLayout';

import MobileBg1 from '../img/mobile/m_bg68.jpg'
import leftBox from '../img/mobile/m_bg66.jpg';
import rightBox from '../img/mobile/m_bg40.jpg';


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
  .add('MobileMediaDownloads',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection
            firstTitle="ABOUT"
            secondTitle={'Media\n&\nDownloads'}
            thirdTitle={'Renewed Fiber Is\nthe Name of the Game'}
            backgroundImage={MobileBg1}
            secondTitlePaddingTop={92}
            secondLineMarginTop={82}
            color="#ffffff"
            lineBackgroundColor="#ffffff"
          />

          <div style={{ marginTop: 80 }}>
            <ImageContainer>
              <MediaTable
                title="Papers and Education"
                rows={[
                  {
                    id: 1,
                    name: 'Sustainability Report 2020',
                    body: (
                      <div>
                        <div style={{ fontFamily: 'FilsonSoftRegular', fontSize: 14, color: '#64703f', }}>
                          Please subscribe our newsletter to download
                      </div>
                        <div style={{ padding: 23, marginTop: 11, backgroundColor: '#e5e5e5', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                          <PartnerForm />
                        </div>
                        <div style={{ height: 23, width: '100%' }} />
                      </div>
                    ),
                  },
                  {
                    id: 2,
                    name: 'Promostyl',
                    linkName: 'Download',
                    url: 'x',
                  },
                  {
                    id: 3,
                    name: 'Tools',
                    linkName: 'Download',
                    url: 'x',
                  },
                ]}
              />
              <div style={{ width: '100%', height: 90 }} />
              <MediaTable
                title="Artworks"
                rows={[
                  {
                    id: 1,
                    name: 'Hangtag',
                    linkName: 'Download',
                    url: 'x',
                  },
                  {
                    id: 2,
                    name: 'Posters ',
                    linkName: 'Download',
                    url: 'x',
                  },
                  {
                    id: 3,
                    name: 'Wall Paper',
                    linkName: 'Download',
                    url: 'x',
                  },
                ]}
              />
              <div style={{ width: '100%', height: 90 }} />
              <MediaTable
                title="Press Releases"
                rows={[
                  {
                    id: 1,
                    name: 'Lorem',
                    linkName: 'Download',
                    url: 'x',
                  },
                  {
                    id: 2,
                    name: 'Lorem',
                    linkName: 'Download',
                    url: 'x',
                  },
                ]}
              />
              <div style={{ width: '100%', height: 90 }} />
            </ImageContainer>
          </div>

          <TitleLineBox
            title="About SAYA"
            backgroundColor="#e5e5e5"
            color="#000000"
          >

            <ImageBoxSmall
              title={'News'}
              backgroundImage={leftBox}
              paddingTop={70}
              fontColor="#ffffff"
            />
            <ImageBoxSmall
              title={'About\nSAYA'}
              backgroundImage={rightBox}
              paddingTop={53}
              fontColor="#000000"
            />
          </TitleLineBox>
        </MobileLayout>
      </div>
    )
  );