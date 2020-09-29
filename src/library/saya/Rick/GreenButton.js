import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    width: 160,
    height: 50,
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
      onClick,
    } = this.props;


    return (
      <div>
        <button className={classes.button} style={{ marginTop: marginTop, width: width, height: height, }} onClick={onClick} >
          {text}
        </button>
      </div>
    );
  }
}


export default withStyles(styles)(ImageBox);
