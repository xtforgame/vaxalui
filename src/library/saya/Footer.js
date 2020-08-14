import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
// import { graphql } from 'gatsby';
import TextField from './TextField';
import Selects from './Selects';
import Button from './Button';

const styles = theme => ({
  root: {
    width: '100%',
    height: theme.spacing(38),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(16),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(4),
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
});

class Footer extends React.PureComponent {
  state = {
    email: '',
    language: '',
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handleLanguageChange = (e) => {
    this.setState({
      language: e.target.value,
    });
  }

  signUpNewsletter = () => {
    console.warn('Implement signUpNewsletter', this.state.email);
  }

  render() {
    const {
      classes,
    } = this.props;
    const {
      email,
      languange,
    } = this.state;
    return (
      <div className={clsx(classes.root, classes.rowFlex)}>
        <div className={classes.leftColumn}>
          <div>Follow SAYA</div>
          <div className={classes.rowFlex}>
            <div>FB__</div>
            <div>IG__</div>
          </div>
          <div>Contact: xx@xx.com</div>
          <div>Also visit...</div>
          <div>Copyright 2020</div>
        </div>
        <div className={classes.rightColumn}>
          <div>Sign up to newsletter</div>
          <TextField
            className={classes.emailInput}
            value={email}
            onChange={this.handleEmailChange}
            placeholder="Your email address"
          />
          <Button
            text="SUBMIT"
            onClick={this.signUpNewsletter}
          />
          <div>Select language</div>
          <Selects
            options={['English', 'Traditional Chinese']}
            value={languange}
            onChange={this.handleLanguageChange}
          />
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
};

Footer.defaultProps = {
};

export default withStyles(styles)(Footer);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
