import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';

const styles = {
  root: {
    paddingTop: 100,
    backgroundColor: '#444343',
    color: '#FFFFFF',
  },
  container: {
    width: 940,
  },
  title: {
    width: 'fit-content',
    fontSize: 20,
    lineHeight: 1.2,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: '100%',
    height: 1,
    borderBottom: '1px solid #FFFFFF',

  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 60,
    marginBottom: 146,
  },
  blockRoot: {
  },
  block: {
    position: 'relative',
    display: 'inline-block',
    width: '50vw',
    height: '50vw',
  },
  blockContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  num: {
    fontSize: 180,
    lineHeight: 0.8,
  },
  top: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
  },
  bottom: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
  },
  space: {
    height: 12,
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
                <BreakAllContentText style={{ fontSize: 28, fontFamily: 'FilsonSoftRegular' }}>{`・ ${l}`}</BreakAllContentText>
              ))}
            </div>
          </div>
        </ImageContainer>
        <div className={classes.blockRoot}>
          {block.map(b => (
            <div
              className={classes.block}
              style={{ backgroundSize: 'cover', backgroundColor: b.bg, backgroundImage: `url(${b.bg})` }}
            >
              <div className={classes.blockContent}>
                <div style={{ color: b.color }} className={classes.num}>
                  {b.num}
                  <span style={{ fontSize: 20, color: b.color }}>%</span>
                  <div style={{ color: b.color }} className={classes.top}>{b.top}</div>
                  <div style={{ margin: '12px 0', color: b.color, width: '100%', border: `1px solid ${b.color}` }} />
                  <div style={{ color: b.color }} className={classes.bottom}>{b.bottom}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className={classes.space} /> */}
      </>
    );
  }
}


export default withStyles(styles)(ProductFeatures);
