import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
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

  render() {
    return (
      <>

        <Grid
          className="admin-home-container"
          container={true}>

          <div className="admin-new-buttons">

            <div className="new-city-button">

              <Button
                size='large'
                style={{ width: '250px' }}
                variant="outlined"
                onClick={this.clickAddCity}
              >Add New City</Button>

            </div>

            <div className="new-org-button">

              <Button
                size='large'
                style={{ width: '250px' }}
                variant="outlined"
                onClick={this.clickAddOrganization}
              >Add New Organization</Button>

            </div>

          </div>

          <div className="admin-search-city">

            <div className="search-input">
              <TextField
                fullWidth={true}
                label="City"
                margin="dense"
                value={this.state.city}
                variant="outlined"
                onChange={this.inputSearchCity}
              />
            </div>

            <div className="search-button">
              <Button
                size='large'
                style={{ boxShadow: 'none', width: '175px' }}
                variant="contained"
                onClick={this.clickSearchCity}
              >Search</Button>
            </div>

          </div>

          <div className="admin-search-org">

            <div className="search-input">
              <TextField
                fullWidth={true}
                label="Organization"
                margin="dense"
                value={this.state.organization}
                variant="outlined"
                onChange={this.inputSearchOrganization}
              />
            </div>

            <span className="search-button">
              <Button
                size='large'
                style={{ boxShadow: 'none', width: '175px' }}
                variant="contained"
                onClick={this.clickSearchOrganization}
              >Search</Button>
            </span>

          </div>

        </Grid>

        <pre>{JSON.stringify(this.props, null, 2)}</pre>

        {/* Temporary logout button */}
        <LogOutButton />
      </>
    )
  }
}

const mapStateToRedux = (reduxStore) => ({
  reduxStore
});

export default connect(mapStateToRedux)(AdminLandingPage);
