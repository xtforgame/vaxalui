import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    width: '100%',
    paddingTop: 90,
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    alignSelf: 'flex-start',
  },
  line: {
    height: 1,
    marginTop: 25,
  },
  box: {
    display: 'flex',
    marginTop: 90,
    justifyContent: 'space-between',
  },
};

class TitleLineBox extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      fontColor,
      boxWidth,
      lineBorder,
      children,
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{
          height: height,
          color: fontColor,
        }}
      >
        <div
          className={classes.section}
          style={{
            width: boxWidth,
          }}
        >
          <div className={classes.title}>
            <div>SAYA NOW Serial Projects</div>
          </div>
          <div
            className={classes.line}
            style={{
              width: boxWidth,
              border: lineBorder,
            }}
          />
          <div
            className={classes.box}
            style={{
              width: boxWidth,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(TitleLineBox);
