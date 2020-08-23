import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 33,
    paddingTop: 47,
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 23,
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 4,
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 10,
    lineHeight:1.5,
  },
}));

export default (props) => {
  const {
    title,
    subtitle,
    content,
    height,
    backgroundImage,
    backgroundColor,
    color,
    lineColor,
    lineDisplay,
    children,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
      style={{
        height, color, width: '100%', backgroundColor: backgroundColor
      }}
    >
      <div
        style={{ position: 'absolute' }}
      >
        <div className={classes.title}>
          <pre style={{ fontFamily: 'FilsonSoft-Bold', marginBottom: 0, }}>{title}</pre>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.line} style={{ backgroundColor: lineColor, display: lineDisplay, }} />
        </div>

        <div className={classes.subtitle}>
          <pre style={{ fontFamily: 'FilsonSoft-Bold', marginBottom: 0, }}>{subtitle}</pre>
        </div>
        <div className={classes.content}>
          <pre style={{ fontFamily: 'FilsonSoftRegular', marginBottom: 0, }}>{content}</pre>
        </div>
        <div>
          {children}
        </div>
      </div>
    </ImageContainer>
  );
};
