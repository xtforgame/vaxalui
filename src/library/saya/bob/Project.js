import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from '../bob/GreenButton';

const styles = {
  root: {
    width: 460,
    height: 140,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    border: '1px solid #000000',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  disabledBackground: {
    border: '0px solid #000000',
    backgroundColor: '#c8c6c6',
  },
  left: {
    width: 280,
  },
  title: {
    width: '100%',
    height: 52,
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
  },
  type: {
    fontSize: 12,
    marginTop: 20,
    fontFamily: 'FilsonSoft-Bold',
  },
};

class Project extends React.PureComponent {
  render() {
    const {
      classes,
      title = 'Backbone of our sustainable textile business',
      buttonText = 'Learn More',
      disabled,
      type,
      onClick,
    } = this.props;
    return (
      <div
        className={clsx(classes.root, { [classes.disabledBackground]: disabled })}
      >
        <div className={classes.left}>
          <div className={classes.title}>{title}</div>
          {type && <div className={classes.type}>{type}</div>}
        </div>
        <GreenButton disabled={disabled} text={buttonText} onClick={onClick} />
      </div>
    );
  }
}


export default withStyles(styles)(Project);
