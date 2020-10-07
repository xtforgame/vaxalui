import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from '../bob/GreenButton';
import TextField from './TextField';
import Checkbox from '../Checkbox';

const styles = {
  subtitle: {
    width: '100%',
    fontSize: 13,
    fontFamily: 'FilsonSoftRegular',
    lineHeight: 1.54,
  },
  email: {
    display: 'flex',
    marginTop: 11,
    width: '100%',
  },
  emailInput: {
    width: '100%',
    fontSize: 12,
    color: '#000000',
    border: 'solid 1px #000000',
    backgroundColor: '#ffffff',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 11,
    width: '100%',
  },
  checkbox: {
    display: 'flex',
    paddingTop: 20,
  },
  labelContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 20,
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
      onClick,
    } = this.props;
    return (
      <React.Fragment>
        <pre className={classes.subtitle} style={{ marginTop: 0, marginBottom: 0 }}>
          {'Sign up to stay in touch on the newest\nrenewal technologies, products,\nevents, and news from SAYA. '}
        </pre>
        <div className={classes.email}>
          <TextField
            className={classes.emailInput}
            value={email}
            onChange={this.handleEmailChange}
            placeholder="Your email address"
          />
        </div>

        <div className={classes.checkbox}>
          <Checkbox />
          <div className={classes.labelContent}>
            <label>SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.</label>
          </div>
        </div>
        <div className={classes.button}>
          <GreenButton
            text="SUBMIT"
            style={{
              width: '100%',
            }}
            onClick={onClick}
          />
        </div>
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(Partner);
