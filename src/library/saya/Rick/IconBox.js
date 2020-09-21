import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const styles = {
  root: {
    height: 90,
    border: 'solid 1px #888888',
  },
  clickable: {
    cursor: 'pointer',
  },
};
class IconBox extends React.PureComponent {
  render() {
    const {
      classes,
      imgUrl,
      width,
      onClick,
    } = this.props;
    return (
      <div className={clsx(classes.root, { [classes.clickable]: !!onClick })}>
        <img
          src={imgUrl}
          style={{
            width: width,
          }}
          onClick={onClick}
        />
      </div>
    );
  }
}


export default withStyles(styles)(IconBox);
