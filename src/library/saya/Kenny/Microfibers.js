import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import SwipperT1 from '../SwipperT1';

const styles = {
  root: {
    height: 580,
    fontFamily: 'FilsonSoftRegular',
  },
  section: {
    width: 900,
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 80,
    paddingLeft: 40,
  },
  title: {
    width: 630,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
  },
};


class Microfibers extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImages,
      scrollArrowLeftImage,
      scrollArrowRightImage,
    } = this.props;
    const renderContent = slideInfo => (
      <ImageContainer
        key={slideInfo.index}
        image={(backgroundImages && backgroundImages.length) ? backgroundImages[Math.abs(slideInfo.index % backgroundImages.length)] : null}
        className={classes.root}
      />
    );

    return (
      <SwipperT1
        height={580}
        scrollArrowLeftImage={scrollArrowLeftImage}
        scrollArrowRightImage={scrollArrowRightImage}
        slideRenderer={renderContent}
      >
        <ImageContainer
          className={classes.root}
        >
          <div className={classes.section}>
            <div className={classes.title}>
              We Turn Potential Microplastics into Microfibers.
            </div>
          </div>
        </ImageContainer>
      </SwipperT1>
    );
  }
}


export default withStyles(styles)(Microfibers);
