import React from 'react';
import { withStyles } from '@material-ui/styles';
import GreenButton from './GreenButton';
import TextField from './TextField';

import background from '../../../../stories/saya/img/bg16.jpg';
import bottle from '../../../../stories/saya/img/bottle_w.svg';


const styles = {
  root: {
    width: '100%',
    height: 500,
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottle: {
    width: 880,
    height: 320,
    backgroundImage: `url(${bottle})`,
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 50,
    paddingLeft: 110,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.25,
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 2.5,
    border: ' solid 1px #000000',
  },
  subtitle: {
    width: 420,
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 25,
  },
  email: {
    display: 'flex',
    marginTop: 10,
  },
  emailInput: {
    width: 420,
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
    width: 340,
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
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.bottle}>
          <div className={classes.title}>Become our partner</div>
          <div className={classes.line} />
          <div className={classes.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</div>
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
              <label>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(Partner);
