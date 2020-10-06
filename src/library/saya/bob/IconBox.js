import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const styles = {
  root: {
    width: 140,
    height: 140,
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    marginLeft: -1,
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
      color = '#e8e8e8',
    } = this.props;
    return (
      <div
        className={clsx(classes.root, { [classes.clickable]: !!onClick })}
        style={{
          borderLeftColor: color,
          borderRightColor: color,
        }}
      >
        {imgUrl && (
          <img
            src={imgUrl}
            style={{
              width,
            }}
            onClick={onClick}
          />
        )}
      </div>
    );
  }
}


export default withStyles(styles)(IconBox);
