import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import PartnerForm from './PartnerForm';

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
      <ImageContainer
        className={classes.root}
        image={backgroundImage}
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
    );
  }
}


export default withStyles(styles)(Partner);
