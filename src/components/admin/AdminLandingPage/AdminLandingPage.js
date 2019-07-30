import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './AdminLandingPage.css';

// material-ui
import { Button, TextField } from '@material-ui/core';

class AdminLandingPage extends Component {

  handleClickAddCity = (e) => {
    console.log('add city');
  }

  handleClickAddOrganization = (e) => {
    console.log('add org');
  }

  handleSearchCity = (e) => {
    console.log('search city');
  }

  handleSearchOrganization = (e) => {
    console.log('search org');
  }

  render() {
    return (
      <>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}

        <div className="admin-home-container">

          <div className="admin-new-buttons">

            <div className="new-city-button">

              <Button
                size='large'
                style={{ width: '250px' }}
                variant="outlined"
                onClick={this.handleClickAddCity}
              >Add New City</Button>

            </div>

            <div className="new-org-button">

              <Button
                size='large'
                style={{ width: '250px' }}
                variant="outlined"
                onClick={this.handleClickAddOrganization}
              >Add New Organization</Button>

            </div>

          </div>

          <div className="admin-search-city">

            <div className="search-input">
              <TextField
                fullWidth={true}
                label="City"
                margin="dense"
                variant="outlined"
              />
            </div>

            <div className="search-button">
              <Button
                size='large'
                style={{ boxShadow: 'none', width: '175px' }}
                variant="contained"
                onClick={this.handleSearchCity}
              >Search</Button>
            </div>

          </div>

          <div className="admin-search-org">

            <div className="search-input">
              <TextField
                fullWidth={true}
                label="Organization"
                margin="dense"
                variant="outlined"
              />
            </div>

            <span className="search-button">
              <Button
                size='large'
                style={{ boxShadow: 'none', width: '175px' }}
                variant="contained"
                onClick={this.handleSearchOrganization}
              >Search</Button>
            </span>

          </div>

        </div>

        {/* Temporary logout button */}
        {/* <LogOutButton /> */}
      </>
    )
  }
}

export default connect()(AdminLandingPage);
