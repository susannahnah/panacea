import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CityPage.css';
import { Grid, Paper, Typography, Link as MuiLink } from '@material-ui/core/';
import UserLayout from '../../layouts/UserLayout/UserLayout';

class CityPage extends Component {

  state = {
    city: {},
    orgTypes: ['Hospital', 'Clinic', 'Urgent Care', 'Laboratory', 'Home Visits', 'Pharmacy'],
  }

  componentDidMount() {
    axios.get(`/api/search/city?city_name=%${this.props.match.params.cityName}%`)
      .then(({ data }) => {
        this.setState({
          city: { ...data[0] },
        })
      })
      .catch((error) => {
        console.log('Error with search city:', error);
      })
  }

  render() {
    return (
      <UserLayout>

        <div style={{ marginTop: '2%', marginBottom: '2%' }}>
          <b>{this.state.city.city_name} , {this.state.city.city_country_id}</b>
        </div>

        <div className="stock-map">
          <Grid
            container
            spacing={1}
          >

            {this.state.orgTypes.map(
              (type, i) => (

                <Grid
                  key={i}
                  item xs={6}
                  style={{ textAlign: `center`, marginTop: `2vh` }}
                >

                  <Link
                    style={{ display: 'block', backgroundColor: 'white', textDecoration: 'underline', color: 'blue' }}
                    to={{
                      pathname: `/map/${this.props.match.params.cityName}`,
                      city_id: this.state.city.city_id,
                      orgType: type,
                      coordinates: {
                        lat: Number(this.state.city.lat),
                        lng: Number(this.state.city.long)
                      },
                    }}>
                    {type}
                  </Link>

                </Grid>

              ))}

          </Grid>
        </div>

        <div style={{ marginTop: '2%', marginBottom: '2%' }}>
          <b>Healthcare in the city</b>
        </div>

        <Grid item xs={12}>

          <Paper style={{ backgroundColor: `#F8F9FA`, padding: `2% 2%` }} square={true}>

            {/* TODO: Refactor this code */}

            <Typography variant='h5' gutterBottom> 
              Overview: <Typography variant='body1' gutterBottom display='inline'>{this.state.city.overview}</Typography>
            </Typography>

            <Typography variant='h5' gutterBottom>
              Health Risks: <Typography variant='body1' gutterBottom display='inline'>{this.state.city.health_risks}</Typography>
            </Typography>

            <Typography variant='h5' gutterBottom>
              Wellness Resources: <Typography variant='body1' gutterBottom display='inline'>{this.state.city.wellness_resources}</Typography>
            </Typography>

            <Typography variant='h5' gutterBottom>
              Local Health Remedies: <Typography variant='body1' gutterBottom display='inline'>{this.state.city.local_health_remedies}</Typography>
            </Typography>

            <Typography variant='h5' gutterBottom>
              Healthcare Tourism: <Typography variant='body1' gutterBottom display='inline'>{this.state.city.healthcare_tourism}</Typography>
            </Typography>
            
            {this.state.city.WHO_link &&
            <Typography gutterBottom>
              <MuiLink href={this.state.city.WHO_link} target="_blank" underline='always'>
                WHO Link
              </MuiLink>
            </Typography>}

            {this.state.city.CDC_link &&
            <Typography gutterBottom>
              <MuiLink href={this.state.city.CDC_link} target="_blank" underline='always'>
                CDC Link
              </MuiLink>
            </Typography>}

            {this.state.city.google_translate_link &&
            <Typography gutterBottom>
              <MuiLink href={this.state.city.google_translate_link} target="_blank" underline='always'>
              Google Translate Link
              </MuiLink>
            </Typography>}

            {this.state.city.local_resources &&
            <Typography gutterBottom>
              <MuiLink href={this.state.city.local_resources} target="_blank" underline='always'>
              Local Resources
              </MuiLink>
            </Typography>}

            <Link 
            to={{ pathname: `/city/${this.props.match.params.cityName}/medications` }}
            style={{ textDecoration: 'underline', color: 'blue'}}
            >
              <Typography>
                Medicine Translations
              </Typography>
              
            </Link>

          </Paper>

        </Grid>

        <div style={{ marginTop: '2%', marginBottom: '2%' }}>
          <b>Emergency Phone Numbers</b>
        </div>

        <Grid item xs={12}>

          <Paper style={{ backgroundColor: `#F8F9FA`, padding: `2% 2%` }} square={true}>

            {/* TODO: Refactor this code */}

            <Typography gutterBottom>
              Fire: {this.state.city.fire}
            </Typography>

            <Typography gutterBottom>
              Police: {this.state.city.police}
            </Typography>

            <Typography gutterBottom>
              Ambulance: {this.state.city.ambulance}
            </Typography>

            <Typography>
              Roadside Assist: {this.state.city.roadside_assistance}
            </Typography>

          </Paper>

        </Grid>

        {/* <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>

        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre> */}
      </UserLayout >
    )
  }
}

export default (CityPage);