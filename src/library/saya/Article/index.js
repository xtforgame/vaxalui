/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';
import Block from './Block';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // textAlign: 'center',
    color: '#000000',
  },
  container: {
    width: 780,
  },
  title: {
    textAlign: 'left',
    fontSize: 40,
    marginBottom: 72,
  },
}));

export default (props) => {
  const {
    data,
    timestamp = new Date(),
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      className={classes.root}
    >
      <div className={classes.container}>
        {timestamp && (
          <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', fontSize: 14, lineHeight: 1.5, marginTop: 10, marginBottom: 20 }}>
            {moment(timestamp).format('LL')}
          </BreakAllContentText>
        )}
        <div className={classes.title}>
          <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold', lineHeight: 1 }}>
            {data.title}
          </BreakAllContentText>
        </div>
        {(data.content || []).map(c => (<Block data={c} />))}
      </div>
    </ImageContainer>
  );
};
