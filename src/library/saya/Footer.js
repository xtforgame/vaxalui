import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import { graphql } from 'gatsby';
import TextField from './TextField';
import Select from './Select';
import Button from './Button';

const useStyles = makeStyles(theme => ({
  rowFlex: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 42,
  },
  root: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'column',
    flexWrap: 'wrap',
    fontFamily: 'FilsonSoftRegular', // 'FilsonSoft-Bold',
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
    width: '100%',
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
              fontFamily: 'FilsonSoftRegular',
            }}
          >
            Follow SAYA
          </pre>
        </div>
        <div style={{ width: '100%' }}>
          <div
            style={{
              paddingTop: 20,
              display: 'flex',
            }}
          >
            {fbIcon}
            <div style={{ width: 10, height: 1 }} />
            {igIcon}
          </div>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ width: 10, height: 40 }} />
          <div style={{ fontSize: 18 }}>Contact:</div>
          <div style={{ fontSize: 18 }}><u>service@sayanow.com</u></div>
          <div style={{ width: 10, height: 10 }} />
          <div style={{ fontSize: 18 }}>Also visit Nan Ya Plastic:</div>
          <div style={{ fontSize: 18 }}><u>https://www.npc.com.tw/</u></div>
          <div style={{ width: 10, height: 40 }} />
          <div style={{ fontSize: 12 }}>Copyright © 2020 SAYA All Rights Reserved</div>
        </div>
      </div>
      <div className={clsx(classes.root)}>
        <div style={{ textAlign: 'left' }}>
          <div>Sign up to newsletter</div>
          <div style={{ width: 10, height: 8 }} />
          <div style={{ width: '100%' }}>
            <div
              style={{
                paddingTop: 20,
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
          {/* <Button
            text="SUBMIT"
            onClick={this.signUpNewsletter}
          /> */}
          <div style={{ width: 10, height: 20 }} />
          <div>Select language</div>
          <div style={{ width: 10, height: 8 }} />
          <Select
            style={{ width: '100%' }}
            options={['English', 'Traditional Chinese']}
            value={language}
            onChange={e => setLanguage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
