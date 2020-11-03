import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Project from './Project';
import { Slide } from '../reveal';

const styles = {
  root: {
    height: 620,
    paddingTop: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    width: 152,
    fontSize: 12,
    fontFamily: 'FilsonSoftRegular',
  },
  line: {
    width: '100%',
    border: '1px solid #979797',
    marginTop: 28,
  },
  listRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 64,
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
          <div style={{ width: 940 }}>
            <div>{title}</div>
            <div className={classes.line} />
            <div className={classes.listRoot}>
              <Slide direction="up" triggerOnce duration={1000}>
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
