import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection2 from 'library/saya/Rick/TopSection2';
import MediaTable from 'library/saya/Rick/MediaTable';
import ImageContainer from 'library/saya/ImageContainer';
import PartnerForm from 'library/saya/Rick/PartnerForm';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';
import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection from '../../../img/mobile/m_banner12.jpg';

storiesOf('saya|Pages/NewMobile', module)
  .add('Media',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection2
            height={350}
            firstTitle="ABOUT"
            title="Media"
            backgroundImage={background_TopSection}
            titleFontFamily="light"
          />

          <div style={{ marginTop: 6 }}>
            <ImageContainer>
              <MediaTable
                title="Papers and Education"
                rows={[
                  {
                    id: 1,
                    name: 'Sustainability Report 2020',
                    body: (
                      <div>
                        <div style={{ fontFamily: 'FilsonSoftRegular', fontSize: 12, color: '#64703f', }}>
                          Please subscribe our newsletter to download
                        </div>
                        <div
                          style={{
                            height: 300,
                            marginTop: 11,
                            paddingTop: 22,
                            paddingBottom: 22,
                            paddingLeft: 20,
                            paddingRight: 20,
                            backgroundColor: '#e5e5e5',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                          <PartnerForm />
                        </div>
                        <div style={{ height: 11, width: '100%' }} />
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
              <div style={{ width: '100%', height: 0 }} />
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
              <div style={{ width: '100%', height: 0 }} />
              <MediaTable
                title="Press Releases"
                rows={[
                  {
                    id: 1,
                    name: 'Nam dapibus nisl vitae elit fringilla rutrum - aenean sollicitudin',
                    linkName: 'Download',
                    url: 'x',
                  },
                ]}
              />
              <div style={{ width: '100%', height: 60 }} />
            </ImageContainer>
          </div>

          <div style={{ marginTop: 6 }}>
            <TechnologyProjects
              title="Explore More"
              backgroundColor="#e3e3e3"
              list={[
                {
                  title: "Renewed Fiber is the Name of the Game",
                  buttonText: "Learn More",
                  disabled: false,
                  type: <span>ABOUT SAYA</span>,
                },
                {
                  title: "NEWS",
                  buttonText: "Learn More",
                  disabled: false,
                  type: '',
                },
              ]}
            />
          </div>
        </MobileLayout>
      </div>
    )
  );