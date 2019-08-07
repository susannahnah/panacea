import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CityPage.css';
import { Grid, Paper, Typography } from '@material-ui/core/';
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

        <div>{this.state.city.city_name} , {this.state.city.city_country_id}</div>

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
                    style={{ display: 'block', backgroundColor: 'white' }}
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

        <div>Healthcare in the city</div>

        <Grid item xs={12}>

          <Paper style={{ backgroundColor: `#F8F9FA`, padding: `10% 5%` }} square={true}>
            <Typography>
              {this.state.city.overview}
            </Typography>
          </Paper>

        </Grid>

        <div>Emergency Phone Numbers</div>

        <Grid item xs={12}>

          <Paper style={{ backgroundColor: `#F8F9FA`, padding: `10% 5%` }} square={true}>
            <Typography>
              {this.state.city.ambulance}
              {this.state.city.fire}
              {this.state.city.police}
              {this.state.city.roadside_assistance}
            </Typography>
          </Paper>

        </Grid>
{/* 
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>

        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre> */}
      </UserLayout>
    )
  }
}

export default (CityPage);