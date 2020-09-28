import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import { graphql } from 'gatsby';
import TextField from './bob/TextField';
import Select from './Select';
import Button from './Button';
import Checkbox from './Checkbox';

const useStyles = makeStyles(theme => ({
  rowFlex: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'FilsonSoftRegular', // 'FilsonSoft-Bold',
    paddingTop: 42,
    paddingBottom: 42,
    paddingLeft: 80,
    paddingRight: 80,
  },
  root: {
    flex: 1,
    // paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'relative',
    color: 'white',
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
    width: 300,
    '&::placeholder': {
      color: '#FFFFFF',
    },
  },

  checkbox: {
    display: 'flex',
    paddingTop: 12,
  },
  box: {
    width: 30,
    height: 30,
    '&$checked': {
      backgroundColor: 'white',
    },
    '&:after': {
      backgroundColor: '#ff0000',
      color: '#fff',
    },
  },
  labelContent: {
    width: 400,
    fontSize: 10,
    fontFamily: 'FilsonSoftRegular',
    paddingLeft: 10,
  },
}));

export default (props) => {
  const {
    fbIcon,
    igIcon,
  } = props;

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <div className={clsx(classes.rowFlex)}>
      <div className={clsx(classes.root)}>
        <div className={classes.subtitle}>
          <pre
            style={{
              fontSize: 14,
              margin: 0,
              fontFamily: 'FilsonSoft-Bold',
            }}
          >
            Follow SAYA
          </pre>
        </div>
        <div style={{ width: '100%' }}>
          <div
            style={{
              paddingTop: 50,
              display: 'flex',
            }}
          >
            {fbIcon}
            <div style={{ width: 20, height: 1 }} />
            {igIcon}
          </div>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ width: 10, height: 50 }} />
          <div style={{ display: 'inline', fontSize: 12, marginRight: 4 }}>Contact:</div>
          <div style={{ display: 'inline', fontSize: 12 }}><u>change@sayarenew.com</u></div>
          <div style={{ width: 10, height: 0 }} />
          <div style={{ display: 'inline', fontSize: 12, marginRight: 4 }}>Also visit Nan Ya Plastic:</div>
          <div style={{ display: 'inline', fontSize: 12 }}><u>https://www.npc.com.tw/</u></div>
          <div style={{ width: 10, height: 72 }} />
          <div style={{ fontSize: 12 }}>Copyright © 2020 SAYA All Rights Reserved</div>
        </div>
      </div>
      <div className={clsx(classes.root)}>
        <div style={{ textAlign: 'left' }}>
          <div
            style={{
              fontSize: 14,
              fontFamily: 'FilsonSoft-Bold',
            }}
          >
            Sign up to newsletter
          </div>
          <div style={{ width: 10, height: 8 }} />
          <div style={{ width: '100%' }}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <TextField
                className={classes.emailInput}
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
              />
              <div style={{ width: 20, height: 20 }} />
              <Button width={100}>
                SUBMIT
              </Button>
            </div>
          </div>

          <div className={classes.checkbox}>
            <Checkbox darkTheme />
            {/* <input className={classes.box} type="checkbox" value="checkbox" /> */}
            <div className={classes.labelContent}>
              <label>
                SAYA Brand may use my email address to provide relevant marketing updates. I can unsubscribe these communications at anytime.
              </label>
            </div>
          </div>
          {/* <Button
            text="SUBMIT"
            onClick={this.signUpNewsletter}
          /> */}
          <div style={{ width: 10, height: 20 }} />
          <div
            style={{
              fontSize: 14,
              fontFamily: 'FilsonSoft-Bold',
            }}
          >
            Select language
          </div>
          <div style={{ width: 10, height: 8 }} />
          <Select
            style={{ width: 300 }}
            options={['English', 'Traditional Chinese']}
            value={language}
            onChange={e => setLanguage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
