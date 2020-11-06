import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import BreakAllContentText from '../BreakAllContentText';
import AnimatedNumber from './AnimatedNumber';
import { Slide } from '../reveal';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 501,
    color: '#FFFFFF',
  },
  firstTitle: {
    width: 'fit-content',
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
    textAlign: 'left',
  },
  container: {
    width: 940,
  },
  firstLine: {
    height: 1,
    border: '1px solid #ffffff',
    width: '100%',
  },
  secondTitle: {
    width: 780,
    fontSize: 72,
    fontWeight: 300,
    fontFamily: 'FilsonSoft-Light',
    lineHeight: 1,
    marginTop: 30,
  },
  secondLine: {
    width: 420,
    height: 1,
    marginTop: 2,
  },
  thirdTitle: {
    marginTop: 16,
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
  },
  title: {
    width: 'fit-content',
    fontSize: 20,
    lineHeight: 1.2,
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

class SolidBackbone extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      firstTitle,
      secondTitle,
      thirdTitle,
      block,
    } = this.props;
    return (
      <>
        <ImageContainer
          image={backgroundImage}
          className={classes.root}
        >
          <div className={classes.container}>
            <BreakAllContentText className={classes.firstTitle}>
              <Slide direction="up" triggerOnce>
                {firstTitle}
                <div className={classes.firstLine} />
              </Slide>
            </BreakAllContentText>
            <div>
              <Slide direction="up" triggerOnce>
                <div className={classes.secondTitle}>
                  {secondTitle}
                </div>
                <BreakAllContentText
                  className={classes.thirdTitle}
                >
                  {thirdTitle}
                </BreakAllContentText>
              </Slide>
            </div>
          </div>
        </ImageContainer>
        <div className={classes.blockRoot}>
          {block.map((b) => {
            let suffix = '%';
            if (b.suffix != null) {
              ({ suffix } = b);
            }
            return (
              <div
                className={classes.block}
                style={{ backgroundSize: 'cover', backgroundColor: b.bg, backgroundImage: `url(${b.bg})` }}
              >
                <div className={classes.blockContent}>
                  <div style={{ color: b.color }} className={classes.num}>
                    {/* {b.num}
                    {suffix && <span style={{ fontSize: 20, color: b.color }}>%</span>} */}
                    <AnimatedNumber
                      width={200}
                      number={b.num}
                      suffix={suffix}
                      // numberPaddingTop={numberPaddingTop}
                      numberColor={b.color}
                      percentDisplay={!!suffix}
                      percentColor={b.color}
                    />
                    <div style={{ color: b.color, marginTop: 8 }} className={classes.top}>{b.top}</div>
                    <div style={{ margin: '12px 0', color: b.color, width: '100%', border: `1px solid ${b.color}` }} />
                    <div style={{ color: b.color }} className={classes.bottom}>{b.bottom}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}


export default withStyles(styles)(SolidBackbone);
