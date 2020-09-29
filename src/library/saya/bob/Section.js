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
    width: 920,
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: 300,
    fontStretch: 'normal',
    fontFamily: 'FilsonSoft',
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
      showButton = true,
      breadCrumbs,
      title,
      subTitle,
      height = 590,
    } = this.props;
    return (
      <>
        <ImageContainer
          className={classes.root}
          image={backgroundImage}
          style={{ height }}
        >
          <div className={classes.section}>
            <div className={classes.breadCrumbs}>
              {breadCrumbs}
              <div className={classes.firstLine} />
            </div>
            <div className={classes.title}>{title}</div>
            <div className={classes.subTitle}>{subTitle}</div>
            {showButton && <div className={classes.button}>
              <GreenButton
                text="Read More"
                onClick={onClick}
              />
            </div>}
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(Section);
