import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";

//Material-UI
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import "./AdminLandingPage.css";
import { Button, Grid, TextField, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 2
  },
  addButton: {
    marginTop: 30,
    color: "white",
    background: "#1b3757"
  },
  searchButton: {
    height: 56,
    color: "white",
    background: "#1b3757",
    marginBottom: `-7px`
  },
  paper: {
    width: "100%",
    marginTop: 40,
    overflowX: "auto"
  }
});

function AdminLandingPage(props) {
  const [searchValues, setSearchValues] = useState({
    city: "",
    organization: ""
  });

  useEffect(() => {
    props.dispatch({ type: "SEARCH_CITY", payload: "" });
  }, []);
  useEffect(() => {
    props.dispatch({ type: "SEARCH_ORGANIZATION", payload: "" });
  }, []);
  useEffect(() => {
    props.dispatch({ type: "CLEAR_INDIVIDUAL_CITY" });
  }, []);
  useEffect(() => {
    props.dispatch({ type: "CLEAR_MEDICATIONS" });
  }, []);
  useEffect(() => {
    props.dispatch({ type: "CLEAR_INDIVIDUAL_ORGANIZATION" });
  }, []);

  // use classes names for styling
  const classes = useStyles();

  // Takes in a property name and the event to update local state.
  const handleChange = property => event => {
    switch (property) {
      case "city":
        setSearchValues({ organization: '', city: event.target.value });
        break;
      case "organization":
        setSearchValues({ city: '', organization: event.target.value });
        break;
      default:
        return;
    }
  };

  // Fetch the cities associated to the search
  const handleClickSearch = searchBy => event => {
    switch (searchBy) {
      case "city":
        setSearchValues({ ...searchValues, organization: "" });
        props.dispatch({ type: "SEARCH_CITY", payload: event.target.value });
        break;
      case "organization":
        setSearchValues({ ...searchValues, city: "" });
        props.dispatch({
          type: "SEARCH_ORGANIZATION",
          payload: event.target.value
        });
        break;
      default:
        return;
    }
  };

  return (
    <AdminLayout>
      <Grid container>
        <Grid container item spacing={1} direction="row" alignItems="center">
          <Grid item xs={6}>
            <Link to="/cities/new">
              <Button
                fullWidth
                className={classes.addButton}
                variant="contained"
              >
                Add New City
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/organizations/new/0">
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
      <Grid container item spacing={1} direction="row" alignItems="center">
        <Grid item xs={8}>
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
        <Grid item xs={4}>
          <Link to={"/cities?citySearched=" + searchValues.city}>
            <Button
              variant="contained"
              fullWidth
              className={classes.searchButton}
              onClick={() => handleClickSearch("city")}
            >
              Search
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container item spacing={1} direction="row" alignItems="center">
        <Grid item xs={8}>
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

        <Grid item xs={4}>
          <Link to={"/organizations?organizationSearched=" + searchValues.organization}>
            <Button
              variant="contained"
              fullWidth
              className={classes.searchButton}
              onClick={() => handleClickSearch("organization")}
            >
              Search
            </Button>
          </Link>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

const mapStateToRedux = reduxStore => ({
  reduxStore
});

export default connect(mapStateToRedux)(AdminLandingPage);
