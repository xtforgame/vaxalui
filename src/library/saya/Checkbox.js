import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  checkbox: {
    width: 30,
    height: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0,
    color: 'transparent',
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
  darkTheme: {
    borderWidth: 2,
    color: '#000000',
    borderColor: '#FFFFFF',
    backgroundColor: '#000000',
  },
  checked: {
    color: '#000000',
  },
  darkThemeChecked: {
    color: '#FFFFFF',
  },
  error: {
    borderColor: '#ff3a53',
  },
}));

export default (props) => {
  const {
    checked = false,
    setChecked = (() => {}),
    darkTheme,
    error,
  } = props;

  const classes = useStyles();

  return (
    <div
      className={
        clsx(
          classes.checkbox, {
            [classes.checked]: !darkTheme && checked,
            [classes.darkThemeChecked]: darkTheme && checked,
            [classes.darkTheme]: darkTheme,
            [classes.error]: error,
          }
        )
      }
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <DoneIcon />
    </div>
  );
};
