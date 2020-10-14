import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from '../bob/GreenButton';
import TextField from './TextField';
import ImageContainer from '../ImageContainer';
import PartnerForm from './PartnerForm';

const styles = {
  root: {
    height: 500,
    paddingTop: 90,
  },
  bottle: {
    width: 880,
    height: 320,
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 75,
    paddingLeft: 85,
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 0.6,
  },
  line: {
    width: 468,
    height: 1,
    marginTop: 2.5,
    border: ' solid 1px #000000',
  },
  subtitle: {
    width: 465,
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 10,
  },
  email: {
    display: 'flex',
    marginTop: 10,
  },
  emailInput: {
    width: 465,
    fontSize: 10,
    color: '#000000',
    borderColor: '#000000',
  },
  button: {
    marginLeft: 15,
  },
  checkbox: {
    display: 'flex',
    paddingTop: 20,
  },
  box: {
    width: 30,
    height: 30,
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
          <div className={classes.title}>Stay in Touch with SAYA</div>
          <div className={classes.line} />
          <PartnerForm />
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(Partner);
