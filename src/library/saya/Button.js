/* eslint-disable react/button-has-type */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {

  button: {
    textAlign: 'center',
    backgroundColor: '#000000',
    border: 'solid 2px #ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 4,
  },
};

class Button extends React.PureComponent {
  render() {
    const {
      classes,
      children,
      width,
      height = 40,
    } = this.props;
    return (
      <button
        className={classes.button}
        style={{
          width,
          height,
          borderRadius: height / 2,
        }}
      >
        {children}
      </button>
    );
  }
}

export default withStyles(styles)(Button);
