import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';

const styles = {
  root: {
    width: '100%',
    height: 62,
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #000000',
    fontSize: 14,
  },
  label: {
    fontFamily: 'FilsonSoft-Bold',
    width: 260,
    marginRight: 91,
  },
  link: {
    color: '#64703f'
  }
};

class DownloadItem extends React.PureComponent {
  render() {
    const {
      classes,
      label = "Backbone of our sustainable textile business",
      href,
    } = this.props;
    return (
      <div
        className={classes.root}
      >
        <div className={classes.label}>{label}</div>
        <a href={href} className={classes.link}>Download</a>
      </div>
    );
  }
}


export default withStyles(styles)(DownloadItem);
