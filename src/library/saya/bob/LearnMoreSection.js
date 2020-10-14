import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import GreenButton from '../bob/GreenButton';

const styles = {
  root: {
    height: 590,
  },
  section: {
    width: 940,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  breadCrumbs: {
    width: 'fit-content',
    fontSize: 16,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31,
  },
  firstLine: {
    height: 1,
    border: '1px solid #FFFFFF',
    marginTop: 2,
  },
  title: {
    width: 540,
    fontSize: 32,
    fontWeight: 300,
    fontStretch: 'normal',
    fontFamily: 'FilsonSoftRegular',
    whiteSpace: 'pre-line',
    marginRight: 120,
  },
  subTitle: {
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


class LearnMoreSection extends React.PureComponent {
  render() {
    const {
      classes,
      background,
      title,
      color,
      height = 256,
      label = 'Learn More',
      onClick,
    } = this.props;
    return (
      <>
        <ImageContainer
          className={classes.root}
          image={background}
          style={{ height, color, backgroundColor: background }}
        >
          <div className={classes.section}>
            <div className={classes.title}>{title}</div>
            <GreenButton text={label} onClick={onClick} />
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(LearnMoreSection);
