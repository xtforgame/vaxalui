import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height:190,
  },
  container: {
    width: '90%',
    position: "relative",
    display: 'flex',
    alignItems: 'center',
    overflow: 'scroll',
  },
  circle: {
    width: 106,
    height: 106,
    border: 'solid 1px #ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold',
  },
  icon: {
    marginLeft: 100,
    height: '100%',
    position: "absolute",
  }
}));

export default (props) => {
  const {
    content,
    icon,
    backgroundColor,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: backgroundColor }} >
      <div className={classes.container} >
        <pre className={classes.circle}>{content}</pre>
        <img className={classes.icon} src={icon} />
      </div>
    </div>
  );
};
