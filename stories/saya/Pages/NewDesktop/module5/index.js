import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection2 from 'library/saya/bob/TopSection2';
import Article from 'library/saya/Article';
import SayaBreadcrumbs from 'library/saya/Rick/Breadcrumbs';
import Breadcrumbs from 'library/saya/bob/Breadcrumbs';
import OtherArticles from 'library/saya/bob/OtherArticles';
import Layout from '../../../shared/Layout';

import background_TopSection from '../../../img/banner12.jpg';
import articlePic1 from '../../../img/pic1_1.jpg';

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

storiesOf('saya|Pages/NewDesktop', module)
  .add('Module5',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection2
            firstTitle={
              <>
                <span style={{ fontFamily: 'FilsonSoft-Bold' }}>ABOUT</span>
              </>
            }
            secondTitle="News"
            backgroundImage={background_TopSection}
          />
          {/* <SayaBreadcrumbs
            data={[
              { label: 'About' },
              { label: 'News' },
              { label: 'What is post-consumer recycled polyester' },
            ]}
          /> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 60,
            }}
          >
            <Breadcrumbs
              separatorColor="#000000"
              bread={[
                { name: <span style={{ fontSize: 14, fontFamily: 'FilsonSoftRegular', color: 'black' }}>About</span>, path: '/about' },
                { name: <span style={{ fontSize: 14, fontFamily: 'FilsonSoftRegular', color: 'black' }}>News</span>, path: '/news' },
                { name: <span style={{ fontSize: 14, fontFamily: 'FilsonSoft-Bold', color: 'black' }}>What is post-consumer recycled polyester</span>, path: '/wiprp' }
              ]}
            />
          </div>
          <div style={{ marginTop: 72, marginBottom: 20 }}>
            <Article
              data={article}
            />
          </div>
          <OtherArticles
            backgroundColor="#c8c6c6"
            item={[
              {
                height: 290,
                width: 300,
                title: 'Recycled vs. Recyclable',
                description: 'Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash...',
                image: background_TopSection,
                onClick: () => {}
              },
              {
                height: 290,
                width: 300,
                title: 'Recycled vs. Recyclable',
                description: 'Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash...',
                image: background_TopSection,
                onClick: () => {}
              },
              {
                height: 290,
                width: 300,
                title: 'Recycled vs. Recyclable',
                description: 'Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash...',
                image: background_TopSection,
                onClick: () => {}
              },
            ]}
          />
        </Layout>
      </div>
    )
  );