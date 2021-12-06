import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import { graphql } from 'gatsby';
import TextField from './bob/TextField';
import Select from './Select';
import Button from './Button';
import Checkbox from './Checkbox';
import HelperText from './HelperText';
import subscriptionContext from './contexts/subscriptionContext';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 51,
    width: '100%',
    // height: 630,
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontFamily: 'FilsonSoftRegular', // 'FilsonSoft-Bold',
    position: 'relative',
    backgroundColor: 'black',
    color: 'white',
  },
  checkbox: {
    display: 'flex',
    paddingTop: 12,
  },
  labelContent: {
    width: 270,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10,
  },
  rowFlex: { // TODO use global class, maybe?
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  leftColumn: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
  },
  rightColumn: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: theme.spacing(38),
  },
  emailInput: {
    width: '100%',
  },
}));

export default (props) => {
  let {
    fbIcon,
    igIcon,
  } = props;

  const classes = useStyles();
  const [language, setLanguage] = useState('English');

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
    <div className={clsx(classes.root)}>
      <div className={classes.subtitle}>
        <pre
          style={{
            fontSize: 24,
            margin: 0,
            fontFamily: 'FilsonSoftRegular',
          }}
        >
          Follow SAYA
        </pre>
      </div>
      <div style={{ width: '100%' }}>
        <pre
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <a href="https://www.facebook.com/sayarenew" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
            {fbIcon}
          </a>
          <div style={{ width: 10, height: 1 }} />
          <a href="https://www.instagram.com/sayafibers" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
            {igIcon}
          </a>
        </pre>
      </div>
      {/* <div className={classes.leftColumn}>
        <div>Follow SAYA</div>
        <div className={classes.rowFlex}>
          <div>FB__</div>
          <div>IG__</div>
        </div>
        <div>Contact: xx@xx.com</div>
        <div>Also visit...</div>
        <div>Copyright 2020</div>
      </div> */}
      <div style={{ textAlign: 'left' }}>
        <div style={{ width: 10, height: 60 }} />
        <div>Sign up to receive our newsletter</div>
        <div style={{ width: 10, height: 10 }} />
        <TextField
          darkTheme
          className={classes.emailInput}
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={!!emailErrorMessage}
          placeholder="Your email address"
        />
        {
          emailErrorMessage && (
            <HelperText style={{ marginBottom: 8 }} error>
              {emailErrorMessage}
            </HelperText>
          )
        }
        <div className={classes.checkbox}>
          <Checkbox
            darkTheme
            checked={checked}
            setChecked={setChecked}
            error={!!checkErrorMessage}
          />
          {/* <input className={classes.box} type="checkbox" value="checkbox" /> */}
          <div className={classes.labelContent}>
            <label>
              SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.
            </label>
          </div>
        </div>
        {
          checkErrorMessage && (
            <HelperText style={{ marginBottom: 8 }} error>
              {checkErrorMessage}
            </HelperText>
          )
        }
        {
          successMessage && (
            <HelperText style={{ marginBottom: 8 }}>
              {successMessage}
            </HelperText>
          )
        }
        {
          errorMessage && (
            <HelperText style={{ marginBottom: 8 }} error>
              {errorMessage}
            </HelperText>
          )
        }
        {/* <Button
          text="SUBMIT"
          onClick={this.signUpNewsletter}
        /> */}
        <div style={{ width: 10, height: 12 }} />
        <Button
          width={'100%'}
          onClick={onSubmit}
        >
          SUBMIT
        </Button>
        {/* <div style={{ width: 10, height: 20 }} />
        <div>Select language</div>
        <div style={{ width: 10, height: 10 }} />
        <Select
          formControlStyle={{ width: '100%' }}
          selectStyle={{ width: '100%' }}
          style={{ width: '100%' }}
          options={['English', 'Traditional Chinese']}
          value={language}
          onChange={e => setLanguage(e.target.value)}
        /> */}
        <div style={{ width: 10, height: 32 }} />
        <div style={{ fontSize: 18 }}>Contact:</div>
        <div style={{ fontSize: 18 }}><a href="mailto:change@sayarenew.com" style={{ color: '#ffffff' }}><u>change@sayarenew.com</u></a></div>
        <div style={{ width: 10, height: 18 }} />
        <div style={{ fontSize: 18 }}>Saya is a brand of Nan Ya plastic Corp. :</div>
        <div style={{ fontSize: 18 }}><a href="http://www.npc.com.tw" target="_blank" style={{ color: '#ffffff' }}><u>http://www.npc.com.tw</u></a></div>
        <div style={{ width: 10, height: 75 }} />
        <div style={{ fontSize: 12 }}>Copyright © 2020 SAYA All Rights Reserved</div>
        <div style={{ width: 10, height: 20 }} />
      </div>
    </div>
  );
};
