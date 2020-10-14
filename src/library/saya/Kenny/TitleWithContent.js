import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    paddingTop: 80,
  },
  container: {
    width: '80%',
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
    textAlign: 'center',
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 20,
  },
};

class TitleWithContent extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      title,
      backgroundImage,
      fontSize,
      children,
      fontColor,
      backgroundColor,
      width,
      containerStyle,
    } = this.props;
    return (
      <ImageContainer
        image={backgroundImage}
        className={classes.root}
        style={{
          height,
          color: fontColor,
          backgroundColor,
        }}
      >
        <div
          className={classes.container}
          style={{ ...containerStyle }}
        >
          <BreakAllContentText
            className={classes.title}
            style={{ fontSize: fontSize, width: width, }}
          >
            {title}
          </BreakAllContentText>
          <div>
            {children}
          </div>
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(TitleWithContent);
