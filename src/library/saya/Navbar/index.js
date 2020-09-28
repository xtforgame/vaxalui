import React from 'react';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { MenuContext } from './MenuContext';
import navItems from './navigation';
import Menu from './Menu';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: 1024,
    fontSize: 12,
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: (theme.spacing(8) - theme.spacing(2)) / 2,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    whiteSpace: 'pre',
  },
  logo: {
    marginRight: 'auto', // TODO make a global style covering this
  },
  closing: {
    // TODO maybe height is relevant to list item size
    height: theme.spacing(8),
    transitionProperty: 'height',
    transitionDuration: '0.33s',
    transitionDelay: '0.1s',
  },
  opening: {
    // TODO maybe height is relevant to list item size
    height: theme.spacing(8) * 4,
    transitionProperty: 'height',
    transitionDuration: '0.33s',
    transitionDelay: '0s',
  },
});

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: '',
      enterPath: (path) => {
        const stack = this.state.pathStack;
        stack.push(path);
        this.setState({
          currentPath: path,
          pathStack: [...stack],
        });
      },
      leavePath: (path) => {
        const stack = this.state.pathStack;
        (stack[stack.length - 1] !== path) && console.error('Path leaving incorrect');
        stack.pop();
        this.setState({
          currentPath: (stack.length === 0) ? '' : stack[stack.length - 1],
          pathStack: [...stack],
        });
      },
      clearPath: () => {
        this.setState({
          currentPath: '',
          pathStack: [],
        });
      },
      pathStack: [],
      isOpen: false,
    };
  }

  componentDidUpdate() {
    const {
      currentPath,
    } = this.state;
    this.handleMenuChange(null, currentPath);
  }

  handleMenuChange = (e, value) => {
    const isOpening = (value !== '');
    this.setState({
      isOpen: isOpening,
    });
  }

  render() {
    const {
      onLinkClick,
      classes,
      items,
      children,
    } = this.props;
    const {
      isOpen,
    } = this.state;
    console.log('isOpen :', isOpen);
    return (
      <div
        className={clsx(classes.root, {
          [classes.closing]: !isOpen,
          [classes.opening]: isOpen,
        })}
        onMouseLeave={() => {
          console.log('handleMenuChange');
          this.state.clearPath();
        }}
      >
        <div
          className={classes.body}
        >
          <div
            className={classes.logo}
          >
            {children}
          </div>
          <div>
            <MenuContext.Provider
              value={{
                ...this.state,
                onLinkClick: onLinkClick || ((path) => {
                  console.warn('default onLinkClick', path);
                }),
              }}
            >
              <Menu
                items={items || navItems}
              />
            </MenuContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);

// export const pageQuery = graphql`
//   query ABC {
//     abc
//   }
// `;
