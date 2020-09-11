import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    height: 717,
    textAlign: 'center',
  },
  title: {
    fontSize: 33,
    paddingTop: 88,
  },
  secondLine: {
    width: '100%',
    height: 1,
    marginTop: 2,
  },
  subtitle: {
    fontSize: 18,
    paddingTop: 10,
  },
  content: {
    fontSize: 18,
    paddingTop: 22,
  },
}));

export default (props) => {
  const {
    title,
    titleBack,
    subtitle,
    content,
    color,
    backgroundColor,
    children,
  } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <ImageContainer
        className={classes.root}
        style={{
          width: '100%', color, backgroundColor, overflow: 'scroll',
        }}
      >
        <div
          style={{ position: 'absolute', width: '80%', }}
        >
          <div className={classes.title}>
            <pre style={{ fontFamily: 'FilsonSoft-Bold', margin: 0 }}>
              {title}
              <span style={{ fontFamily: 'FilsonSoft-Light', }}>{titleBack}</span>
            </pre>
          </div>

          <div className={classes.subtitle}>
            <pre style={{ fontFamily: 'FilsonSoft-Bold', margin: 0 }}>{subtitle}</pre>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={classes.secondLine} style={{ backgroundColor: color }} />
          </div>

          {/* <div style={{ flex: 0, height: 40, width: '100%' }} /> */}
          <div className={classes.content}>
            <pre style={{ fontFamily: 'FilsonSoftRegular', margin: 0 }}>{content}</pre>
          </div>


          <div style={{
            display: 'flex', position: 'absolute', backgroundColor, marginTop: 57,
          }}>
            {children}
          </div>
        </div>
      </ImageContainer>
    </React.Fragment >
  );
};
