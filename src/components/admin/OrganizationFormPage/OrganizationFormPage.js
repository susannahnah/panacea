import React, { Component } from 'react';
import { connect } from 'react-redux';

//Material-UI components
import { TextField, Grid, Button, Select, MenuItem, OutlinedInput, InputLabel } from '@material-ui/core';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class OrganizationFormPage extends Component {
  state = {
    newOrg: {
      name: '',
      type: '',
      recommended: false,
      twentyfour: false,
      hours: '',
      homeopathic_remedies: '',
      labor_delivery: false,
      childrens: false,
      childrens_surgical: false,
      adult: false,
      adult_surgical: false,
      medical_translators: false,
      comments: '',
      phone_numbers: '',
      website_url: '',
      lat: '',
      long: '',
      google_maps_link: '',
    }
  }

  handleNewChange = (propertyName) => (event) => {
    console.log('change occured', event);
    this.setState({
      newOrg: {
        ...this.state.newOrg,
        [propertyName]: event.target.value,
      }
    });
  };

  handleNewCheckBoxChange = (propertyName) => (event) => {
    console.log('checkbox checked', event);
    this.setState({
      newOrg: {
        ...this.state.newOrg,
        [propertyName]: !this.state.newOrg[propertyName],
      }
    })

  }

  addNewOrg = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'POST_ORG', payload: this.state.newOrg });
    this.props.history.push('/organizations')
  };

  componentDidMount() {
    const { match: { params: { orgName } } } = this.props;
    if (orgName === 'new') {
      console.log('new form');
      this.props.dispatch({ type: 'FETCH_CITIES'})
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
              <Grid container>
                {/* <FormGroup> */}
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="recommended"
                          margin="normal"
                          checked={this.state.recommended}
                          onChange={this.handleNewCheckBoxChange('recommended')} />
                      }
                      label="Recommendation"
                    />
                  </Grid>
                  <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="twentyfour"
                        margin="normal"
                        value={this.state.twentyfour}
                        onChange={this.handleNewCheckBoxChange('twentyfour')} />
                    }
                    label="Open 24 Hours?"
                  />
                  </Grid>
                  <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="labor_delivery"
                        margin="normal"
                        value={this.state.labor_delivery}
                        onChange={this.handleNewCheckBoxChange('labor_delivery')} />
                    }
                    label="Labor and Delivery Available?"
                  />
                  </Grid>
                  <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="childrens"
                        margin="normal"
                        value={this.state.childrens}
                        onChange={this.handleNewCheckBoxChange('childrens')} />
                    }
                    label="Pediatric Services?"
                  />
                  </Grid>
                  <Grid item xs={6}> 
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="childrens_surgical"
                        margin="normal"
                        value={this.state.childrens_surgical}
                        onChange={this.handleNewCheckBoxChange('childrens_surgical')} />
                    }
                    label="Surgical Pediatric Services?"
                  />
                </Grid>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="adult"
                        margin="normal"
                        value={this.state.adult}
                        onChange={this.handleNewCheckBoxChange('adult')} />
                    }
                    label="Adult Medicine"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="adult_surgical"
                        margin="normal"
                        value={this.state.adult_surgical}
                        onChange={this.handleNewCheckBoxChange('adult_surgical')} />
                    }
                    label="Adult Surgical Services"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="medical_translators"
                        margin="normal"
                        value={this.state.medical_translators}
                        onChange={this.handleNewCheckBoxChange('medical_translators')} />
                    }
                    label="Medical Translators Available? "
                  />
                {/* </FormGroup> */}
              </Grid>
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
        {/* <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre> */}
      </AdminLayout>
    )
  }
}

export default connect()(OrganizationFormPage);