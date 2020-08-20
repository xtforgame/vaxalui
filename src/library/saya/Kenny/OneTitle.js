import React from 'react';
import { withStyles } from '@material-ui/styles';
import ImageContainer from '../ImageContainer';

const styles = {
  root: {
    paddingTop: 35,
  },
};

class OneTitle extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      fontColor,
      title,
    } = this.props;
    return (
      <ImageContainer
        image={backgroundImage}
        className={classes.root}
        style={{
          height,
          color:fontColor,
        }}
      >
        {title}
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(OneTitle);
