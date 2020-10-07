import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const styles = {
  root: {
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    marginLeft: -1,
    borderBottom: 0,
    borderTop: 0,
  },
  normalSize: {
    width: 140,
    height: 140,
  },
  smallSize: {
    width: 80,
    height: 80,
  },
  clickable: {
    cursor: 'pointer',
  },
};
class IconBox extends React.PureComponent {
  render() {
    const {
      classes,
      cell,
      width,
      color = '#e8e8e8',
      size = 'normal',
    } = this.props;

    const sizeClass = classes[`${size}Size`] || '';

    const {
      imgUrl,
      url,
      onClick,
    } = cell || {};

    let oc = onClick;
    if (!oc && url) {
      oc = () => {
        window.open(url, '_blank');
      };
    }
    return (
      <div
        className={clsx(classes.root, sizeClass, { [classes.clickable]: !!(oc || url) })}
        style={{
          borderLeftColor: color,
          borderRightColor: color,
        }}
      >
        {imgUrl && (
          <img
            src={imgUrl}
            width={width}
            style={{
              width,
            }}
            onClick={oc}
          />
        )}
      </div>
    );
  }
}


export default withStyles(styles)(IconBox);
