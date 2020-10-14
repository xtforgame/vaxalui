import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import IconBoxSection from './IconBoxSection';
import IconBox from './IconBox'
import GreenButton from '../bob/GreenButton';

const styles = {
  root: {
    color: '#000000',
  },
  section: {
    width: 940,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 88,
  },
  breadCrumbs: {
    width: 'fit-content',
    fontSize: 16,
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31,
  },
  firstLine: {
    height: 1,
    border: '1px solid #000000',
  },
  title: {
    fontSize: 72,
    fontWeight: 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    lineHeight: 1,
    paddingTop: 45,
    whiteSpace: 'pre-line',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Light',
    paddingTop: 24,
    marginBottom: 80,
  },
  button: {
    margin: '80px auto',
  },
  space: {
    height: 12,
  }
};


class PartnerSection extends React.PureComponent {
  render() {
    const {
      classes,
      color,
      fontColor = '#ffffff',
      backgroundImage,
      onClick,
      breadCrumbs,
      title,
      subTitle,
      partner = [],
    } = this.props;

    return (
      <>
        <ImageContainer
          className={classes.root}
          image={backgroundImage}
          style={{
            color: fontColor,
          }}
        >
          <div className={classes.section}>
            <div className={classes.breadCrumbs}>
              {breadCrumbs}
              <div className={classes.firstLine} />
            </div>
            <div className={classes.title}>{title}</div>
            <div className={classes.subTitle}>{subTitle}</div>
          </div>
          {partner.map(r => 
            <IconBoxSection color={color}>
              {r.map(cell => <IconBox color={color} cell={cell} width={140} />)}
            </IconBoxSection>
          )}
          <div className={classes.section}>
            <div className={classes.button}>
              <GreenButton
                text="Read More"
                onClick={onClick}
              />
            </div>
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(PartnerSection);
