import React from 'react';
import { storiesOf } from '@storybook/react';

import TopSection from 'library/saya/Kenny/TopSection';
import Introduction from 'library/saya/Kenny/Introduction';
import ClassicFibers from 'library/saya/Kenny/ClassicFibers';
import ImageBoxSmall from 'library/saya/Kenny/ImageBoxSmall';

import Layout from '../../shared/Layout';

import background_TopSection from '../../img/bg58.jpg';
import introduction1 from '../../img/bg59.jpg';
import leftBox from '../../img/bg60.jpg';
import midBox from '../../img/bg61.jpg';
import rightBox from '../../img/bg62.jpg';

storiesOf('saya|Pages/Desktop/Partners', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Overview',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
   
          <TopSection
            firstTitle="PARTNERS"
            secondTitle="Partners in Sustainability "
            thirdTitle="It takes a village to achieve sustainability."
            backgroundImage={background_TopSection}
            fontColor="#ffffff"
            lineBorder="1px solid #ffffff"
            firstLineWidth="85px"
          />

          <div style={{ marginTop: 35 }}>
            <Introduction
              height="700px"
              backgroundImage={introduction1}
              title="It takes a village to achieve sustainability."
              subtitle="Help from you along with millions of first line waste collectors, like-minded manufacturers, brands, and conscious consumers, we create this global village."
              description={'It takes a village to raise a child, and it takes many more villages and expertise to mitigate the plastic mess we made (and making more everyday) as we shift to make circular-economy a reality. Help from you along with millions of first line waste collectors, like-minded manufacturers, brands, and conscious consumers, we create this global village.\n\nAs manufacturers, we understand the critical role we play in the supply chain as it relates to sustainability. We realize that our mission is interdependent upon the success of our partners and the networks we co-create. As we continuously strive to build a more sustainable business, we seek partners that share our core values. SAYA is honored to stand with these dedicated brands and organizations as we work together to grow our businesses and reduce our impacts.'}
              fontColor="#ffffff"
              titleWidth="445px"
              lineBorder="solid 1px #ffffff"
              subtitleWidth="620px"
              descriptionWidth="460px"
            />
          </div>

          <ClassicFibers
            title="Partners & Certifications"
            subtitle="To create the global village"
            height="910px"
            backgroundColor="#c9c7c7"
            fontColor="#000000"
            marginTop="0"
            borderStyle="1px solid #000000"
            boxWidth={900}
          >
            <ImageBoxSmall
              title="Textile Partners"
              backgroundImage={leftBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="150px"
            />
            <ImageBoxSmall
              title="Brand Partners"
              backgroundImage={midBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="150px"
            />
            <ImageBoxSmall
              title="Certifications"
              backgroundImage={rightBox}
              paddingTop='75px'
              fontColor="#ffffff"
              marginTop="150px"
            />
          </ClassicFibers>


      </Layout>
      // </div>
    )
  );
  