import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    width: 130,
    height: 45,
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#64703f',
    border: 'none',
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'FilsonSoft-Bold',
  },
};

class ImageBox extends React.PureComponent {
  render() {
    const {
      classes,
      marginTop,
      width,
      height,
      text,
    } = this.props;


    return (
      <div>
        <button className={classes.button} style={{ marginTop: marginTop, width: width, height: height, }} >
          {text}
        </button>
      </div>
    );
  }
}


export default withStyles(styles)(ImageBox);
