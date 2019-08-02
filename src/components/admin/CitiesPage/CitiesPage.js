import React from "react";
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
  },
  paper: {
    width: "100%",
    marginTop: 40,
    overflowX: "auto"
  }
});

function CitiesPage(props) {
  // use classes names for styling
  const classes = useStyles();

  // Local state to store inputs for city and country to search.
  const [searchValues, setSearchValues] = React.useState({
    city: "",
    country: ""
  });

  // Takes in a property name and the event to update local state.
  const handleChange = property => event => {
    setSearchValues({ ...searchValues, [property]: event.target.value });
  };

  // Fetch the cities associated to the search 
  const handleClickSearch = (searchBy) => {
    switch (searchBy) {
      case "city":
        props.dispatch({type: "FETCH_CITIES_BY_CITY_NAME", payload: searchValues.city});
        break;
      case "country":
        props.dispatch({type: "FETCH_CITIES_BY_COUNTRY_NAME", payload: searchValues.city});
        break;
      default:
        return
    }
  }

  return (
    <AdminLayout>
      <Grid container>
        <Grid container item spacing={1} direction="row" alignItems="center">
          <Grid item>
            <Button fullWidth className={classes.addButton} variant="contained">
              Add New City
            </Button>
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
              id="city-search-input"
              label="City"
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
              onClick={() => handleClickSearch("city")}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={1} direction="row" alignItems="center">
        <Grid item>
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
        <Grid item>
          <Button
            variant="contained"
            fullWidth
            className={classes.searchButton}
            onClick={() => handleClickSearch("country")}
          >
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
                  <TableCell>City</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Krakow</TableCell>
                  <TableCell align="right">Poland</TableCell>
                  <TableCell>
                    <Link to="/cities/new">
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
                <TableRow>
                  <TableCell>Warsaw</TableCell>
                  <TableCell align="right">Poland</TableCell>
                  <TableCell>
                    <Link to="/cities/new">
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
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
      <pre>Local State{JSON.stringify(searchValues, null, 2)}</pre>
      <pre>Props{JSON.stringify(props, null, 2)}</pre>
    </AdminLayout>
  );
}

export default connect()(CitiesPage);
