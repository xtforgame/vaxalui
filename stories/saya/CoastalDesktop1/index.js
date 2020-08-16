import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import EightyPercent from 'library/saya/Kenny/EightyPercent';
import Microfibers from 'library/saya/Kenny/Microfibers';
import OceanCycle from 'library/saya/Kenny/OceanCycle';
import SerialProjects from 'library/saya/Kenny/SerialProjects';

import OceanCycleImg from '../img/ocean-cycle-218x300.png';
import Project1Img from '../img/bg12.jpg';
import Project2Img from '../img/bg13.jpg';


storiesOf('saya|Pages/Desktop', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('CoastalDesktop1',
    ()=>(
      <div style={{ width: '100%' }}>
        <Layout>
          <TopSection
            firstTitle="SAYA NOW Series"
            secondTitle="SAYA"
            secondTitleBack="COASTAL"
            thirdTitle="prevent Post-consumer PET Bottles from Being Washed into The Ocean"
          />
          <EightyPercent/>
          <Microfibers/>
          <OceanCycle
            backgroundImage={OceanCycleImg}
          />
          <SerialProjects
            background1Image={Project1Img}
            background2Image={Project2Img}
          />
        </Layout>
      </div>
    )
  );