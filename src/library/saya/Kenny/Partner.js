import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';
import TextField from './TextField';
import ImageContainer from '../ImageContainer';

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
    fontWeight: 'bold',
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
  labelContent: {
    width: 440,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10,
  },
};


class Partner extends React.PureComponent {
  state = {
    email: '',
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    const {
      email,
    } = this.state;
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
          <div className={classes.subtitle}>Stay connected for only meaningful and useful updates on sustainable fibers and recycling technology.</div>
          <div className={classes.email}>
            <TextField
              className={classes.emailInput}
              value={email}
              onChange={this.handleEmailChange}
              placeholder="Your email address"
            />
            <div className={classes.button}>
              <GreenButton
                text="SUBMIT"
              />
            </div>
          </div>

          <div className={classes.checkbox}>
            <input className={classes.box} type="checkbox" value="checkbox" />
            <div className={classes.labelContent}>
              <label>SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.</label>
            </div>
          </div>
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(Partner);
