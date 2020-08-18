import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
  },
  section: {
    width: 1024,
    display: 'flex',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 80,
    paddingLeft: 40,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 20,
  },
};

class Introduction extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      backgroundImage,
      backgroundColor,
      title,
      titleWidth,
      titleBack,
      subtitle,
      description,
      descriptionWidth,
      fontColor,
      lineBorder,
      children,
    } = this.props;
    return (
      <div
        className={classes.root}
        style={{
          height: height,
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: backgroundColor,
          color: fontColor,
        }}
      >
        <div className={classes.section}>
          <div
            className={classes.title}
            style={{
              width: titleWidth,
            }}
          >
            {title}<br />{titleBack}
          </div>

          <div
            className={classes.line}
            style={{
              border: lineBorder,
            }}
          />

          <div className={classes.subtitle}>
            {subtitle}
          </div>

          <div
            className={classes.description}
            style={{
              width: descriptionWidth,
            }}
          >
            {description}
          </div>

          <div >
            {children}
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(Introduction);

