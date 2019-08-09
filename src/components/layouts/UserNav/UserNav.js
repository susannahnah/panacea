import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './UserNav.css';
import logo from './Panacea-logo.png';

// Material-UI components
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// 
const ListLink = props => (
  <ListItem>
    <Link to={props.to}>{props.children}</Link>
  </ListItem>
)

class UserNav extends Component {

  state = {
    right: false,
  }

  // handle drawer toggle
  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state, [side]: open });
  };

  // side drawer contents
  sideList = side => (
    <div 
      styles={{width: 250}}
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
      </List>
    </div>
  );

  render() {
    return (
      <div className="Nav">
        <Link to="/" underline='none'>
          <img src={logo} alt="Panacea Logo" style={{ margin: `3px 5px 0px 12px`,height: `48%`}}/>
          <h3 className="Title">Panacea</h3>
        </Link>
        <IconButton 
          style={{float: "right"}}
          onClick={this.toggleDrawer('right', true)}
        >
          <SvgIcon>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </SvgIcon>
        </IconButton>
        <Drawer open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          {this.sideList('right')}
        </Drawer>
      </div>
    )
  }
}

export default connect()(UserNav);
