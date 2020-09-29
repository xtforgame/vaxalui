import React from 'react';
import { storiesOf } from '@storybook/react';
import SolidBackbone from 'library/saya/bob/SolidBackbone';
import Introduction2 from 'library/saya/bob/Introduction2';

import bg from '../../../img/bg01.jpg';
import world from '../../../img/fig06.svg';

import Layout from '../../../shared/Layout';

storiesOf('saya|Pages/NewDesktop', module)
  .add('Module8',
    () => (
      <div style={{ width: '100%' }}>
        <Layout>
          <SolidBackbone
            backgroundImage={bg}
            firstTitle="BOTTLES"
            secondTitle="Solid Backbone of our Sustainable Fibers"
            thirdTitle="Less Footprint, More Identity"
            block={[
              {
                color: '#000000',
                num: '13',
                top: 'bottle recycling facilities ',
                bottom: 'worldwide',
                bg: '#c8c6c6',
              },
              {
                color: '#000000',
                num: '75',
                top: 'billion bottles ',
                bottom: 'every year',
                bg: '#FFFFFF',
              }
            ]}
          />
          <Introduction2
            backgroundColor="#e3e3e3"
            title="Global Recycling Network"
            subtitle="Transparency and capacity to grow with you"
            fontColor="#000000"
            titleWidth="780px"
            lineBorder="solid 1px #000000"
            subtitleWidth="780px"
            descriptionWidth="780px"
            description="Based in Taiwan, SAYA’s PET bottle recovery and renewal map spans throughout Asia including China, Japan, Philippines, Thailand and Vietnam. In recent years, collection efforts have expanded into regions of the USA and South America. SAYA continues to innovate our manufacturing processes and expand our sources for recycled fiber."
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                marginTop: -184,
                marginBottom: 52
                }}
              >
              <img src={world} />
            </div>
          </Introduction2>
        </Layout>
      </div>
    )
  );
  