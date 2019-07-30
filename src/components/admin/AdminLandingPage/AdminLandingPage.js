import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

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
        <pre>{JSON.stringify(this.props, null, 2)}</pre>

        <div className="admin-new-buttons">

          <Button
            variant="contained"
            onClick={this.handleClickAddCity}
          >Add New City</Button>

          <Button
            variant="contained"
            onClick={this.handleClickAddOrganization}
          >Add New Organization</Button>

        </div>

        <br />

        <div className="search-city-field">

          <TextField
            label="City"
            margin="dense"
            variant="outlined"
          />

          <Button
            variant="contained"
            onClick={this.handleSearchCity}
          >Search</Button>

        </div>

        <div className="search-org-field">

          <TextField
            label="Organization"
            margin="dense"
            variant="outlined"
          />

          <Button
            variant="contained"
            onClick={this.handleSearchOrganization}
          >Search</Button>

        </div>

        <LogOutButton />
      </>
    )
  }
}

export default connect()(AdminLandingPage);
