import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import IconBoxSection from './IconBoxSection';
import IconBox from './IconBox'
import GreenButton from './GreenButton';

const styles = {
  root: {
    height: 350,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root2: {
    paddingTop: 140,
    paddingBottom: 140,
  },
  breadCrumbs: {
    width: 'fit-content',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 1.31,
  },
  firstLine: {
    height: 1,
    border: '1px solid #000000',
  },
  title: {
    fontSize: 40,
    fontFamily: 'FilsonSoft-Bold',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoft-Bold',
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
      color = '#000000',
      backgroundImage,
      backgroundColor,
      onClick,
      breadCrumbs,
      title,
      subTitle,
      partner = [],
      hideTop,
    } = this.props;

    return (
      <>
        {!hideTop && (
          <ImageContainer
            className={classes.root}
            image={backgroundImage}
            style={{ color }}
          >
            <div className={classes.title}>{title}</div>
          </ImageContainer>
        )}
        <ImageContainer
          className={classes.root2}
          style={{ backgroundColor }}
        >
          {partner.map(r => 
            <IconBoxSection>
              {r.map(cell => <IconBox imgUrl={cell} width="140px" />)}
            </IconBoxSection>
          )}
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(PartnerSection);
