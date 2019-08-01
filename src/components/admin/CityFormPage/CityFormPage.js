import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './CityFormPage.css';

class CityFormPage extends Component {
  state = {
    newCity: {
      name: '',
      overview: '',
      health_risks: '',
      ambulance: '',
      fire: '',
      police: '',
      roadside_assistance: '',
      wellness_resources: '',
      local_health_remedies: '',
      healthcare_tourism: '',
      WHO_link: '',
      CDC_link: '',
      google_translate_link: '',
      local_resources: '',
    }
  }

  handleNewChange = (propertyName) => (event) => {
    console.log('somethings happening!');
    this.setState({
      newCity: {
        ...this.state.newCity,
        [propertyName]: event.target.value,
      }
    })
  }

  addNewCity = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'POST_CITY', payload: this.state.newCity })
    this.props.history.push('/cities')
  }

  componentDidMount() {
    const { match: { params: { cityName } } } = this.props; // this is the same way as writing const params = this.props.match.params.cityName;
    if (cityName === 'new') {
      console.log('new form');
    } else {
      console.log('filled form');
    }
  }

  render() {
    return (
      <div>
        <h2>Add New City</h2>
        <form onSubmit={this.addNewCity}>
        <Grid container xs={12} className='newCity'>
          <Paper>
          <Grid item xs={12} className="GridItTextCenter">
            <TextField id="name" label="City Name" margin="dense" variant="outlined" value={this.state.newCity.name} onChange={this.handleNewChange('name')} />
            <TextField rows="3" label="Healthcare in the City" multiline id="overview" margin="dense" variant="outlined" type='type' value={this.state.newCity.overview} onChange={this.handleNewChange('overview')} />
            <TextField rows="3" label="Health Risks" multiline id="health_risks" margin="dense" variant="outlined" type='type' value={this.state.newCity.health_risks} onChange={this.handleNewChange('health_risks')} />
            <TextField id="ambulance" label="Ambulance" margin="dense" variant="outlined" value={this.state.newCity.ambulance} onChange={this.handleNewChange('ambulance')} />
            <TextField id="fire" label="Fire" margin="dense" variant="outlined" value={this.state.newCity.fire} onChange={this.handleNewChange('fire')} />
            <TextField id="police" label="Police" margin="dense" variant="outlined" value={this.state.newCity.police} onChange={this.handleNewChange('police')} />
            <TextField id="roadside_assistance" label="Roadside Assistance" margin="dense" variant="outlined" value={this.state.newCity.roadside_assistance} onChange={this.handleNewChange('roadside_assistance')} />
            <TextField rows="3" label="Wellness Resources" multiline id="wellness_resources" margin="dense" variant="outlined" type='type' value={this.state.newCity.wellness_resources} onChange={this.handleNewChange('wellness_resources')} />
            <TextField rows="3" label="Local Health Remedies" multiline id="local_health_remedies" margin="dense" variant="outlined" type='type' value={this.state.newCity.local_health_remedies} onChange={this.handleNewChange('local_health_remedies')} />
            <TextField rows="3" label="Healthcare Tourism" multiline id="healthcare_tourism" margin="dense" variant="outlined" type='type' value={this.state.newCity.healthcare_tourism} onChange={this.handleNewChange('healthcare_tourism')} />
            <TextField id="WHO_link" label="WHO LInk" margin="dense" variant="outlined" value={this.state.newCity.WHO_link} onChange={this.handleNewChange('WHO_link')} />
            <TextField id="CDC_link" label="CDC Link" margin="dense" variant="outlined" value={this.state.newCity.CDC_link} onChange={this.handleNewChange('CDC_link')} />
            <TextField id="google_translate_link" label="WHO LInk" margin="dense" variant="outlined" value={this.state.newCity.google_translate_link} onChange={this.handleNewChange('google_translate_link')} />
            <TextField rows="3" label="Local Online Resources" multiline id="local_resources" margin="dense" variant="outlined" type='type' value={this.state.newCity.local_resources} onChange={this.handleNewChange('local_resources')} />
          </Grid>
          </Paper>
        </Grid>
        </form>
      </div>
      // <>
      //   <pre>
      //     {JSON.stringify(this.props, null, 2)}
      //   </pre>
      // </>
    )
  }
}

export default connect()(CityFormPage);