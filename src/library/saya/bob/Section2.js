import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slide } from '../reveal';
import ImageContainer from '../ImageContainer';
import GreenButton from './GreenButton';
import BreakAllContentText from '../BreakAllContentText';

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
    paddingTop: 80,
  },
  breadCrumbs: {
    color: '#FFFFFF',
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
    width: 780,
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 300,
    fontStretch: 'normal',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1,
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


class Section2 extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      title,
      color,
      height = 586,
    } = this.props;
    return (
      <>
        <ImageContainer
          className={classes.root}
          image={backgroundImage}
          style={{ height }}
        >
          <div className={classes.section}>
            <Slide direction="up" triggerOnce>
              <BreakAllContentText className={classes.title}>{title}</BreakAllContentText>
            </Slide>
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(Section2);
