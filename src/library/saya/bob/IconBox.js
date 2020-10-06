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
      cell,
      width,
      color = '#e8e8e8',
    } = this.props;

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
        className={clsx(classes.root, { [classes.clickable]: !!(oc || url) })}
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
            onClick={oc}
          />
        )}
      </div>
    );
  }
}


export default withStyles(styles)(IconBox);
