import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection3 from 'library/saya/Rick/TopSection3';
import MobileArticle from 'library/saya/MobileArticle';
// import SayaBreadcrumbs from 'library/saya/Rick/Breadcrumbs';
import Breadcrumbs from 'library/saya/Rick/Breadcrumbs';
import ImageContainer from 'library/saya/ImageContainer';
import MobileCardSmall from 'library/saya/MobileCardSmall';
import TechnologyProjects from 'library/saya/Rick/TechnologyProjects';

import MobileLayout from '../../../shared/MobileLayout';

import background_TopSection from '../../../img/mobile/m_pic1_0.jpg';
import articlePic1 from '../../../img/mobile/m_pic1_1.jpg';
import articlePic2 from '../../../img/mobile/m_pic2.jpg';
import articlePic3 from '../../../img/mobile/m_pic3.jpg';
import articlePic4 from '../../../img/mobile/m_pic4.jpg';

const article = {
  id: 1,
  title: 'What is post-consumer recycled polyester',
  content: [
    { type: 'paragraph', text: 'Recycled polyester (rPET) is obtained by melting down existing plastic and re-spinning it into new polyester fiber. Often rPET is made from plastic bottles but it can also be derived from other post-industrial and post-consumer input materials including textiles or garments. If recycled content is labeled post-consumer some of the content has been derived from used items or garments as opposed to post-industrial recycled content which never reached the consumer such as cutting scraps from a manufacturing facility.' },
    { type: 'image', src: articlePic1 },
    { type: 'paragraph', text: 'Using rPET gives a second life to a material that’s not biodegradable and would otherwise end up in landfill or the ocean. The Environmental Protection Agency reported that US’s landfills receive over 26 million tons of plastic a year and Ocean Conservancy reports that 8 million metric tons of plastic enter the ocean every year.' },
    { type: 'paragraph', text: 'In addition, production of fiber or products using rPET over virgin plastic requires less energy and produces less CO2 and it contributes to reducing the extraction of crude oil and natural gas from the Earth to make more plastic.' },
  ],
};

storiesOf('saya|Pages/NewMobile', module)
  .add('KnowledgeBaseArticle',
    () => (
      <div style={{ width: '100%' }}>
        <MobileLayout>
          <TopSection3
            height={555}
            firstTitle="KNOWLEDGE BASE"
            title={'What is post-\nconsumer\nrecycled polyester'}
            backgroundImage={background_TopSection}
            titleFontFamily="bold"
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              marginTop: 40,
            }}
          >
            <Breadcrumbs
              separatorColor="#000000"
              bread={[
                { name: <span style={{ fontSize: 12, fontFamily: 'FilsonSoftRegular', color: 'black' }}>Technology</span>, path: '/about' },
                { name: <span style={{ fontSize: 12, fontFamily: 'FilsonSoftRegular', color: 'black' }}>Knowledge Base</span>, path: '/news' },
                { name: <span style={{ fontSize: 12, fontFamily: 'FilsonSoft-Bold', color: 'black' }}>What is post-consumer recycled polyester</span>, path: '/wiprp' }
              ]}
            />
          </div>
          <div style={{ marginTop: 40, marginBottom: 60 }}>
            <MobileArticle
              data={article}
            />
          </div>
          <ImageContainer
            style={{
              height: 582,
              backgroundColor: '#c8c6c6',
              overflow: 'scroll',
              marginTop: 6,
            }}
          >
            <div
              style={{
                height: 0,
                fontFamily: 'FilsonSoft-Bold',
                fontSize: 18,
                paddingTop: 60,
                position: 'absolute',
                width: '80%',
              }}
            >
              Other Articles
              <div style={{ width: '100%', height: 1, marginTop: 14, backgroundColor: '#000000' }} />
            </div>
            <div style={{ display: 'flex', width: '90%', marginTop: 138, }}>
              <div style={{ position: 'absolute', display: 'flex', }}>
                <MobileCardSmall
                  title="Recycled vs. Recyclable"
                  description="Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash..."
                  image={articlePic2}
                  width={260}
                  height={205}
                />
                <MobileCardSmall
                  title="Mechanical Recycling"
                  description='Mechanical recycling transforms materials into "new" secondary raw materials without changing the base...'
                  image={articlePic3}
                  width={260}
                  height={205}
                />
                <MobileCardSmall
                  title="Chemical Recycling"
                  description="Chemical recycling, also called advanced recycling,  is taking  plastic waste  and reducing it back to its..."
                  image={articlePic4}
                  width={260}
                  height={205}
                />
              </div>
            </div>
          </ImageContainer>

          <div style={{ marginTop: 6 }}>
            <TechnologyProjects
              height={806}
              title="Explore More"
              backgroundColor="#e3e3e3"
              list={[
                {
                  title: "Upgrade Your Bottle Renewal Technology",
                  buttonText: "Learn More",
                  disabled: false,
                  type: <span>BOTTLES</span>,
                },
                {
                  title: "Cutting Scraps and Overstocks",
                  buttonText: "Learn More",
                  disabled: false,
                  type: <span>RSCUW / SAYA</span>,
                  typeBack: <span>NEXT</span>
                },
                {
                  title: "Used Garment to Fiber Solution",
                  buttonText: "Coming Soon",
                  disabled: true,
                  type: <span>GARMA / SAYA</span>,
                  typeBack: <span>NEXT</span>
                },
              ]}
            />
          </div>
        </MobileLayout>
      </div>
    )
  );