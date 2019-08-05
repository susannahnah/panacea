import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';

class OrganizationFormPage extends Component {
  state = {
    newOrg: {
      name: '',
      type: '',
      recommended: '',
      twentyfour: '',
      hours: '',
      homeopathic_remedies: '',
      labor_delivery: '',
      childrens: '',
      childrens_surgical: '',
      adult: '',
      adult_surgical: '',
      medical_translators: '',
      comments: '',
      phone_numbers: '',
      website_url: '',
      lat: '',
      long: '',
      google_maps_link: '',
    }
  }

  handleNewChange = (propertyName) => (event) => {
    console.log('organizations soon!');
    this.setState({
      newOrg: {
        ...this.state.newOrg,
        [propertyName]: event.target.value,
      }
    });
  };

  addNewOrg = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'POST_ORG', payload: this.state.newOrg });
    this.props.history.push('/organizations')
  };

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
        <h2>Add New Organization</h2>
        <form className="newOrgForm" onSubmit={this.addNewOrg}>
          <Grid id="newOrgGrid" container>
            <Grid className="inputFields" item xs={12}>
              <TextField
                id="name"
                label="Organization Name"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.name}
                onChange={this.handleNewChange('name')} />
              <TextField
                id="type"
                label="Organization Type"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.type}
                onChange={this.handleNewChange('type')} />
              <TextField
                id="recommended"
                label="Recommendation"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.recommended}
                onChange={this.handleNewChange('recommended')} />
              <TextField
                id="twentyfour"
                label="Open 24 Hours?"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.twentyfour}
                onChange={this.handleNewChange('twentyfour')} />
              <TextField
                id="hours"
                label="Open Hours"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.hours}
                onChange={this.handleNewChange('hours')} />
                <TextField
                id="homeopathic_remedies"
                label="Homeopathic Remedies"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.homeopathic_remedies}
                onChange={this.handleNewChange('homeopathic_remedies')} />
                <TextField
                id="labor_delivery"
                label="Labor and Delivery Available?"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.labor_delivery}
                onChange={this.handleNewChange('labor_delivery')} />
                <TextField
                id="childrens"
                label="Pediatric Services?"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.childrens}
                onChange={this.handleNewChange('childrens')} />
                <TextField
                id="childrens_surgical"
                label="Surgical Pediatric Services?"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.childrens_surgical}
                onChange={this.handleNewChange('childrens_surgical')} />
                <TextField
                id="adult"
                label="Adult Medicine"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.adult}
                onChange={this.handleNewChange('adult')} />
                <TextField
                id="adult_surgical"
                label="Adult Surgical Services"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.adult_surgical}
                onChange={this.handleNewChange('adult_surgical')} />
                <TextField
                id="medical_translators"
                label="Medical Translators Available? "
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.medical_translators}
                onChange={this.handleNewChange('medical_translators')} />
                <TextField
                id="comments"
                label="Additional Comments"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.comments}
                onChange={this.handleNewChange('comments')} />
                <TextField
                id="phone_number"
                label="Phone Number"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.phone_number}
                onChange={this.handleNewChange('phone_number')} />
                <TextField
                id="website_url"
                label="Website URL"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.website_url}
                onChange={this.handleNewChange('website_url')} />
                <TextField
                id="lat"
                label="Latitude"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.lat}
                onChange={this.handleNewChange('lat')} />
                <TextField
                id="long"
                label="Longitude"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.long}
                onChange={this.handleNewChange('long')} />
                <TextField
                id="google_maps_link"
                label="Google Maps Link"
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.google_maps_link}
                onChange={this.handleNewChange('google_maps_link')} />
            </Grid>
          </Grid>
        </form>
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </AdminLayout>
    )
  }
}

export default connect()(OrganizationFormPage);