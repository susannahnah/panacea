import React, { Component } from "react";
import { connect } from 'react-redux';
import UserLayout from "../../layouts/UserLayout/UserLayout";
import { Link } from "react-router-dom";
import CompareArrow from "@material-ui/icons/CompareArrows";
import BackButton from "@material-ui/icons/ChevronLeftRounded";

import { 
  Grid,
  Typography,
  TextField, 
  Button, 
  Select, 
  MenuItem,
  OutlinedInput, 
  InputLabel, 
  Table, 
  TableHead, 
  TableBody, 
  TableCell,
  TableRow, 
  IconButton, 
  SvgIcon 
} from '@material-ui/core';

class MedicationsPage extends Component {

  componentDidMount () {
    this.props.dispatch({ type: 'FETCH_CITY_MEDICATIONS', payload: {city_id: this.props.location.id}});
  }

  render() {
    return (
      <>
        {/* TODO: REPLACE DUMMY DATA WITH REAL DATA */}

        <UserLayout>
          <Link
            style={{ display: 'block' }}
            to={{
              pathname: `/city/${this.props.match.params.cityName}`,
            }}
          >
            <BackButton />
          </Link>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>English Generic Name</TableCell>
                <TableCell>English Brand Name</TableCell>
                <TableCell>Translated Generic Name</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxState.cityMedicationsReducer.map(med => {
                return (
                  <TableRow key={med.generic_name_us}>
                    <TableCell>{med.generic_name_us}</TableCell>
                    <TableCell>{med.brand_name_us}</TableCell>
                    <TableCell>{med.generic_name_translated}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {/* 

          <Grid
            style={{ textAlign: 'center', width: '100%' }}
            container
            item
            xs={12}>

            <Grid
              item
              xs={12}
            >
              <Typography variant='h5' gutterBottom>
                Medicine Translated
            </Typography>
            </Grid>


            <Grid
              item
              xs={5}
            >
              <Typography gutterBottom>
                IBUPROFEN
            </Typography>
            </Grid>

            <CompareArrow />

            <Grid
              item
              xs={5}
            >
              <Typography gutterBottom>
                MOTRIN (BRUFEN)
            </Typography>
            </Grid>

            <Grid
              item
              xs={5}
            >
              <Typography gutterBottom>
                CLARITIN
            </Typography>
            </Grid>

            <CompareArrow />

            <Grid
              item
              xs={5}
            >
              <Typography gutterBottom>
                LORATADINE
            </Typography>
            </Grid>

            <Grid
              item
              xs={5}
            >
              <Typography gutterBottom>
                VICODIN
            </Typography>
            </Grid>

            <CompareArrow />

            <Grid
              item
              xs={5}
            >
              <Typography gutterBottom>
                ACETAMINOPHEN HYDROCODONE
            </Typography>
            </Grid>

            <Grid
              item
              xs={5}
            >
              <Typography gutterBottom>
                MUCINEX
            </Typography>
            </Grid>

            <CompareArrow />

            <Grid
              item
              xs={5}
            >
              <Typography gutterBottom>
                GUAIFENESIN
            </Typography>
            </Grid>

          </Grid> */}
        </UserLayout>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({reduxState});

export default connect(mapReduxStateToProps)(MedicationsPage);