import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from 'library/saya/Layout';
import TopSection from 'library/saya/Kenny/TopSection';
import EightyPercent from 'library/saya/Kenny/EightyPercent';
import Microfibers from 'library/saya/Kenny/Microfibers';
import OceanCycle from 'library/saya/Kenny/OceanCycle';
import SerialProjects from 'library/saya/Kenny/SerialProjects';

storiesOf('saya|CoastalDesktop1', module)
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
          <OceanCycle/>
          <SerialProjects/>
        </Layout>
      </div>
    )
  );