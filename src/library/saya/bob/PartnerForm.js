import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GreenButton from './GreenButton';
import TextField from './TextField';
import Checkbox from '../Checkbox';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 320,
    width: 440,
    // overflowX: 'hidden',
  },
  title: {
    width: 'fit-content',
    borderBottom: '3px solid #000000',
    // paddingBottom: 2,
    textShadow: `2px 2px white,
      2px -2px white,
      -2px 2px white,
      -2px -2px white`,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 0.6,
  },
  subtitle: {
    width: 440,
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 22,
  },
  email: {
    position: 'relative',
    display: 'flex',
    marginTop: 22,
    height: 44,
  },
  emailInner: {
    position: 'absolute',
    display: 'flex',
  },
  emailInput: {
    width: 440,
    fontSize: 12,
    color: '#000000',
    borderColor: '#000000',
  },
  button: {
    marginLeft: 32,
  },
  checkbox: {
    display: 'flex',
    paddingTop: 16,
  },
  box: {
    width: 30,
    height: 30,
  },
  labelContent: {
    width: 380,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 30,
  },
}));


export default (props) => {
  const {
    subtitle = 'Stay connected for only meaningful and useful updates on sustainable fibers and recycling technology.',
    labelContent = 'SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.',
    emailTextInputWidth = 420,
  } = props;

  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.flexContainer}>
      <div className={classes.title}>
        Become our partner
      </div>
      <div className={classes.subtitle}>
        {subtitle}
      </div>
      <div className={classes.email}>
        <div className={classes.emailInner}>
          <TextField
            className={classes.emailInput}
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email address"
            style={{ width: emailTextInputWidth }}
          />
          <div className={classes.button}>
            <GreenButton
              text="SUBMIT"
            />
          </div>
        </div>
      </div>

      <div className={classes.checkbox}>
        <Checkbox />
        <div className={classes.labelContent}>
          <label>
            {labelContent}
          </label>
        </div>
      </div>
    </div>
  );
};
