import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';
import TextField from './TextField';
import ImageContainer from '../ImageContainer';
import PartnerForm from './PartnerForm';

const styles = {
  root: {
    height: 675,
    paddingTop: 260,
  },
  bottle: {
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',

  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.21,
    textAlign: 'center',
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
  labelContent: {
    width: 440,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10,
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
        <div className={classes.bottle} >
          <pre className={classes.title} style={{ marginTop: 0, marginBottom: 0, }} >
            {'Stay in Touch\nwith SAYA'}
          </pre>

          <PartnerForm />
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(Partner);
