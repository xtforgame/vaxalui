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
      <ImageContainer>
        <div className={classes.root}>
          {partner.map(r => (
            <IconBoxSection>
              {r.map(cell => <IconBox imgUrl={cell} width="80px" />)}
            </IconBoxSection>
          ))}
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(PartnerSection);
