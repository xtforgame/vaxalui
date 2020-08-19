import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Button from 'library/saya/Button';

import {
  FlexRow,
  FlexColumn,
} from '../shared';

storiesOf('saya|Compnents/Buttons', module)
  // .addParameters({
  //   info: {
  //     inline: true,
  //     propTables: false,
  //     header: false,
  //     maxPropObjectKeys: 10,
  //     maxPropArrayLength: 10,
  //   },
  // })
  .add('Button',
    () => (
      <div style={{ margin: 16 }}>
        <FlexRow>
          <FlexColumn>
            <Button
              text="SUBMIT"
              onClick={null}
            />
          </FlexColumn>
        </FlexRow>
      </div>
    )
  );