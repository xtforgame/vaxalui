import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import TitleLineBox from 'library/saya/Kenny/TitleLineBox';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';
import Post from 'library/saya/Post';
import Card from 'library/saya/Card';

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
          <TopSection
            firstTitle="ABOUT"
            secondTitle="News"
            thirdTitle="Lorem ipsum dolor sit amet  "
            backgroundImage={background_TopSection}
            fontColor="#ffffff"
            lineBorder="1px solid #ffffff"
            firstLineWidth="60px"
            thirdTitleWidth="420px"
          />

          <div style={{ marginTop: 35 }}>
            <Post
              image={articlePic1}
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
            />
            <Card
              title="Recycled vs. Recyclable"
              description="Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash..."
              image={articlePic2}
            />
            <Card
              title="Mechanical Recycling"
              description='Mechanical recycling transforms materials into "new" secondary raw materials without changing the base...'
              image={articlePic3}
            />
            <Card
              title="Chemical Recycling"
              description="Chemical recycling, also called advanced recycling,  is taking  plastic waste  and reducing it back to its..."
              image={articlePic4}
            />
          </TitleLineBox>

        </Layout>
      </div>
    )
  );