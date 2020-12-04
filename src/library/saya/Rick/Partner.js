import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import PartnerForm from './PartnerForm';
import TweenMove from '../bob/TweenMove';
import { Slide } from '../reveal';

const styles = {
  root: {
    height: 643,
    paddingTop: 47,
  },
  bottle: {
    width: 319,
    height: 596,
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: 160,
  },
  title: {
    fontSize: 30,
    fontFamily: 'FilsonSoft-Bold',
    textAlign: 'center',
  },
};


class Partner extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      bottleImage,
    } = this.props;
    return (
      <TweenMove
        image={backgroundImage}
      >
        <ImageContainer
          className={classes.root}
        >
          <ImageContainer className={classes.bottle} image={bottleImage}>
            <div style={{ width: 240 }}>
              <pre className={classes.title} style={{ marginTop: 0, marginBottom: 32 }} >
                {'Get Useful\nUpdates'}
              </pre>

              <PartnerForm />
            </div>
          </ImageContainer>
        </ImageContainer>
      </TweenMove>
    );
  }
}


export default withStyles(styles)(Partner);
