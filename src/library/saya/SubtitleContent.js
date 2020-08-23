import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from './ImageContainer';


const useStyles = makeStyles(theme => ({
  subtitle: {
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 80,
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    paddingTop: 7,
  },
}));

export default (props) => {
  const {
    backgroundImage,
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
      style={{ height, width: '100%', }}
    >
      <div
        style={{ position: 'absolute' ,color:fontColor,}}
      >
     
        <div className={classes.subtitle}>
          <pre style={{ fontFamily: 'FilsonSoft-Bold', marginBottom: 0, }}>{subtitle}</pre>
        </div>
        <div className={classes.content}>
          <pre style={{ fontFamily: 'FilsonSoftRegular',marginBottom: 0, }}>{content}</pre>
        </div>
        <div>
          {children}
        </div>
      </div>
    </ImageContainer>
  );
};
