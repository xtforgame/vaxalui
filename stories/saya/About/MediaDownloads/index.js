import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';
import MediaTable from 'library/saya/Kenny/MediaTable';
import ImageContainer from 'library/saya/ImageContainer';
import PartnerForm from 'library/saya/Kenny/PartnerForm';

import Layout from '../../shared/Layout';

import background_TopSection from '../../img/bg67.jpg';
import introduction1 from '../../img/bg68.jpg';
import leftBox from '../../img/bg69.jpg';
import midBox from '../../img/bg70.jpg';
import rightBox from '../../img/bg71.jpg';

storiesOf('saya|Pages/Desktop/About', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('MediaDownloads',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle="ABOUT"
            secondTitle="SAYA by Nan Ya"
            thirdTitle="Lorem ipsum dolor sit amet  "
            backgroundImage={background_TopSection}
            fontColor="#000000"
            lineBorder="1px solid #000000"
            firstLineWidth="60px"
            thirdTitleWidth="420px"
          />

          <div style={{ marginTop: 35 }}>
            <Introduction
              height="590px"
              backgroundImage={introduction1}
              title="Look Beyond the Label and Into the Conscience"
              subtitle="lor sit amet, consectetuer"
              description={'SAYA is able to push the boundaries thanks to its parent company Nan Ya Plastics, a branch of the Formosa Plastics Group, a family business founded by two brothers in 1954. More than 60 years later, Formosa has become one of the largest privately-held companies in Taiwan, and Forbes’ 1000 Largest Public Companies in the world.\n\nAs a global leader in performance fibers, Nan Ya has committed to reliably deliver quality, innovative products through a transparent supply chain. By fostering close partnerships, creating responsible solutions and improving the environmental performance of all their products, Nan Ya continues to innovate to stay ahead of fast-moving market trends and raise the bar of the entire industry.'}
              titleWidth="540px"
              fontColor="#ffffff"
              lineBorder="solid 1px #ffffff"
              descriptionWidth="460px"
            />
          </div>
          <div style={{ marginTop: 35 }}>
            <ImageContainer>
              <MediaTable
                title="Papers and Education"
                rows={[
                  {
                    id: 1,
                    name: 'Sustainability Report 2020',
                    linkName: 'Please subscribe our newsletter to download',
                    body: (
                      <div>
                        <div style={{ padding: 20, backgroundColor: '#e5e5e5' }}>
                          <PartnerForm />
                        </div>
                        <div style={{ height: 20, width: '100%' }} />
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
            title="Related Informations"
            height="730px"
            fontColor="#000000"
            boxWidth={900}
            lineBorder="solid 1px #979797"
            backgroundColor="#e5e5e5"
          >
            <ImageBoxSmall
              title="News"
              backgroundImage={leftBox}
              paddingTop="75px"
              fontColor="#ffffff"
              marginTop="150px"

            />
            <ImageBoxSmall
              title="Vison"
              secondTitle="& Mission"
              backgroundImage={midBox}
              titleWidth="105px"
              paddingTop="50px"
              fontColor="#000000"
              marginTop="125px"
            />
            <ImageBoxSmall
              title="Medias"
              secondTitle="& Downloads"
              backgroundImage={rightBox}
              titleWidth="155px"
              paddingTop="50px"
              fontColor="#ffffff"
              marginTop="125px"
            />
          </TitleLineBox>

        </Layout>
      </div>
    ));
