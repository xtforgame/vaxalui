import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Footer from 'library/saya/Footer';

import {
  FlexRow,
  FlexColumn,
} from '../../shared';

storiesOf('saya|Footer', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Footer',
    ()=>(
      <div style={{ margin: 16, width: '100%' }}>
        <FlexRow>
          <FlexColumn>
            <Footer />
          </FlexColumn>
        </FlexRow>
      </div>
    )
  );