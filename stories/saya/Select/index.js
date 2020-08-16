import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Select from 'library/saya/Select';

import {
  FlexRow,
  FlexColumn,
} from '../../shared';

storiesOf('saya|Compnents/Select', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Select',
    ()=>(
      <div style={{ margin: 16, width: '100%' }}>
        <FlexRow>
          <FlexColumn>
            <Select
              options={['English', 'Traditional Chinese']}
              value={'English'}
              onChange={() => {}}
            />
          </FlexColumn>
        </FlexRow>
      </div>
    )
  );