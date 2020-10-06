import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    marginBottom: -1,
  },
}));

export default (props) => {
  const {
    children,
    color = '#e8e8e8',
  } = props;

  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        borderTopColor: color,
        borderBottomColor: color,
      }}
    >
      {children}
    </div>
  );
}
