import React, { Component } from 'react';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


// Material-UI
import Button from "@material-ui/core/Button";
import { TextField, Grid, makeStyles, Paper } from "@material-ui/core";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { getThemeProps } from "@material-ui/styles";

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
  detailsButton: {
    height: 30,
    color: "white",
    background: "#76a3d5"
  },
  table: {
    // minWidth: 800,
  },
  paper: {
    width: "100%",
    marginTop: 40,
    overflowX: "auto"
  }
});

function OrganizationsPage(props) {
  // use classes names for styling
  const classes = useStyles();

  // Local state to store inputs for organization to search.
  const [searchValues, setSearchValues] = React.useState({
    organization: ""
  });

  // Takes in a property name and the event to update local state.
  const handleChange = property => event => {
    setSearchValues({ ...searchValues, [property]: event.target.value });
  };


  // Fetch the organizations associated to the search
  const handleClickSearch = searchBy => {
    switch (searchBy) {
      case "organizations":
        props.dispatch({ type: "SEARCH_ORGANIZATION", payload: searchValues.organization });
        break;
      default:
        return;
    }
  };

  return (
    <AdminLayout>
      <Grid container>
        <Grid container item spacing={1} direction="row" alignItems="center">
          <Grid item>
            <Link to="/organizations/new">
              <Button fullWidth className={classes.addButton} variant="contained">
                Add New Organization
            </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        item
        spacing={1}
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <TextField
            id="organization-search-input"
            label="Organization"
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
      <Grid container item spacing={1} direction="row" alignItems="center">
        <Grid container item>
          <Paper className={classes.paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Organizations</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">City</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {props.searchOrganizationReducer.map(organization => {
                  return (
                    <TableRow>
                      <TableCell>Szpital im. Gabriela Narutowicza</TableCell>
                      <TableCell align="right">Hospital</TableCell>
                      <TableCell align="right">Krakow</TableCell>
                      <TableCell align="right">Poland</TableCell>
                      <TableCell>
                        <Link to="/organizations/new">
                          <Button
                            variant="contained"
                            fullWidth
                            className={classes.detailsButton}
                          >
                            Details
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </AdminLayout>
  )
}

const mapReduxStateToProps = reduxState => ({
  searchOrganizationReducer: ['1', '2', '3']
});

export default connect(mapReduxStateToProps)(OrganizationsPage);
