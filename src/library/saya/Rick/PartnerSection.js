import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import IconBoxSection from '../bob/IconBoxSection';
import IconBox from '../bob/IconBox';
import GreenButton from '../bob/GreenButton';

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
      borderColor,
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
          <IconBoxSection color={borderColor}>
            {r.map(cell => <IconBox cell={cell} size="small" width={80} color={borderColor} />)}
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
