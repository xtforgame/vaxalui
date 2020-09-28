import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';
import PartnerForm from './PartnerForm';
import DownloadItem from './DownloadItem';

const styles = {
  root: {
  },
  bottle: {
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  title: {
    width: 'fit-content',
    marginTop: 80,
    marginBottom: 22,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    lineHeight: 0.6,
  },
  subTitle: {
    width: 260,
    fontSize: 14,
    margin: '22px 0',
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: 660,
    height: 1,
    border: ' solid 1px #000000',
  },
  partnerFormWrapper: {
    padding: '0px 20px 24px',
    backgroundColor: '#e5e5e5',
    marginBottom: 22,
  },
  button: {
    marginLeft: 15,
  },
  space: {
    height: 92,
  }
};

class PaperAndEducation extends React.PureComponent {
  render() {
    const {
      classes,
      backgroundImage,
      bottleImage,
    } = this.props;
    return (
      <>
        <ImageContainer
          className={classes.root}
          image={backgroundImage}
        >
          <div className={classes.bottle}>
            <div className={classes.title}>Papers and Education</div>
            <div className={classes.line} />
            <div style={{ display: 'flex' }}>
              <div className={classes.subTitle}>
                Sustainability Report 2020
              </div>
              <div style={{ color: '#64703f', margin: '22px 0 22px 80px' }}>
                Please subscribe our newsletter to download
              </div>
            </div>
            <div className={classes.partnerFormWrapper}>
            <PartnerForm
              subtitle="Sign up to stay in touch on the newest renewal technologies, products, events, and news from SAYA."
              labelContent="SAYA may use my email address provided above to send me relevant marketing communications. I understand that I can unsubscribe from these communications at any time. "
              emailTextInputWidth="460px"
            />
            </div>
            <DownloadItem label="Promostyl" href="/" />
            <DownloadItem label="Tools" href="/" />
            <div style={{ border: '1px solid #000000' }} />
            <div className={classes.title}>Artworks</div>
            <div className={classes.line} />
            <DownloadItem label="Hangtag" href="/" />
            <DownloadItem label="Posters" href="/" />
            <DownloadItem label="Wallpaper" href="/" />
            <div className={classes.line} />
            <div className={classes.title}>Press Releases</div>
            <DownloadItem label="Nam dapibus nisl vitae elit fringilla rutrum - aenean sollicitudin" href="/" />
            <DownloadItem label="Lorem" href="/" />
            <div className={classes.line} />
          </div>
        </ImageContainer>
        <div className={classes.space} />
      </>
    );
  }
}


export default withStyles(styles)(PaperAndEducation);
