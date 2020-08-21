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
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
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

class Introduction extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      title,
      backgroundImage,
      titleWidth,
      titleBack,
      subtitle,
      subtitleWidth,
      description,
      descriptionWidth,
      secondDescription,
      thirdDescription,
      fourthDescription,
      fontColor,
      lineBorder,
      backgroundColor,
      children,
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
        >
          <div
            className={classes.title}
            style={{
              width: titleWidth,
            }}
          >
            {title}
            <br />
            {titleBack}
          </div>

          <div
            className={classes.line}
            style={{
              border: lineBorder,
            }}
          />

          <div
            className={classes.subtitle}
            style={{
              width: subtitleWidth,
            }}
          >
            {subtitle}
          </div>

          <div
            className={classes.description}
            style={{
              width: descriptionWidth,
            }}
          >
            <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular' }}>{description}</BreakAllContentText>
            <br />
            <br />
            {' '}
            {secondDescription}
            <br />
            <br />
            {' '}
            {thirdDescription}
            <br />
            <br />
            {' '}
            {fourthDescription}

          </div>

          <div>
            {children}
          </div>
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(Introduction);
