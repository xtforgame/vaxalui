import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import BreakAllContentText from '../BreakAllContentText';

const useStyles = makeStyles({
  light: {
    fontFamily: 'FilsonSoft-Light',
  },
  regular: {
    fontFamily: 'FilsonSoftRegular',
  },
  bold: {
    fontFamily: 'FilsonSoft-Bold',
  },
});

export default ({ family = '', className, ...props }) => {
  const classes = useStyles();
  let fontClass = classes.regular;
  switch (family) {
    case 'light':
      fontClass = classes.light;
      break;
    case 'bold':
      fontClass = classes.bold;
      break;
    default:
      break;
  }
  return (
    <BreakAllContentText
      {...props}
      className={clsx(fontClass, className)}
    />
  );
};
