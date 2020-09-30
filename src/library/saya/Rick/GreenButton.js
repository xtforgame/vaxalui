import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    cursor: 'pointer',
    minWidth: 160,
    height: 50,
    textAlign: 'center',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    '&:hover': {
      backgroundColor: '#c0c823',
    },
  },
  disabledButton: {
    color: '#ffffff',
    cursor: 'not-allowed',
    backgroundColor: '#444343',
    '&:hover': {
      backgroundColor: '#444343',
    },
  }
};


class GreenButton extends React.PureComponent {
  render() {
    const {
      classes,
      text,
      disabled = false,
      onClick = () => {},
    } = this.props;
    return (
      <button
        disabled
        onClick={onClick}
        className={clsx(classes.button, { [classes.disabledButton]: disabled })}
      >
        {text}
      </button>

    );
  }
}


export default withStyles(styles)(GreenButton);
