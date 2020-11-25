import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import GreenButton from '../bob/GreenButton';
import TextField from '../bob/TextField';
import Checkbox from '../Checkbox';
import HelperText from '../HelperText';
import BreakAllContentText from '../BreakAllContentText';
import { Slide } from '../reveal';
import subscriptionContext from '../contexts/subscriptionContext';

const useStyles = makeStyles(theme => ({
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
}));


export default (props) => {
  const classes = useStyles();

  const {
    subtitle = 'Stay connected for only meaningful and useful updates on sustainable fibers and recycling technology.',
    labelContent = 'SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.',
  } = props;

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
    <React.Fragment>
      <BreakAllContentText className={classes.subtitle} style={{ marginTop: 0, marginBottom: 0 }}>
        {subtitle}
      </BreakAllContentText>
      <div className={classes.email}>
        <TextField
          className={classes.emailInput}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          error={!!emailErrorMessage}
        />
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
          <label>{labelContent}</label>
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
      <div className={classes.button}>
        <GreenButton
          text="SUBMIT"
          style={{
            width: '100%',
          }}
          onClick={onSubmit}
        />
      </div>
    </React.Fragment>
  );
};
