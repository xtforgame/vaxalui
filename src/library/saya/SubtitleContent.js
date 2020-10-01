import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from './ImageContainer';


const useStyles = makeStyles(theme => ({
  subtitle: {
    textAlign: 'left',
    fontSize: 20,
  },
  content: {
    textAlign: 'left',
    fontSize: 13,
    lineHeight: 1.54,
    paddingTop: 24,
  },
}));

export default (props) => {
  const {
    paddingTop,
    backgroundImage,
    backgroundColor,
    fontColor,
    height,
    content,
    subtitle,
    children,
  } = props;

  const classes = useStyles();

  return (
    <ImageContainer
      image={backgroundImage}
      className={classes.root}
      style={{ height, backgroundColor, width: '100%', paddingTop: paddingTop, }}
    >
      <div
        style={{ position: 'absolute', color: fontColor,width: 320 }}
      >

        <div className={classes.subtitle}>
          <pre style={{ fontFamily: 'FilsonSoft-Bold', margin: 0 }}>{subtitle}</pre>
        </div>
        <div className={classes.content}>
          <pre style={{ fontFamily: 'FilsonSoftRegular', margin: 0, }}>{content}</pre>
        </div>
        <div>
          {children}
        </div>
      </div>
    </ImageContainer>
  );
};
