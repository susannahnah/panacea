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

            <Button
              variant="outlined"
              onClick={this.handleClickAddCity}
            >Add New City</Button>

            <Button
              variant="outlined"
              onClick={this.handleClickAddOrganization}
            >Add New Organization</Button>

          </div>

          <br />

          <div className="admin-search-field">

            <div className="search-input">
              <TextField
                fullWidth={true}
                label="City"
                margin="dense"
                variant="outlined"
              />
            </div>

            <span className="search-button">
              <Button
                fullWidth={true}
                style={{ boxShadow: 'none' }}
                variant="contained"
                onClick={this.handleSearchCity}
              >Search</Button>
            </span>

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
                style={{ boxShadow: 'none' }}
                variant="contained"
                onClick={this.handleSearchOrganization}
              >Search</Button>
            </span>

          </div>

        </div>

        <LogOutButton />
      </>
    )
  }
}

export default connect()(AdminLandingPage);
