import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Project from './Project';
import { Slide } from '../reveal';

const styles = {
  root: {
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
      height,
      title,
      list,
      backgroundColor,
    } = this.props;
    return (
      <>
        <div
          className={classes.root}
          style={{
            backgroundColor, height
          }}
        >
          <div style={{ width: 320 }}>
            <Slide direction="up" triggerOnce>
              <div className={classes.title} >{title}</div>
              <div className={classes.line} />
            </Slide>
            <div className={classes.listRoot}>
              <Slide direction="up" triggerOnce>
                {list.map(l => (<Project {...l} />))}
              </Slide>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default withStyles(styles)(TechnologyProjects);
