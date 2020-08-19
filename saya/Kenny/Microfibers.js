import React from 'react';
import { withStyles } from '@material-ui/styles';
import ImageContainer from '../ImageContainer';

const styles = {
  root: {
    height: 580,
  },
  section: {
    width: 1024,
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 80,
    paddingLeft: 40,
  },
  title: {
    width: 630,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
  },
};


class Microfibers extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
    } = this.props;
    return (
      <ImageContainer
        image={backgroundImage}
        className={classes.root}
      >
        <div className={classes.section}>
          <div className={classes.title}>
            We Turn Potential Microplastics into Microfibers.
          </div>
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(Microfibers);