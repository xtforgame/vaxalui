import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import PartnerForm from './PartnerForm';

const styles = {
  root: {
    paddingTop: 110,
    paddingBottom: 110,
  },
  bottle: {
    width: 880,
    height: 320,
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingLeft: 110,
  },
  line: {
    width: 468,
    height: 1,
    marginTop: 2.5,
    border: ' solid 1px #000000',
  },
  button: {
    marginLeft: 15,
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
        <div className={classes.bottle} style={{ backgroundImage: `url(${bottleImage})` }}>
          <PartnerForm />
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(Partner);
