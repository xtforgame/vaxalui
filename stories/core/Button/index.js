import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Button from '@material-ui/core/Button';

import {
  FlexRow,
  FlexColumn,
} from '../../shared';

storiesOf('core|Buttons/Buttons', module)
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
    ()=>(
      <div style={{ margin: 16 }}>
        <FlexRow>
          <FlexColumn>
            <Button onClick={null} variant="contained" style={{ marginBottom: 16 }} size="large" >{text('Text','Button')}</Button>
            <Button onClick={null} variant="outlined" style={{ marginBottom: 16 }} size="large" >{text('Text','Button')}</Button>
            <Button onClick={null} variant="text" style={{ marginBottom: 16 }} size="large" >{text('Text','Button')}</Button>
          </FlexColumn>
          <FlexColumn>
            <Button onClick={null} variant="contained" style={{ marginBottom: 16 }} >{text('Text','Button')}</Button>
            <Button onClick={null} variant="outlined" style={{ marginBottom: 16 }} >{text('Text','Button')}</Button>
            <Button onClick={null} variant="text" style={{ marginBottom: 16 }} >{text('Text','Button')}</Button>
          </FlexColumn>
          <FlexColumn>
            <Button onClick={null} variant="contained" style={{ marginBottom: 16 }} size="small" >{text('Text','Button')}</Button>
            <Button onClick={null} variant="outlined" style={{ marginBottom: 16 }} size="small" >{text('Text','Button')}</Button>
            <Button onClick={null} variant="text" style={{ marginBottom: 16 }} size="small" >{text('Text','Button')}</Button>
          </FlexColumn>
          <FlexColumn>
            <Button onClick={null} style={{ marginBottom: 16 }} size="large" >{text('Text','Button')}</Button>
            <Button onClick={null} style={{ marginBottom: 16 }} >{text('Text','Button')}</Button>
            <Button onClick={null} style={{ marginBottom: 16 }} size="small" >{text('Text','Button')}</Button>
          </FlexColumn>
          {/* <FlexColumn>
            <Button onClick={null} variant="outlined" style={{ marginBottom: 16 }} size="large" >{text('Text','Button')}</Button>
            <Button onClick={null} variant="outlined" style={{ marginBottom: 16 }} >{text('Text','Button')}</Button>
            <Button onClick={null} variant="outlined" style={{ marginBottom: 16 }} size="small" >{text('Text','Button')}</Button>
          </FlexColumn>
          <FlexColumn>
            <Button onClick={null} variant="text" style={{ marginBottom: 16 }} size="large" >{text('Text','Button')}</Button>
            <Button onClick={null} variant="text" style={{ marginBottom: 16 }} >{text('Text','Button')}</Button>
            <Button onClick={null} variant="text" style={{ marginBottom: 16 }} size="small" >{text('Text','Button')}</Button>
          </FlexColumn> */}
        </FlexRow>
      </div>
    )
  );