import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class AdminLandingPage extends Component {

  render() {
    return (
        <>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <LogOutButton />
        </>
  )}
}

export default connect()(AdminLandingPage);
