import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from '../bob/GreenButton';
import TextField from '../bob/TextField';
import Checkbox from '../Checkbox';

const styles = {
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
      subtitle = 'Stay connected for only meaningful and useful updates on sustainable fibers and recycling technology.',
      labelContent = 'SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.',
      email,
    } = this.state;
    const {
      classes,
    } = this.props;
    return (
      <React.Fragment>
        <div className={classes.subtitle}>{subtitle}</div>
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
          <Checkbox />
          <div className={classes.labelContent}>
            <label>{labelContent}</label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(Partner);
