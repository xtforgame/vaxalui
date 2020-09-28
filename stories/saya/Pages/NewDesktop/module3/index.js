import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection2 from 'library/saya/bob/TopSection2';
import PaperAndEducation from 'library/saya/bob/PaperAndEducation';
import TechnologyProjects from 'library/saya/bob/TechnologyProjects';

import Layout from '../../../shared/Layout';

import background_TopSection from '../../../img/banner12.jpg';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Module3',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection2
            firstTitle={
              <>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>ABOUT</span>
              </>
            }
            secondTitle="Media & Downloads"
            backgroundImage={background_TopSection}
          />
          <PaperAndEducation
          
          />
          <TechnologyProjects
            title="More About SAYA"
            backgroundColor="#e3e3e3"
            list={[
              {
                title: "Renewed Fiber is the Name of the Game",
                buttonText: "Learn More",
                disabled: false,
                type: <span>SAYA</span>,
              },
              {
                title: "Backbone of our sustainable textile business",
                buttonText: "Learn More",
                disabled: false,
                type: '',
              },
            ]}
          />
        </Layout>
      </div>
    )
  );