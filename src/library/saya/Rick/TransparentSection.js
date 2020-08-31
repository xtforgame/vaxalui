import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'left',
    color: '#ffffff',
    width: '100%',
    backgroundSize: 'cover',
  },
  title: {
    textAlign: 'left',
    fontSize: 33,
  },
  line: {
    width: 305,
    backgroundColor: '#ffffff',
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
    lineHeight: 1.5,
  },
}));

export default (props) => {
  const {
    title,
    titlePaddingTop,
    marginTop,
    subtitle,
    content,
    height,
    backgroundImage,
    children,
  } = props;

  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        height: height,
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: titlePaddingTop,
        marginTop:marginTop,
      }} >
      <div
        style={{
          alignSelf: 'center',
        }}
      >
        <div className={classes.title}>
          <pre style={{ fontFamily: 'FilsonSoft-Bold', marginBottom: 0, }}>{title}</pre>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.line} />
        </div>

        <div className={classes.subtitle}>
          <pre style={{ fontFamily: 'FilsonSoft-Bold', marginBottom: 0, }}>{subtitle}</pre>
        </div>
        <div className={classes.content}>
          <pre style={{ fontFamily: 'FilsonSoftRegular', marginBottom: 0, }}>{content}</pre>
        </div>
      </div>
      <div>
        {children}
      </div>

    </div>
  );
};
