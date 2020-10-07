import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from '../bob/GreenButton';
import TextField from './TextField';

const styles = {
  subtitle: {
    width: 280,
    fontSize: 13,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 22,
    lineHeight:1.54,
  },
  email: {
    display: 'flex',
    marginTop: 11,
  },
  emailInput: {
    width: 280,
    fontSize: 12,
    color: '#000000',
    border: 'solid 1px #000000',
    backgroundColor: '#ffffff',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 11,
  },
  checkbox: {
    display: 'flex',
    paddingTop: 11,
  },
  box: {
    width: 25,
    height: 25,
  },
  labelContent: {
    width: 235,
    fontSize: 12,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 20,
    lineHeight:'normal',
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
          <input className={classes.box} type="checkbox" value="checkbox" />
          <div className={classes.labelContent}>
            <label>SAYA  may use my email address provided above to send me relevant marketing communications. I understand that I can unsubscribe from these communications at any time.</label>
          </div>

        </div>
        <div className={classes.button}>
          <GreenButton
            text="SUBMIT"
            width={280}
            height={44}
            onClick={onClick}
          />
        </div>
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(Partner);
