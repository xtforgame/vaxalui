import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    minWidth: 130,
    height: 45,
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
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
};


class GreenButton extends React.PureComponent {
  render() {
    const {
      classes,
      text,
      onClick = () => {},
    } = this.props;
    return (
      <button onClick={onClick} className={classes.button}>
        {text}
      </button>

    );
  }
}


export default withStyles(styles)(GreenButton);
