import React from 'react';
import { withStyles } from '@material-ui/styles';

import background from '../../../../stories/saya/img/bg0.jpg';
import roundArrow from '../../../../stories/saya/img/round_arrow.svg';
import scrollArrow from '../../../../stories/saya/img/scroll arrow.png';

const styles = {
  root: {
    width: '100%',
    height: 500,
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    width: 1024,
    height: 500,
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
  },
  scrollArrow: {
    width: 1024,
    height: 50,
    marginTop: 225,
  },
  title: {
    fontSize: 44,
    fontWeight: 300,
    paddingTop: 30,
  },
  titleBack: {
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 10,
    border: ' solid 1px #000000',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20,
  },
  roundArrow: {
    width: 50,
    height: 50,
    marginTop: 30,
  },
};


class HomeTopSection extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.section}>
          <div className={classes.scrollArrow}><img src={scrollArrow} /></div>

          <div className={classes.title}>
            In the Business of <span className={classes.titleBack}>Renewal</span>
          </div>

          <div className={classes.line} />

          <div className={classes.subtitle}>
            The next of recycled goods.
             </div>

          <div className={classes.roundArrow}><img src={roundArrow} /></div>

        </div>
      </div>
    );
  }
}


export default withStyles(styles)(HomeTopSection);
