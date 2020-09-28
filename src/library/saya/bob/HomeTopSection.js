import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipperT1 from '../SwipperT1';
import ImageContainer from '../ImageContainer';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 620,
    color: '#000000',
  },
  scrollArrow: {
    width: 1024,
    height: 50,
  },
  title: {
    fontSize: 50,
    fontWeight: 300,
  },
  titleBack: {
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  titleWhite: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: 560,
    height: 1,
    marginTop: 8,
    border: ' solid 1px #ffffff',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 22,
    paddingBottom: 91,
  },
  roundArrow: {
    width: 50,
    height: 50,
  },
  space: {
    height: 12,
  },
};


class HomeTopSection extends React.PureComponent {

  render() {
    const {
      classes,
      backgroundImage,
      roundArrowImage,
      onClick,
    } = this.props;

    return (
      <>
      <ImageContainer
        image={backgroundImage}
        className={classes.root}
      >
        <div className={classes.scrollArrow}>
        </div>
        <div className={classes.title}>
          <span className={classes.titleWhite}>Innovating Renewal Technologies</span>
        </div>

        <div className={classes.line} />

        <div className={classes.subtitle}>
          With the next generation of recycled fibers
        </div>

        <div className={classes.roundArrow} onClick={onClick}>
          <img src={roundArrowImage} />
        </div>
      </ImageContainer>
      <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(HomeTopSection);
