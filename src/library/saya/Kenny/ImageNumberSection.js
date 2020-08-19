import React from 'react';
import { withStyles } from '@material-ui/styles';
import ImageNumber from './ImageNumber';

import LeftBox from '../../../../stories/saya/img/bg32.jpg';
import RightBox from '../../../../stories/saya/img/bg33.jpg';



const styles = {
  root: {
    width: '100%',
    height: 565,
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    width: 860,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

class ImageNumberSection extends React.PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.section}>

          <ImageNumber
            backgroundImage={LeftBox}
            number="13"
            topTile="PET recycling facilities "
            bottomTitle="worldwide"
          />
          <ImageNumber
            backgroundImage={RightBox}
            number="75"
            topTile="billion bottles "
            bottomTitle="every year"
          />
        </div>
      </div>
    );


  }
}


export default withStyles(styles)(ImageNumberSection);