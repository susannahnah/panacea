import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

//Material-UI
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';
import './AdminLandingPage.css';
import { Button, Grid, TextField, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 2
  },
  addButton: {
    marginTop: 30,
    color: "white",
    background: "#76a3d5"
  },
  searchButton: {
    height: 50,
    color: "white",
    background: "#76a3d5"
  },
  paper: {
    width: "100%",
    marginTop: 40,
    overflowX: "auto"
  }
});

  componentDidMount() {
    this.props.dispatch({type: "CLEAR_INDIVIDUAL_CITY"});
    this.props.dispatch({type: "CLEAR_MEDICATIONS"});
  }

function AdminLandingPage(props) {

  useEffect(() => { props.dispatch({ type: "SEARCH_CITY", payload: "" }) }, []);
  useEffect(() => { props.dispatch({ type: "SEARCH_ORGANIZATION", payload: "" }) }, []);


  // use classes names for styling
  const classes = useStyles();

  // Local state to store inputs for city and country to search.
  const [searchValues, setSearchValues] = useState({
    city: "",
    organization: ""
  });

  // Takes in a property name and the event to update local state.
  const handleChange = property => event => {
    setSearchValues({ ...searchValues, [property]: event.target.value });
  };


  // Fetch the cities associated to the search
  const handleClickSearch = searchBy => event => {
    switch (searchBy) {
      case "city":
        props.dispatch({ type: "SEARCH_CITY", payload: event.target.value });
        break;
      case "organization":
        console.log(searchValues);
        props.dispatch({
          type: "SEARCH_ORGANIZATION",
          payload: event.target.value,
        });
        break;
      default:
        return;
    }
  };


  return (
    <AdminLayout>
      <Grid container>
        <Grid container
          item spacing={1}
          direction="row"
          alignItems="center"
        >
          <Grid item
            xs={6}
          >
            <Link to="/cities/new">
              <Button
                fullWidth
                className={classes.addButton}
                variant="contained">
                Add New City
            </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/organizations/new">
              <Button
                fullWidth
                className={classes.addButton}
                variant="contained"
              >
                Add New Organization
            </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container
        item spacing={1}
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <TextField
            id="city-search-input"
            label="Search City"
            value={searchValues.city}
            onChange={handleChange("city")}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            fullWidth
            className={classes.searchButton}
            onClick={() => handleClickSearch("city")}>
            Search
            </Button>
        </Grid>
      </Grid>
      <Grid container
        item spacing={1}
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <TextField
            id="organization-search-input"
            label="Search Organization"
            value={searchValues.organization}
            onChange={handleChange("organization")}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            fullWidth
            className={classes.searchButton}
            onClick={() => handleClickSearch("organization")}>
            Search
            </Button>
        </Grid>
      </Grid>

    </AdminLayout>
  )
}


const mapStateToRedux = (reduxStore) => ({
  reduxStore
});

export default connect(mapStateToRedux)(AdminLandingPage);
