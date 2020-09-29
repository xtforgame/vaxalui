import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import PartnerForm from './PartnerForm';

const styles = {
  root: {
    height: 643,
    paddingTop: 185,
  },
  bottle: {
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    textAlign: 'center',
  },
};


class Partner extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
    } = this.props;
    return (
      <ImageContainer
        className={classes.root}
        image={backgroundImage}
      >
        <div className={classes.bottle}>
          <pre className={classes.title} style={{ marginTop: 0, marginBottom: 0, }} >
            {'Get Useful\nUpdates'}
          </pre>

          <PartnerForm />
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(Partner);
