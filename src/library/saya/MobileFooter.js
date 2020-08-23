import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import { graphql } from 'gatsby';
import TextField from './TextField';
import Select from './Select';
import Button from './Button';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 47,
    width: '100%',
    height: 630,
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontFamily: 'FilsonSoftRegular', // 'FilsonSoft-Bold',
    position: 'relative',
    backgroundColor: 'black',
    color: 'white',
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
  const {
    fbIcon,
    igIcon,
  } = props;

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('');

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
          {fbIcon}
          <div style={{ width: 10, height: 1 }} />
          {igIcon}
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
        <div style={{ width: 10, height: 40 }} />
        <div>Sign up to newsletter</div>
        <div style={{ width: 10, height: 8 }} />
        <TextField
          className={classes.emailInput}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
        />
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
        <div style={{ width: 10, height: 20 }} />
        <Button
          width={310}
        >
          SUBMIT
        </Button>
        <div style={{ width: 10, height: 80 }} />
        <div style={{ fontSize: 18 }}>Contact:</div>
        <div style={{ fontSize: 18 }}><u>change@sayarenew.com</u></div>
        <div style={{ width: 10, height: 10 }} />
        <div style={{ fontSize: 18 }}>Also visit Nan Ya Plastic:</div>
        <div style={{ fontSize: 18 }}><u>https://www.npc.com.tw/</u></div>
        <div style={{ width: 10, height: 40 }} />
        <div style={{ fontSize: 12 }}>Copyright © 2020 SAYA All Rights Reserved</div>
      </div>
    </div>
  );
};
