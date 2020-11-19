import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GreenButton from '../bob/GreenButton';
import TextField from './TextField';
import Checkbox from '../Checkbox';
import HelperText from '../HelperText';
import subscriptionContext from '../contexts/subscriptionContext';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
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
  },
  button: {
    marginLeft: 32,
  },
  checkbox: {
    display: 'flex',
    paddingTop: 6,
  },
  box: {
    width: 30,
    height: 30,
  },
  labelContent: {
    width: 380,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10,
  },
}));


export default (props) => {
  const {
    title = 'Get Useful Updates',
    subtitle = 'Stay connected for only meaningful and useful updates on sustainable fibers and recycling technology.',
    labelContent = 'SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.',
    emailTextInputWidth = 420,
  } = props;

  const classes = useStyles();

  const {
    email = '',
    setEmail = () => {},
    checked,
    setChecked,
    errorMessage,
    successMessage,
    onSubmit,
    emailErrorMessage,
    checkErrorMessage,
  } = useContext(subscriptionContext);

  return (
    <div className={classes.flexContainer}>
      <div style={{ height: 50 }} />
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.subtitle}>
        {subtitle}
      </div>
      <div className={classes.email}>
        <div className={classes.emailInner}>
          <TextField
            className={classes.emailInput}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            error={!!emailErrorMessage}
          />
          <div className={classes.button}>
            <GreenButton
              text="SUBMIT"
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
      {
        emailErrorMessage && (
          <HelperText style={{ }} error>
            {emailErrorMessage}
          </HelperText>
        )
      }
      {
        !emailErrorMessage && (
          <div style={{ height: 10 }} />
        )
      }

      <div className={classes.checkbox}>
        <Checkbox
          checked={checked}
          setChecked={setChecked}
          error={!!checkErrorMessage}
        />
        <div className={classes.labelContent}>
          <label>
            {labelContent}
          </label>
        </div>
      </div>
      {
        checkErrorMessage && (
          <HelperText style={{ }} error>
            {checkErrorMessage}
          </HelperText>
        )
      }
      {
        successMessage && (
          <HelperText style={{ }}>
            {successMessage}
          </HelperText>
        )
      }
      {
        errorMessage && (
          <HelperText style={{ }} error>
            {errorMessage}
          </HelperText>
        )
      }
    </div>
  );
};
