import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';
import Post from 'library/saya/Post';
import Article from 'library/saya/Article';
import Card from 'library/saya/Card';
import SayaBreadcrumbs from 'library/saya/Rick/Breadcrumbs';

import Layout from '../../shared/Layout';

import background_TopSection from '../../img/bg74.jpg';
import introduction1 from '../../img/bg68.jpg';
import leftBox from '../../img/bg69.jpg';
import midBox from '../../img/bg70.jpg';
import rightBox from '../../img/bg71.jpg';

import articlePic1 from '../../img/pic1_1.jpg';
import articlePic2 from '../../img/pic2_s.jpg';
import articlePic3 from '../../img/pic3_s.jpg';
import articlePic4 from '../../img/pic4_s.jpg';

const article = {
  id: 1,
  title: 'What is post-consumer\nrecycled polyester',
  content: [
    { type: 'paragraph', text: 'Recycled polyester (rPET) is obtained by melting down existing plastic and re-spinning it into new polyester fiber. Often rPET is made from plastic bottles but it can also be derived from other post-industrial and post-consumer input materials including textiles or garments. If recycled content is labeled post-consumer some of the content has been derived from used items or garments as opposed to post-industrial recycled content which never reached the consumer such as cutting scraps from a manufacturing facility.' },
    { type: 'image', src: articlePic1 },
    { type: 'paragraph', text: 'Using rPET gives a second life to a material that’s not biodegradable and would otherwise end up in landfill or the ocean. The Environmental Protection Agency reported that US’s landfills receive over 26 million tons of plastic a year and Ocean Conservancy reports that 8 million metric tons of plastic enter the ocean every year.' },
    { type: 'paragraph', text: 'In addition, production of fiber or products using rPET over virgin plastic requires less energy and produces less CO2 and it contributes to reducing the extraction of crude oil and natural gas from the Earth to make more plastic.' },
  ],
};

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
  .add('News',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <SayaBreadcrumbs
            data={[
              { label: 'About' },
              { label: 'News' },
              { label: 'What is post-consumer recycled polyester' },
            ]}
          />
          <div style={{ marginTop: 35 }}>
            <Article
              data={article}
            />
          </div>
          <TitleLineBox
            title="SAYA NOW Serial Projects"
            height={1400}
            fontColor="#000000"
            boxWidth={900}
            lineBorder="solid 1px #979797"
            backgroundColor="#e5e5e5"
          >
            <Card
              title="What is Post-consumer Recycled Polyester"
              description="Recycled polyester (rPET) is obtained by melting down existing plastic and re-spinning it into new polyester fiber."
              image={articlePic1}
              width={368}
              height={324}
            />
            <Card
              title="Recycled vs. Recyclable"
              description="Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash..."
              image={articlePic2}
              width={368}
              height={324}
            />
            <Card
              title="Mechanical Recycling"
              description='Mechanical recycling transforms materials into "new" secondary raw materials without changing the base...'
              image={articlePic3}
              width={368}
              height={324}
            />
            <Card
              title="Chemical Recycling"
              description="Chemical recycling, also called advanced recycling,  is taking  plastic waste  and reducing it back to its..."
              image={articlePic4}
              width={368}
              height={324}
            />
          </TitleLineBox>
        </Layout>
      </div>
    )
  );