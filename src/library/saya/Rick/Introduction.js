import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 590,
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    position: 'relative',
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
    <CardMedia
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
    </CardMedia>
  );
}
