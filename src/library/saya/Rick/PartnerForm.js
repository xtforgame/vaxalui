import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';
import TextField from './TextField';

const styles = {
  subtitle: {
    width: 245,
    fontSize: 13,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 30,
  },
  email: {
    display: 'flex',
    marginTop: 10,
  },
  emailInput: {
    width: 245,
    fontSize: 10,
    color: '#000000',
    borderColor: '#000000',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop:23,
  },
  checkbox: {
    display: 'flex',
    paddingTop: 23,
  },
  box: {
    width: 25,
    height: 25,
  },
  labelContent: {
    width: 201,
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
    } = this.props;
    return (
      <React.Fragment>
        <pre className={classes.subtitle} style={{ marginTop: 0, marginBottom: 0, }}>
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
            <label>SAYA  may use my email address provided above to send me relevant marketing communications. I understand that I can unsubscribe from these communications at any time. </label>
          </div>

        </div>
        <div className={classes.button}>
          <GreenButton
            text="SUBMIT"
            width={245}
          />
        </div>
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(Partner);
