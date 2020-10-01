import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';

const styles = {
  root: {
    width: 320,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #000000',
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    justifyContent: 'space-evenly',
  },
  disabledBackground: {
    border: '0px solid #000000',
    backgroundColor: '#c8c6c6',
  },
  title: {
    width: 200,
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    textAlign: 'center',
    paddingTop: 26,
  },
  type: {
    fontSize: 13,
    paddingTop: 8,
    fontFamily: 'FilsonSoftRegular',
  },
  button: {
    marginTop: 0,
  }
};

class Project extends React.PureComponent {
  render() {
    const {
      classes,
      title = "Backbone of our sustainable textile business",
      buttonText = "Learn More",
      disabled,
      type,
      typeBack,
      onClick,
    } = this.props;
    return (
      <div
        className={clsx(classes.root, { [classes.disabledBackground]: disabled })}
      >
        <div className={classes.title}>{title}</div>
        <div className={classes.type}>
          {type}
          <span style={{ fontFamily: 'FilsonSoft-Light' }}>{typeBack}</span>
        </div>
        <div className={classes.button}>
          <GreenButton  disabled={disabled} text={buttonText} onClick={onClick} />
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(Project);
