import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    height: 590,
    textAlign: 'center',
    color: '#ffffff',
  },
  title: {
    textAlign: 'left',
    fontSize: 33,
    paddingTop: 10,
  },
  secondLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#ffffff',
    marginTop: 2,
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 10,
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 10,
  },
}));

export default (props) => {
  const {
    title,
    subtitle,
    content,
    backgroundImage,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
      style={{ width: '100%', height: 590 }}
    >
      <div
        style={{ position: 'absolute' }}
      >
        <div className={classes.title}>
          <pre style={{ fontFamily: 'FilsonSoft-Bold' }}>{title}</pre>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.secondLine} />
        </div>

        <div className={classes.subtitle}>
          <pre style={{ fontFamily: 'FilsonSoft-Bold' }}>{subtitle}</pre>
        </div>
        <div style={{ flex: 0, height: 40, width: '100%' }} />
        <div className={classes.content}>
          <pre style={{ fontFamily: 'FilsonSoftRegular' }}>{content}</pre>
        </div>
      </div>
    </ImageContainer>
  );
};
