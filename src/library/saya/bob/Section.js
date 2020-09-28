import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import GreenButton from './GreenButton';

const styles = {
  root: {
    height: 590,
    color: '#000000',
  },
  section: {
    width: 940,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 88,
  },
  breadCrumbs: {
    color: '#FFFFFF',
    width: 'fit-content',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31,
  },
  firstLine: {
    height: 1,
    border: '1px solid #FFFFFF',
    marginTop: 2,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    lineHeight: 1,
    paddingTop: 45,
    whiteSpace: 'pre-line',
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    paddingTop: 24,
  },
  button: {
    marginTop: 48,
  },
  space: {
    height: 12,
  }
};


class Section extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      onClick,
      breadCrumbs,
      title,
      subTitle,
    } = this.props;
    return (
      <>
        <ImageContainer
          className={classes.root}
          image={backgroundImage}
        >
          <div className={classes.section}>
            <div className={classes.breadCrumbs}>
              {breadCrumbs}
              <div className={classes.firstLine} />
            </div>
            <div className={classes.title}>{title}</div>
            <div className={classes.subTitle}>{subTitle}</div>
            <div className={classes.button}>
              <GreenButton
                text="Read More"
                onClick={onClick}
              />
            </div>
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(Section);
