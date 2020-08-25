import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: 90,
    border: 'solid 1px #888888',
  },
};
class IconBox extends React.PureComponent {
  render() {
    const {
      classes,
      imgUrl,
      width,
    } = this.props;
    return (
      <div className={classes.root}>
        <img
          src={imgUrl}
          style={{
            width: width,
          }}
        />
      </div>
    );
  }
}


export default withStyles(styles)(IconBox);
