import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '100%',
    height: 330,
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
  },
  firstTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 1.31,
    paddingTop: 90,
  },
  firstLine: {
    height: 1,
    marginTop: 2,
  },
  secondTitle: {
    fontSize: 55,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  secondTitleBack: {
    fontWeight: 'normal',
  },
  secondLine: {
    width: 420,
    height: 1,
    marginTop: 2,
  },
  thirdTitle: {
    width: 390,
    fontSize: 20,
    paddingTop: 10,
  },

};


class TopSection extends React.PureComponent {
  render() {
    const {
      classes,
      firstTitle,
      secondTitle,
      secondTitleBack,
      thirdTitle,
      backgroundImage,
      fontColor,
      lineBorder,
      firstLineWidth,
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          color: fontColor,
        }}
      >
        <div className={classes.firstTitle}>
          {firstTitle}
        </div>

        <div 
        className={classes.firstLine} 
        style={{
          width:firstLineWidth,
         border:lineBorder,
        }}
        />

        <div className={classes.secondTitle}>
          {secondTitle} <span className={classes.secondTitleBack}> {secondTitleBack} </span>
        </div>

        <div 
        className={classes.secondLine} 
        style={{
          border:lineBorder,
         }}
        />

        <div className={classes.thirdTitle}>
          {thirdTitle}
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(TopSection);