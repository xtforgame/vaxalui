import React from 'react';
import { withStyles } from '@material-ui/styles';
import ImageCircle from '../components/ImageCircle';

const styles = {
  root: {
    width: '100%',
    height: 610,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 1.31,
    color: '#000000',
    paddingTop: 88,
  },
  line: {
    width: 125,
    height: 1,
    marginTop: 2,
    border: ' solid 1px #000000',
  },
  circle: {
    marginTop: 40,
  },
};


class HomeTwoCircleSection extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}> TECHNOLOGIES </div>
        <div className={classes.line} />
        <div className={classes.circle}>
          <ImageCircle />
        </div>
    
      </div>

    );
  }
}


export default withStyles(styles)(HomeTwoCircleSection);
