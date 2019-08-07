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
      address: '',
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
      this.props.dispatch({ type: 'FETCH_CITIES' })
    } else {
      console.log('filled form');
    }
  }

  render() {

    const cities = this.props.reduxState.allCitiesReducer;

    return (
      <AdminLayout>
        <div style={{ height: `50px`, bottom: 0 }}>
          {this.state.newOrg.name ?
            <h1>{this.state.newOrg.name}</h1> :
            <h1> </h1>}
        </div>
        <form style={{ width: `100%` }} onSubmit={this.addNewOrg}>
          <h2>Organization Summary</h2>
          <Grid id="newOrgGrid" container>
            <Grid className="inputFields" item xs={12}>
              <TextField
                id="name"
                label="Organization Name"
                margin="normal"
                variant="outlined"
                fullWidth margin="normal"
                value={this.state.newOrg.name}
                onChange={this.handleNewChange('name')} />
            </Grid>
            <Grid className="dropDownCity" item xs={12}>
              <InputLabel style={{ padding: "12px" }}
                htmlFor="citySelect">City</InputLabel>
              <Select
                displayEmpty
                inputProps={{
                  name: 'city',
                  id: 'citySelect',
                }}
                style={{ minWidth: 120 }}
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.city_id}
                onChange={this.handleNewChange('city_id')}
                input={<OutlinedInput name="City" id="outlined-city" />}
              >
                <MenuItem value="">
                  <em>Select A City</em>
                </MenuItem>
                {cities.map(city => {
                  return (
                    <MenuItem key={city.id} value={city.id}>
                      {city.value}
                    </MenuItem>
                  )
                })}
              </Select>
            </Grid>
            <Grid className="dropDownType" item xs={12}>
              <InputLabel style={{ padding: "12px" }}
                htmlFor="typeSelect"></InputLabel>
              <Select
                displayEmpty
                inputProps={{
                  name: 'type',
                  id: 'typeSelect',
                }}
                style={{ minWidth: 120 }}
                margin="normal"
                variant="outlined"
                value={this.state.newOrg.type}
                onChange={this.handleNewChange('type')}
                input={<OutlinedInput name="Type" id="outlined-type" />}
              >
                <MenuItem value="">
                  <em>Select Type of Organization</em>
                </MenuItem>
                {["Hospital", "Clinic", "Urgent Care", "Pharmacy",
                  "Laboratory", "Home Visits"].map(type => {
                    return (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    )
                  })
                }
              </Select>
            </Grid>
            <Grid className="checkBoxes" style={{ padding: "12px" }} container spacing={3}
              item xs={12}>
              <h2 style={{
                marginBottom: 0,
                marginTop: `5vw`
              }}>
              </h2>
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="recommended"
                      margin="normal"
                      color="primary"
                      checked={this.state.recommended}
                      onChange={this.handleNewCheckBoxChange('recommended')}
                    />
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
                      color="primary"
                      value={this.state.twentyfour}
                      onChange={this.handleNewCheckBoxChange('twentyfour')}
                    />
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
                      color="primary"
                      value={this.state.labor_delivery}
                      onChange={this.handleNewCheckBoxChange('labor_delivery')}
                    />
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
                      color="primary"
                      value={this.state.childrens}
                      onChange={this.handleNewCheckBoxChange('childrens')}
                    />
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
                      color="primary"
                      value={this.state.childrens_surgical}
                      onChange={this.handleNewCheckBoxChange('childrens_surgical')}
                    />
                  }
                  label="Surgical Pediatric Services?"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="adult"
                      margin="normal"
                      color="primary"
                      value={this.state.adult}
                      onChange={this.handleNewCheckBoxChange('adult')}
                    />
                  }
                  label="Adult Medicine"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="adult_surgical"
                      margin="normal"
                      color="primary"
                      value={this.state.adult_surgical}
                      onChange={this.handleNewCheckBoxChange('adult_surgical')}
                    />
                  }
                  label="Adult Surgical Services"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="medical_translators"
                      margin="normal"
                      color="primary"
                      value={this.state.medical_translators}
                      onChange={this.handleNewCheckBoxChange('medical_translators')}
                    />
                  }
                  label="Medical Translators Available? "
                />
              </Grid>
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                id="phone_number"
                label="Phone Number"
                margin="normal"
                variant="outlined"
                fullWidth margin="normal"
                value={this.state.newOrg.phone_number}
                onChange={this.handleNewChange('phone_number')} />
            </Grid>
            
            <Grid className="inputFields" item xs={12}>
              <TextField
                rows="8"
                multiline
                label="Open Hours"
                fullWidth margin="normal"
                variant="outlined"
                type='type'
                value={this.state.newOrg.hours}
                onChange={this.handleNewChange('hours')} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="website_url"
                label="Website URL"
                margin="normal"
                variant="outlined"
                fullWidth margin="normal"
                value={this.state.newOrg.website_url}
                onChange={this.handleNewChange('website_url')} />
            </Grid>
            <Grid className="inputFields" container spacing={3}
              item xs={12}>
              <h2 style={{
                marginBottom: 0,
                marginTop: `5vw`
              }}>
                Location
            </h2>
            <Grid className="inputFields" item xs={12}>
              <TextField
                rows="5"
                multiline
                label="Address"
                fullWidth margin="normal"
                variant="outlined"
                type='type'
                value={this.state.newOrg.address}
                onChange={this.handleNewChange('address')} />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="lat"
                label="Latitude"
                fullWidth margin="normal" 
                variant="outlined"
                value={this.state.newOrg.lat}
                onChange={this.handleNewChange('lat')} />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="long"
                label="Longitude"
                fullWidth margin="normal" 
                variant="outlined"
                value={this.state.newOrg.long}
                onChange={this.handleNewChange('long')} />
            </Grid>
          </Grid>
            <Grid item xs={12}>
              <TextField
                id="google_maps_link"
                label="Google Maps Link"
                fullWidth margin="normal"
                variant="outlined"
                value={this.state.newOrg.google_maps_link}
                onChange={this.handleNewChange('google_maps_link')} />
            </Grid>
            <Grid className="inputFields"  item xs={12}>
              <h2 style={{
                marginBottom: 0,
                marginTop: `4vw`
              }}>
                Additional Information
              </h2> 
            <Grid item xs={12}>
              <TextField
                rows="12"
                id="homeopathic_remedies"
                label="Homeopathic Remedies"
                variant="outlined"
                multiline
                fullWidth margin="normal"
                value={this.state.newOrg.homeopathic_remedies}
                onChange={this.handleNewChange('homeopathic_remedies')} />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="comments"
              rows="12"
              label="Additional Comments"
              multiline
              fullWidth margin="normal"              
              variant="outlined"
              value={this.state.newOrg.comments}
              onChange={this.handleNewChange('comments')} />
            </Grid>
            </Grid>
            <Grid container item xs={12} 
              style={{margin: `5%`, marginBottom: `20vh`}}>
              <Grid item xs={4}>
                <Button type='submit' value='Add New Organization' style={{ width: "24vw" }} variant="contained" color="inherent">Submit New Organization</Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AdminLayout >
    )
  }
}



const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(OrganizationFormPage);