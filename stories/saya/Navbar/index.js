import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Navbar from 'library/saya/Navbar';

import {
  FlexRow,
  FlexColumn,
} from '../../shared';

storiesOf('saya|Compnents/Navbar', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Navbar',
    ()=>(
      <div style={{ margin: 16, width: '100%' }}>
        <FlexRow>
          <FlexColumn>
            <Navbar />
          </FlexColumn>
        </FlexRow>
      </div>
    )
  );