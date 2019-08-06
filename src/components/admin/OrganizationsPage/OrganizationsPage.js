import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AdminLayout from "../../layouts/AdminLayout/AdminLayout";

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
    // width: 1000,
  },
  paper: {
    width: "100%",
    marginTop: 40,
    overflowX: "auto"
  }
});

function OrganizationsPage(props) {
  
  useEffect(() => {props.dispatch({type: "SEARCH_ORGANIZATION", payload: ""})}, []);

  // use classes names for styling
  const classes = useStyles();

  // Local state to store inputs for organization to search.
  const [searchValues, setSearchValues] = useState({
    organization: ""
  });

  // Takes in a property name and the event to update local state.
  const handleChange = property => event => {
    setSearchValues({ ...searchValues, [property]: event.target.value });
  };


  // Fetch the organizations associated to the search
  const handleClickSearch = searchBy => {
    switch (property) {
      case "organization":
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
                {props.searchOrganizationReducer &&
                  props.searchOrganizationReducer.map(org => {
                    return (
                      <TableRow key={org.organization_id}>
                        <TableCell>{org.organization_name}</TableCell>
                        <TableCell align="right">{org.type}</TableCell>
                        <TableCell align="right">{org.city_name}</TableCell>
                        <TableCell align="right">{org.country_name}</TableCell>
                        <TableCell>
                          <Link to={`/organizations/${org.organization_name.replace(/[^A-Z0-9]/ig, "_")}/${org.organization_id}`}>
                            <Button
                              variant="contained"
                              fullWidth
                              className={classes.detailsButton}
                              value={org.id}
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
      </Grid>
      <pre>Local State {JSON.stringify(searchValues, null, 2)}</pre>
      <pre>Props + Redux State {JSON.stringify(props, null, 2)}</pre>
    </AdminLayout>
  );
}

//
const mapReduxStateToProps = reduxState => ({
  searchOrganizationReducer: reduxState.searchReducer.searchOrganizationReducer
});

export default connect(mapReduxStateToProps)(OrganizationsPage);
