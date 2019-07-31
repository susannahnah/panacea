import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </>
    )
  }
}

export default connect()(OrganizationFormPage);