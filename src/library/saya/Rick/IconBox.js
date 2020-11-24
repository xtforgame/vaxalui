import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Slide } from '../reveal';

const styles = {
  root: {
    height: 80,
    border: 'solid 1px #e3e3e3',
    borderBottom: 0,
    borderTop: 0,
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
      borderColor,
    } = this.props;
    return (
      <div className={clsx(classes.root, { [classes.clickable]: !!onClick })} style={{ borderColor }}>
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
