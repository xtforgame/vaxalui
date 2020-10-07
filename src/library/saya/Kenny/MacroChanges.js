import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import GreenButton from '../bob/GreenButton';

const styles = {
  root: {
    height: 610,
    color: '#000000',
  },
  section: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 65,
    paddingLeft: 40,
  },
  firstTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31,
  },
  firstLine: {
    width: 85,
    height: 1,
    border: '1px solid #000000',
    marginTop: 2,
  },
  secondTitle: {
    width: 425,
    fontSize: 54,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1,
    paddingTop: 45,
  },
  secondLine: {
    width: 420,
    height: 1,
    border: '1px solid #000000',
    marginTop: 20,
  },
  thirdTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    paddingTop: 20,
  },
  button: {
    marginTop: 50,
  },
};


class MacroChanges extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      onClick,
    } = this.props;
    return (
      <ImageContainer
        className={classes.root}
        image={backgroundImage}
      >
        <div className={classes.section}>
          <div className={classes.firstTitle}>PRODUCTS</div>
          <div className={classes.firstLine} />
          <div className={classes.secondTitle}>Micro fibers. Macro changes.</div>
          <div className={classes.secondLine} />
          <div className={classes.thirdTitle}>Sustainable Fiber Solutions for Every Budget and Design.</div>
          <div className={classes.button}>
            <GreenButton
              text="Read More"
              onClick={onClick}
            />
          </div>
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(MacroChanges);
