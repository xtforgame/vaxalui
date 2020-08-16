import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import TextField from 'library/saya/TextField';

import {
  FlexRow,
  FlexColumn,
} from '../../shared';

storiesOf('saya|Compnents/TextField', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('TextField',
    ()=>(
      <div style={{ margin: 16, width: '100%' }}>
        <FlexRow>
          <FlexColumn>
            <TextField
              style={{ width: '100%' }}
              value="xxx@xxx.xxx"
              onChange={() => {}}
              placeholder="Your email address"
            />
          </FlexColumn>
        </FlexRow>
      </div>
    )
  );