/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // textAlign: 'center',
    color: '#000000',
  },
  container: {
    width: 940,
  },
  title: {
    textAlign: 'left',
    fontSize: 40,
    marginTop: 10,
    marginBottom: 72,
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 14,
    marginBottom: 72,
  },
  image: {
    marginBottom: 72,
  },
}));

export default (props) => {
  const {
    data,
  } = props;

  const classes = useStyles();

  const renderContent = (content, key) => {
    if (content.type === 'paragraph') {
      return (
        <div key={key} className={classes.paragraph}>
          <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', lineHeight: 2 }}>
            {content.text}
          </BreakAllContentText>
        </div>
      );
    } else if (content.type === 'image') {
      return (
        <div className={classes.image}>
          <img
            width="100%"
            src={content.src}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <ImageContainer
      className={classes.root}
    >
      <div className={classes.container}>
        <div className={classes.title}>
          <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>
            {data.title}
          </BreakAllContentText>
        </div>
        {(data.content || []).map(renderContent)}
      </div>
    </ImageContainer>
  );
};
