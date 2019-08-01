import React from "react";

import AdminLayout from '../../layouts/AdminLayout/AdminLayout';

// Material-UI
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  addButton: {
    height: 75,
    color: "white",
    background: "#76a3d5",
  },
  searchButton: {
    height: 50,
    color: "white",
    background: "#76a3d5",
  }
});

function CitiesPage() {
  // Local state to store inputs for city and country to search.
  const classes = useStyles();

  const [searchValues, setSearchValues] = React.useState({
    city: "",
    country: ""
  });

  // Takes in a property name and the event to update local state.
  const handleChange = property => event => {
    setSearchValues({ ...searchValues, [property]: event.target.value });
  };

  return (
    <AdminLayout>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {/* Button to add a new city */}
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            <Button fullWidth className={classes.addButton} variant="contained">
              Add New City
            </Button>
          </Grid>
        </Grid>

        {/* Input field to search city */}
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item sm={6}>
            <TextField
              id="city-search-input"
              label="City"
              value={searchValues.city}
              onChange={handleChange("city")}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item sm={2}>
            <Button variant="contained" fullWidth className={classes.searchButton}>
              Search
            </Button>
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
              value={searchValues.country}
              onChange={handleChange("country")}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item sm={2}>
            <Button variant="contained" fullWidth className={classes.searchButton}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <pre>{JSON.stringify(searchValues, null, 2)}</pre>
      </AdminLayout>
  );
}

export default CitiesPage;
