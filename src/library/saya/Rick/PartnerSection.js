import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import IconBoxSection from './IconBoxSection';
import IconBox from './IconBox';
import GreenButton from './GreenButton';

const styles = {
  root: {
    marginTop: 40,
    marginBottom: 8,
  },
};


class PartnerSection extends React.PureComponent {
  render() {
    const {
      classes,
      partner = [],
    } = this.props;

    return (
      <ImageContainer
        className={classes.root}
      >
        {/* <div className={classes.section}>
        <div className={classes.breadCrumbs}>
          {breadCrumbs}
          <div className={classes.firstLine} />
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.subTitle}>{subTitle}</div>
      </div> */}
        {partner.map(r =>
          <IconBoxSection>
            {r.map(cell => <IconBox imgUrl={cell} width="80px" />)}
          </IconBoxSection>
        )}
        {/* <div className={classes.section}>
        <div className={classes.button}>
          <GreenButton
            text="Read More"
            onClick={onClick}
          />
        </div>
      </div> */}
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(PartnerSection);
