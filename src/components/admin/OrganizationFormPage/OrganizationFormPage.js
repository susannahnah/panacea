import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';

class OrganizationFormPage extends Component {

  componentDidMount() {
    const orgName = this.props.match.params.orgName;
    if (orgName === 'new') {
      console.log('new form');
    } else {
      console.log('filled form');
    }
  }

  render() {
    return (
      <AdminLayout>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </AdminLayout>
    )
  }
}

export default connect()(OrganizationFormPage);