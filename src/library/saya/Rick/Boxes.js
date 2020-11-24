import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CenteredContainer from '../CenteredContainer';
import ImageContainer from '../ImageContainer';
import { Slide } from '../reveal';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    paddingTop: 60,
  },
  outerContainer: {
    width: '100%',
    overflow: 'hidden',
    marginTop: 6,
    paddingLeft: 'calc(50% - 160px)',
    paddingTop: 60,
    textAlign: 'center',
  },
  innerContainer: {
    paddingRight: 'calc(100% - 320px)',
  },
  secondLine: {
    width: '100%',
    height: 1,
    marginTop: 24,
  },
  subtitle: {
    fontSize: 13,
    paddingTop: 15,
  },
  content: {
    fontSize: 13,
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
      <CenteredContainer
        style={{
          color,
          backgroundColor,
        }}
      >
        <div className={classes.outerContainer}>
          <div className={classes.innerContainer}>
            <div className={classes.title}>
              <pre style={{ fontFamily: 'FilsonSoft-Bold', margin: 0 }}>
                {title}
                <span style={{ fontFamily: 'FilsonSoft-Light', }}>{titleBack}</span>
              </pre>
            </div>

            <div className={classes.subtitle}>
              <pre style={{ fontFamily: 'FilsonSoft-Bold', margin: 0 }}>{subtitle}</pre>
            </div>

            <div className={classes.secondLine} style={{ backgroundColor: color }} />

            {/* <div style={{ flex: 0, height: 40, width: '100%' }} /> */}
            <div className={classes.content}>
              <pre style={{ fontFamily: 'FilsonSoftRegular', margin: 0 }}>{content}</pre>
            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', overflow: 'scroll', marginTop: 40, marginBottom: 95 }}>
            <div style={{ display: 'flex' }}>
              {children}
            </div>
          </div>
        </div>
      </CenteredContainer>
    </React.Fragment>
  );
};
