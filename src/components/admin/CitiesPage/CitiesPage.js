import React from "react";
import { Link } from "react-router-dom";

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

  const handleChangeDetails = () => {};

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
              value={searchValues.country}
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
      <pre>{JSON.stringify(searchValues, null, 2)}</pre>
    </AdminLayout>
  );
}

export default CitiesPage;
