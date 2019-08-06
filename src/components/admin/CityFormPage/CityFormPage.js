// src/components/admin/CityFormPage/CityFormPage.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI components
import { 
  Grid,
  TextField, 
  Button, 
  Select, 
  MenuItem,
  OutlinedInput, 
  InputLabel, 
  Table, 
  TableHead, 
  TableBody, 
  TableCell,
  TableRow, 
  IconButton, 
  SvgIcon 
} from '@material-ui/core';
import './CityFormPage.css';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';


class CityFormPage extends Component {
  state = {
    newCity: {
      country_id: null,
      name: null,
      overview: null,
      health_risks: null,
      ambulance: null,
      fire: null,
      police: null,
      roadside_assistance: null,
      wellness_resources: null,
      local_health_remedies: null,
      healthcare_tourism: null,
      WHO_link: null,
      CDC_link: null,
      google_translate_link: null,
      local_resources: null,
    },
    newMedication: {
      generic_name_us: '',
      brand_name_us: '',
      brand_name_translated: '',
    }
  }

  // handles input changes for city information
  handleCityChange = (propertyName) => (event) => {
    this.setState({      
      newCity: {
        ...this.state.newCity,
      [propertyName]: event.target.value,
      }
    })
  }

  // handles input changes for new medications
  handleMedicationChange = (prop) => (event) => {
    this.setState({
      newMedication: {
        ...this.state.newMedication,
        [prop]: event.target.value,
      }
    })
  }

  // if all medication inputs are fill out, 
  // will add a new medication to redux state until ready to post to database
  addNewMedication = () => {

    const generic = this.state.newMedication.generic_name_us;
    const brand_us = this.state.newMedication.brand_name_us;
    const brand_translated = this.state.newMedication.brand_name_translated;

    if( generic && brand_us && brand_translated ){
      this.props.dispatch({ type: 'ADD_NEW_MEDICATION', payload: this.state.newMedication });
      this.setState({
        newMedication: {
          generic_name_us: '',
          brand_name_us: '',
          brand_name_translated: '',
        }
      }); 
    } else {
      alert('please fill inputs!');
    }
  }

  // will grab array of medication from redux state, alter, then push new array to redux state
  deleteNewMedication = (i) => (event) => {

    const medications = this.props.reduxState.newMedicationsReducer;

    this.props.dispatch({
      type: 'DELETE_NEW_MEDICATION',
      payload: medications.slice(i, 1)
    });
  }

  addNewCity = event => {
    event.preventDefault();
    this.props.dispatch({ 
      type: 'POST_CITY', 
      payload: {
        city: this.state.newCity,
        medications: this.props.reduxState.newMedicationsReducer
      }
    })
    this.props.history.push('/cities')
  }

  componentDidMount() {
    // check url param "cityName"
    const { match: { params: { cityName } } } = this.props; // this is the same way as writing const params = this.props.match.params.cityName;
    if (cityName === 'new') {
      this.props.dispatch({
        type: 'NEW_CITY',
        payload: {
          city: this.state.newCity,
          medications: this.props.reduxState.newMedicationsReducer
        }
      });
      this.props.dispatch({ type: 'FETCH_COUNTRIES' });
    } else {
      console.log('filled form');
    }
  }

