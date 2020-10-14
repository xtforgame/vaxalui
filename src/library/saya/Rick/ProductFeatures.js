import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    paddingTop: 60,
    backgroundColor: '#444343',
    color: '#ffffff',
  },
  container: {
    width: 320,
  },
  title: {
    width: 'fit-content',
    fontSize: 15,
    lineHeight: 'normal',
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ffffff',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 50,
    marginBottom: 80,
  },
};

class ProductFeatures extends React.PureComponent {
  render() {
    const {
      classes,
      color,
      title,
      list,
      block,
    } = this.props;
    return (
      <>
        <ImageContainer className={classes.root}>
          <div className={classes.container}>
            <div className={classes.title}>
              <div style={{ fontFamily: 'FilsonSoft-Bold' }}>{title}</div>
              <div className={classes.line} />
            </div>
            <div className={classes.subtitle}>
              {list.map(l => (
                <div style={{ fontSize: 20, fontFamily: 'FilsonSoftRegular', display: 'flex', paddingBottom: 20 }}>
                  ・
                  <span style={{ width: 315, fontSize: 20, fontFamily: 'FilsonSoftRegular', paddingLeft: 0, }}>{`${l}`}</span>
                </div>
              ))}
            </div>
          </div>
        </ImageContainer>

        {/* <div className={classes.space} /> */}
      </>
    );
  }
}


export default withStyles(styles)(ProductFeatures);
