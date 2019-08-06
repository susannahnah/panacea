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


// class AdminLandingPage extends Component {

//   state = {
//     city: '',
//     organization: '',
//   }

//   clickAddCity = (e) => {
//     this.props.history.push('/cities/new');
//   }

//   clickAddOrganization = (e) => {
//     this.props.history.push('/organizations/new');
//   }

//   clickSearchCity = (e) => {
//     this.props.dispatch({ type: 'SEARCH_CITY', payload: this.state.city });
//     this.props.history.push('/cities');
//   }

//   clickSearchOrganization = () => {
//     this.props.dispatch({ type: 'SEARCH_ORGANIZATION', payload: this.state.organization });
//     this.props.history.push('/organizations');
//   }

//   inputSearchCity = (e) => {
//     this.setState({
//       city: e.target.value,
//     });
//   }

//   inputSearchOrganization = (e) => {
//     this.setState({
//       organization: e.target.value,
//     });
//   }

// render() {}

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
      <div 
      style={{ height: `50px`, bottom: 0 }}
      >
      </div>
      <Grid container>
        <Grid container item spacing={1} direction="row" alignItems="center">
          <Grid item xs={6}>
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
            variant="contained">
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
            id="city-search-input"
            label="Search City"
            value={searchValues.city}
            onChange={handleChange("city")}
            margin="normal"
            variant="outlined"
            fullWidth
          />
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
          <Grid
          item
          xs={6}
        >

          {/* <Button
            size='large'
            style={{ width: '250px', marginLeft: '75px' }}
            variant="outlined"
            onClick={this.clickAddOrganization}
          >Add New Organization</Button> */}

        </Grid>
      </Grid> 
    </Grid>
    </AdminLayout>
  )
}
      
      
const mapStateToRedux = (reduxStore) => ({
          reduxStore
        });
        
        export default connect(mapStateToRedux)(AdminLandingPage);
