import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Project from './Project';

const styles = {
  root: {
    height: 595,
    paddingTop: 60,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#979797',
    marginTop: 14,
  },
  listRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32,
  }
};


class TechnologyProjects extends React.PureComponent {
  render() {
    const {
      classes,
      title,
      list,
      backgroundColor,
    } = this.props;
    return (
      <>
        <div
          className={classes.root}
          style={{
            backgroundColor,
          }}
        >
          <div style={{ width: 320 }}>
            <div className={classes.title} >{title}</div>
            <div className={classes.line} />
            <div className={classes.listRoot}>
              {list.map(l => (<Project {...l} />))}
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default withStyles(styles)(TechnologyProjects);
