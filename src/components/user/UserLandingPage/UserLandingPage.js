import React, { Component } from 'react';
import UserLayout from '../../layouts/UserLayout/UserLayout';
import { Paper, Typography, IconButton, Grid, Card, CardMedia } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import image from './panaceaFamilyImage.jpg';
import SearchBox from './SearchBox';

class UserLandingPage extends Component {

  state = {
    topCitySearch: '',
    bottomCitySearch: '',
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
            <SearchBox />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ backgroundColor: `#F8F9FA`, padding: `10% 5%` }} square={true}>
            <Typography style={{ marginBottom: `4%` }}
              variant="h5" component="h5">
              Find healthcare you can trust wherever you are.
              </Typography>
            <Typography component="p">
              As your needs or your location changes, we are here as a trusted resource to help lighten your load with quick and easy access to local information to support you in your journey, no matter where you are.
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
            {/* <Typography style={{ marginBottom: `10%` }}
              variant="h5" component="h5">
              New to Town?
              </Typography>
            <IconButton style={{ width: `15%` }}>
              <SearchIcon />
            </IconButton>
            <SearchBox /> */}
          </Paper>
        </Grid>
      </UserLayout>
    )
  }
}

export default (UserLandingPage);