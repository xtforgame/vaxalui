import React from 'react';
import { withStyles } from '@material-ui/styles';
import ImageContainer from '../ImageContainer';

const styles = {
  root: {
    height: 500,
    color: '#000000',
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
      backgroundImage,
      scrollArrowImage,
      roundArrowImage,
    } = this.props;
    return (
      <ImageContainer
        image={backgroundImage}
        className={classes.root}
      >
        <div className={classes.scrollArrow}>
          <img src={scrollArrowImage} />
        </div>
        <div className={classes.title}>
          In the Business of
          {' '}
          <span className={classes.titleBack}>Renewal</span>
        </div>

        <div className={classes.line} />

        <div className={classes.subtitle}>
          The next of recycled goods.
        </div>

        <div className={classes.roundArrow}>
          <img src={roundArrowImage} />
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(HomeTopSection);
