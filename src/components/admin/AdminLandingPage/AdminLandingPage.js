import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';

class AdminLandingPage extends Component {

  render() {
    return (
        <AdminLayout>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <LogOutButton />
        </AdminLayout>
  )}
}

export default connect()(AdminLandingPage);
