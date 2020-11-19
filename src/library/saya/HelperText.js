import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import { graphql } from 'gatsby';
import TextField from './bob/TextField';
import Select from './Select';
import Button from './Button';
import Checkbox from './Checkbox';
import { isValidEmail } from '../utils/validators';
import subscriptionContext from './contexts/subscriptionContext';

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    color: '#c0c823',
  },
  error: {
    color: '#ff3a53',
  },
}));

export default (props) => {
  const {
    error,
    children,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={
        clsx(
          classes.text,
          { [classes.error]: error },
          className
        )
      }
    >
      {children}
    </div>
  );
};
