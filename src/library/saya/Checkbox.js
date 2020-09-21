import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  checkbox: {
    width: 30,
    height: 30,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 2,
    color: 'white',
    borderColor: 'black',
    backgroundColor: 'white',
  },
  checked: {
    color: 'black',
    // backgroundColor: 'black',
  },
}));

export default (props) => {
  const {
    checked: c,
    onChecked = (() => {}),
  } = props;

  const classes = useStyles();

  const [checked, setChecked] = useState(c || false);

  return (
    <div
      className={clsx(classes.checkbox, { [classes.checked]: checked })}
      onClick={() => {
        setChecked(!checked);
        onChecked(!checked);
      }}
    >
      <DoneIcon />
    </div>
  );
};
