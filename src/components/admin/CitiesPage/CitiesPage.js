import React, { Component } from "react";

// Material-UI
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

class CitiesPage extends Component {
  // Local state to store inputs for city and country to search.
  state = {
    city: "",
    country: ""
  };

  // Takes in a property name and the event to update local state.
  handleChange = property => event => {
    this.setState({
      ...this.state,
      [property]: event.target.value
    });
  };

  render() {
    return (
      <>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          {/* Button to add a new city */}
          {/* <Grid item xs={6}>
            <Button variant="contained">Add New City</Button>
          </Grid> */}

          {/* Input field to search city */}
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={6} >
              <TextField
                id="city-search-input"
                label="City"
                value={this.state.city}
                onChange={this.handleChange("city")}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sm={2}>
              <Button variant="contained" fullWidth>Search</Button>
            </Grid>
          </Grid>

          {/* Input field to search cities in a specific country */}
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={6}>
              <TextField
                id="country-search-input"
                label="Country"
                value={this.state.country}
                onChange={this.handleChange("country")}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sm={2}>
              <Button variant="contained" fullWidth>Search</Button>
            </Grid>
          </Grid>
        </Grid>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </>
    );
  }
}

export default CitiesPage;
