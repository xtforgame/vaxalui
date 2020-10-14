import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import GreenButton from '../bob/GreenButton';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    height: 700,
    color: '#000000',
  },
  section: {
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  title: {
    width: 320,
    color: '#FFFFFF',
    fontSize: 30,
    fontStretch: 'normal',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 'normal',
    paddingTop: 60,
    whiteSpace: 'pre-line',
  },
};


class Section2 extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      title,
      color,
      height,
    } = this.props;
    return (
      <>
        <ImageContainer
          className={classes.root}
          image={backgroundImage}
          style={{ height }}
        >
          <div className={classes.section}>
            <BreakAllContentText className={classes.title}>{title}</BreakAllContentText>
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(Section2);
