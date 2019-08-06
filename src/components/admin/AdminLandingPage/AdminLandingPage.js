import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';
import './AdminLandingPage.css';

// material-ui
import { Button, Grid, TextField } from '@material-ui/core';

class AdminLandingPage extends Component {

  state = {
    city: '',
    organization: '',
  }

  clickAddCity = (e) => {
    this.props.history.push('/cities/new');
  }

  clickAddOrganization = (e) => {
    this.props.history.push('/organizations/new');
  }

  clickSearchCity = (e) => {
    this.props.dispatch({ type: 'SEARCH_CITY', payload: this.state.city });
    this.props.history.push('/cities');
  }

  clickSearchOrganization = () => {
    this.props.dispatch({ type: 'SEARCH_ORGANIZATION', payload: this.state.organization });
    this.props.history.push('/organizations');
  }

  inputSearchCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  }

  inputSearchOrganization = (e) => {
    this.setState({
      organization: e.target.value,
    });
  }

  componentDidMount() {
    this.props.dispatch({type: "CLEAR_INDIVIDUAL_CITY"})
  }

  render() {
    return (
      <AdminLayout>
        <Grid
          className="admin-home-container"
          container
        >

          <Grid
            item
            xs={6}
          >

            <Button
              size='large'
              style={{ width: '250px' }}
              variant="outlined"
              onClick={this.clickAddCity}
            >Add New City</Button>

          </Grid>

          <Grid
            item
            xs={6}
          >

            <Button
              size='large'
              style={{ width: '250px', marginLeft: '75px' }}
              variant="outlined"
              onClick={this.clickAddOrganization}
            >Add New Organization</Button>

          </Grid>

          <Grid
            item
            xs={8}
          >
            <TextField
              fullWidth
              label="City"
              margin="dense"
              value={this.state.city}
              variant="outlined"
              onChange={this.inputSearchCity}
            />

          </Grid>

          <Grid
            item
            xs={4}
          >

            <Button
              size='large'
              style={{ boxShadow: 'none', marginTop: '7px', marginLeft: '42px', width: '175px' }}
              variant="contained"
              onClick={this.clickSearchCity}
            >Search</Button>

          </Grid>

          <Grid
            item
            xs={8}
          >
            <TextField
              fullWidth
              label="Organization"
              margin="dense"
              value={this.state.organization}
              variant="outlined"
              onChange={this.inputSearchOrganization}
            />

          </Grid>

          <Grid
            item
            xs={4}
          >
            <Button
              size='large'
              style={{ boxShadow: 'none', marginTop: '7px', marginLeft: '42px', width: '175px' }}
              variant="contained"
              onClick={this.clickSearchOrganization}
            >Search</Button>

          </Grid>

        </Grid>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        {/* Temporary logout button */}
        <LogOutButton />

      </AdminLayout>
    )
  }
}

const mapStateToRedux = (reduxStore) => ({
  reduxStore
});

export default connect(mapStateToRedux)(AdminLandingPage);
