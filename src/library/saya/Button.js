/* eslint-disable react/button-has-type */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {

  button: {
    textAlign: 'center',
    backgroundColor: '#000000',
    border: 'solid 2px #FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 4,
    // I have no idea why outline appeared.
    outline: 'none',
    '&:hover': {
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },
  },
};

class Button extends React.PureComponent {
  render() {
    const {
      classes,
      children,
      width,
      height = 40,
      onClick,
    } = this.props;
    return (
      <button
        className={classes.button}
        style={{
          width,
          height,
          borderRadius: height / 2,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default withStyles(styles)(Button);
