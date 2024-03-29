import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    cursor: 'pointer',
    minWidth: 128,
    height: 44,
    paddingTop: 6,
    textAlign: 'center',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold',
    '&:hover': {
      backgroundColor: '#c0c823',
    },
    '&:focus': {
      outline: 0,
    },
  },
  disabledButton: {
    color: '#ffffff',
    cursor: 'not-allowed',
    backgroundColor: '#444343',
    '&:hover': {
      backgroundColor: '#444343',
    },
    '&:focus': {
      outline: 0,
    },
  },
  outlinedButton: {
    border: 'solid 2px #FFFFFF',
  },
};


class GreenButton extends React.PureComponent {
  render() {
    const {
      classes,
      className,
      text,
      disabled = false,
      outlined = false,
      style,
      onClick = () => {},
    } = this.props;
    return (
      <button
        // disabled
        onClick={onClick}
        style={style}
        className={clsx(classes.button, className, { [classes.disabledButton]: disabled, [classes.outlinedButton]: outlined })}
      >
        {text}
      </button>

    );
  }
}


export default withStyles(styles)(GreenButton);
