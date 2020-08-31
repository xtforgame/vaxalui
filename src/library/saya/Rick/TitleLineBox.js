import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    height: 631,
    textAlign: 'left',
    paddingTop: 70,
  },
  title: {
    fontSize: 18,
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 5,
  },

}));

export default (props) => {
  const {
    title,
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
            <pre style={{ fontFamily: 'FilsonSoft-Bold', }}>{title}</pre>
          </div>

          <div style={{ display: 'flex', }}>
            <div className={classes.line} style={{ backgroundColor: color }} />
          </div>

          <div style={{
            position: 'absolute',
            display: 'flex',
            marginTop: 56,
          }}>
            {children}
          </div>

        </div>
      </ImageContainer>
    </React.Fragment>
  );
};