  render() {

    const countries = this.props.reduxState.countriesReducer;

    return (
      <AdminLayout>
        <div style={{height: `50px`, bottom: 0}}>
          { this.state.newCity.name ? 
          <h1>{this.state.newCity.name}</h1> :
          <h1> </h1> }
        </div>
        <form style={{width: `100%`}} onSubmit={this.addNewCity}>
          <h2>City Summary</h2>
          <Grid id="newCityGrid" container>
            <Grid className="inputFields" item xs={12}>
              <TextField 
                id="name" 
                label="City Name" 
                variant="outlined" 
                fullWidth margin="normal"
                value={this.state.newCity.name} 
                onChange={this.handleCityChange('name')} />
            </Grid>
            <Grid className="inputFields" item xs={12}>
              <InputLabel htmlFor="countrySelect">Country</InputLabel>
              <Select
                displayEmpty
                style={{minWidth: 120}}
                value={this.state.newCity.country_id}
                onChange={this.handleCityChange('country_id')}
                input={<OutlinedInput name="Country" id="outlined-country" />}
              >
                <MenuItem value="">
                  <em>Select A Country</em>
                </MenuItem>
                { countries.map( country => {
                  return (
                    <MenuItem key={country.id} value={country.id}>
                      {country.value} ({country.id})
                    </MenuItem>
                  )
                })}
              </Select>
            </Grid>
            <Grid className="inputFields"  item xs={12}>
              <TextField 
                rows="12" 
                label="Healthcare in the City" 
                multiline id="overview" 
                fullWidth margin="normal" 
                variant="outlined" 
                type='type' 
                value={this.state.newCity.overview} 
                onChange={this.handleCityChange('overview')} />
            </Grid> 
            <Grid className="inputFields"  item xs={12}>
              <TextField 
                rows="12" 
                label="Health Risks" 
                multiline id="health_risks" 
                fullWidth margin="normal" 
                variant="outlined" 
                type='type' 
                value={this.state.newCity.health_risks} 
                onChange={this.handleCityChange('health_risks')} />
            </Grid>
            <Grid className="inputFields" container spacing={3}
              item xs={12}>
              <h2 style={{
                marginBottom: 0,
                marginTop: `5vw`
              }}>
                Emergency Phone Numbers
              </h2>
              <Grid item xs={6}>
                <TextField 
                  id="ambulance" 
                  label="Ambulance" 
                  fullWidth margin="normal"
                  variant="outlined" 
                  value={this.state.newCity.ambulance} 
                  onChange={this.handleCityChange('ambulance')} />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="fire" 
                  label="Fire" 
                  fullWidth margin="normal" 
                  variant="outlined" 
                  value={this.state.newCity.fire} 
                  onChange={this.handleCityChange('fire')} />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="police" 
                  label="Police" 
                  fullWidth margin="normal" 
                  variant="outlined" 
                  value={this.state.newCity.police} 
                  onChange={this.handleCityChange('police')} />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  id="roadside_assistance" 
                  label="Roadside Assistance" 
                  fullWidth margin="normal" 
                  variant="outlined" 
                  value={this.state.newCity.roadside_assistance} 
                  onChange={this.handleCityChange('roadside_assistance')} />
              </Grid>
            </Grid>
            <Grid className="inputFields" container spacing={3}
              item xs={12}>
              <h2 style={{
                marginBottom: 0,
                marginTop: `5vw`
              }}>
                Medicine Translations
              </h2>
              <Grid container item xs={12}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>US Generic Name</TableCell>
                      <TableCell>US Brand Name</TableCell>
                      <TableCell>Translated Brand Name</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { this.props.reduxState.cityMedicationsReducer.map( med => {
                        return (
                          <TableRow key={med.generic_name_us}>
                            <TableCell>{med.generic_name_us}</TableCell>
                            <TableCell>{med.brand_name_us}</TableCell>
                            <TableCell>{med.brand_name_translated}</TableCell>
                          </TableRow>
                        );
                      })
                    }
                    { this.props.reduxState.newMedicationsReducer.map((med, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell>{med.generic_name_us}</TableCell>
                            <TableCell>{med.brand_name_us}</TableCell>
                            <TableCell>{med.brand_name_translated}</TableCell>
                            <TableCell>
                              <IconButton onClick={this.deleteNewMedication(i)}>
                                <SvgIcon>
                                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                                </SvgIcon>
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    }
                  </TableBody>
                </Table>
                <Grid item xs={4}>
                  <TextField label="US Generic Name"
                    margin="normal"
                    variant="outlined"
                    value={this.state.newMedication.generic_name_us}
                    onChange={this.handleMedicationChange('generic_name_us')}/>
                </Grid>
                <Grid item xs={4}>
                  <TextField label="US Brand Name"
                    margin="normal"
                    variant="outlined"
                    value={this.state.newMedication.brand_name_us}
                    onChange={this.handleMedicationChange('brand_name_us')}/>
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Translated Brand Name"
                    margin="normal"
                    variant="outlined"
                    value={this.state.newMedication.brand_name_translated}
                    onChange={this.handleMedicationChange('brand_name_translated')}/>
                </Grid>
                <Grid item xs={12} style={{textAlign: `center`}}>
                  <IconButton onClick={this.addNewMedication}>
                    <SvgIcon>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                    </SvgIcon>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid> 
            <Grid className="inputFields"  item xs={12}>
              <h2 style={{
                marginBottom: 0,
                marginTop: `4vw`
              }}>
                Additional Healthcare Options
              </h2>  
              <TextField 
                rows="12" 
                label="Wellness Resources" 
                multiline id="wellness_resources" 
                fullWidth margin="normal" 
                variant="outlined" 
                type='type' 
                value={this.state.newCity.wellness_resources} 
                onChange={this.handleCityChange('wellness_resources')} />
            </Grid>  
            <Grid className="inputFields"  item xs={12}>  
              <TextField 
                rows="12" 
                label="Local Health Remedies" 
                multiline id="local_health_remedies" 
                fullWidth margin="normal" 
                variant="outlined" 
                type='type' 
                value={this.state.newCity.local_health_remedies} 
                onChange={this.handleCityChange('local_health_remedies')} />
            </Grid>  
            <Grid className="inputFields"  item xs={12}>  
              <TextField 
                rows="12" 
                label="Healthcare Tourism" 
                multiline id="healthcare_tourism" 
                fullWidth margin="normal" 
                variant="outlined" 
                type='type' 
                value={this.state.newCity.healthcare_tourism}
                onChange={this.handleCityChange('healthcare_tourism')} />
            </Grid>  
            <Grid className="inputFields"  item xs={12}>
              <h2 style={{
                marginBottom: 0,
                marginTop: `4vw`
              }}>
                Important Resources
              </h2>   
              <TextField 
                id="WHO_link" 
                label="WHO Link" 
                fullWidth margin="normal" 
                variant="outlined" 
                value={this.state.newCity.WHO_link} 
                onChange={this.handleCityChange('WHO_link')} />
            </Grid>  
            <Grid className="inputFields"  item xs={12}>  
              <TextField 
                id="CDC_link" 
                label="CDC Link" 
                fullWidth margin="normal" 
                variant="outlined" 
                value={this.state.newCity.CDC_link} 
                onChange={this.handleCityChange('CDC_link')} />
            </Grid>  
            <Grid className="inputFields"  item xs={12}>  
              <TextField 
                id="google_translate_link" 
                label="Google Translate Link" 
                fullWidth margin="normal" 
                variant="outlined" 
                value={this.state.newCity.google_translate_link} 
                onChange={this.handleCityChange('google_translate_link')} />
            </Grid>
            <Grid className="inputFields"  item xs={12}>  
              <TextField 
                rows="12" 
                label="Local Online Resources" 
                multiline id="local_resources" 
                fullWidth margin="normal" 
                variant="outlined" 
                type='type' 
                value={this.state.newCity.local_resources} 
                onChange={this.handleCityChange('local_resources')} />
            </Grid>
            <Grid container item xs={12} 
              style={{margin: `5%`, marginBottom: `20vh`}}>
              <Grid item xs={4}>
                <Button type='submit' value='Add New City' style={{ width: "24vw" }} variant="contained" color="inherent">Submit New City</Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AdminLayout>
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({reduxState});

export default connect(mapReduxStateToProps)(CityFormPage);