import React, { Component } from 'react';
import UserLayout from '../../layouts/UserLayout/UserLayout';
import { Paper, InputBase, Typography, IconButton, Grid, Card, CardMedia } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import image from './panaceaFamilyImage.jpg';
import axios from 'axios';
import AutoComplete from './AutoComplete';

class UserLandingPage extends Component {

  state = {
    topCitySearch: '',
    bottomCitySearch: '',
    cities: [],
  }

  componentDidMount() {
    axios.get('/api/cities')
      .then(({ data }) => {
        this.setState({
          cities: data,
        });
      })
      .catch((error) => {
        console.log('Error with get cities: ', error);
      })
  }

  handleChangeFor = (prop) => (e) => {
    this.setState({
      ...this.state,
      [prop]: e.target.value,
    });
  }

  render() {
    return (
      <UserLayout>
        <Grid item xs={12}
          style={{ width: `100%`, display: `inline` }}>
          <Paper style={{ border: `1px solid #6AA4DA` }} square={true}>
            <IconButton style={{ width: `15%` }}>
              <SearchIcon />
            </IconButton>
              <AutoComplete
                suggestions={this.state.cities}
              />
            {/* <InputBase
              style={{ width: `85%` }}
              value={this.state.citySearch}
              placeholder="Where are you traveling?"
              onChange={this.handleChangeFor('topCitySearch')} /> */}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ backgroundColor: `#F8F9FA`, padding: `10% 5%` }} square={true}>
            <Typography style={{ marginBottom: `10%` }}
              variant="h5" component="h5">
              Health and Wellness Resources
              for the Explorer.
              </Typography>
            <Typography component="p">
              As heath care needs and locations change, we will help you quickly identify resources to support you in your journey, no matter where you are.
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Card square={true}>
            <CardMedia
              component="img"
              alt="Panacea Family Image"
              height={270}
              image={image}
              title="Panacea Family Image"
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ backgroundColor: `#BBE2FC`, padding: `10% 5%` }} square={true}>
            <Typography style={{ marginBottom: `10%` }}
              variant="h5" component="h5">
              New to Town?
              </Typography>
            <IconButton style={{ width: `15%` }}>
              <SearchIcon />
            </IconButton>
            <AutoComplete
                suggestions={this.state.cities}
              />
            {/* <InputBase
              style={{ width: `80%` }}
              value={this.state.citySearch}
              placeholder="Where are you traveling?"
              onChange={this.handleChangeFor('bottomCitySearch')} /> */}
          </Paper>
        </Grid>
      </UserLayout>
    )
  }
}

export default (UserLandingPage);