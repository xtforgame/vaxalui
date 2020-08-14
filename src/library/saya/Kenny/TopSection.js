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
  },
  firstTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 1.31,
    color: '#000000',
    paddingTop: 90,
  },
  firstLine: {
    width: 85,
    height: 1,
    border: '1px solid #000000',
    marginTop: 2,
  },
  secondTitle: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 10,
  },
  secondTitleBack: {
    fontWeight: 'normal',
    color: '#000000',
  },
  secondLine: {
    width: 420,
    height: 1,
    border: '1px solid #000000',
    marginTop: 2,
  },
  thirdTitle: {
    width: 390,
    fontSize: 20,
    color: '#000000',
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
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.firstTitle}>
          {firstTitle}
        </div>

        <div className={classes.firstLine} />

        <div className={classes.secondTitle}>
          {secondTitle}
          <a className={classes.secondTitleBack}>
            {secondTitleBack}
          </a>
        </div>

        <div className={classes.secondLine} />

        <div className={classes.thirdTitle}>
          {thirdTitle}
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(TopSection);
