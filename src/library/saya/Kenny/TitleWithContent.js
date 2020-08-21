import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

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

class Introduction extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      title,
      backgroundImage,
      titleWidth,
      children,
      fontColor,
      backgroundColor,
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
          >
            {title}
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
