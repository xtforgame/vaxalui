/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';
import Block from '../Article/Block';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // textAlign: 'center',
    color: '#000000',
  },
  container: {
    width: 310,
  },
  title: {
    textAlign: 'left',
    fontSize: 32,
    marginBottom: 40,
  },
}));

export default (props) => {
  const {
    data,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      className={classes.root}
    >
      <div className={classes.container}>
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
