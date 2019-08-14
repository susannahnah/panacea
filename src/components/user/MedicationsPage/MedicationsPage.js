import React, { Component } from "react";
import { connect } from 'react-redux';
import UserLayout from "../../layouts/UserLayout/UserLayout";
import { Link } from "react-router-dom";
import CompareArrow from "@material-ui/icons/CompareArrows";
import BackButton from "@material-ui/icons/ChevronLeftRounded";

import { 
  Table, 
  TableHead, 
  TableBody, 
  TableCell,
  TableRow, 
} from '@material-ui/core';

class MedicationsPage extends Component {

  componentDidMount () {
    this.props.dispatch({ type: 'FETCH_CITY_MEDICATIONS', payload: {city_id: this.props.location.id}});
  }

  render() {
    return (
      <>
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
                <TableCell>English Brand Name</TableCell>
                <TableCell>English Generic Name</TableCell>
                {/* <TableCell></TableCell> */}
                <TableCell>Translated Name</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxState.cityMedicationsReducer.map(med => {
                return (
                  <TableRow key={med.generic_name_us}>
                    <TableCell>{med.brand_name_us}</TableCell>
                    <TableCell>{med.generic_name_us}</TableCell>
                    <TableCell>{med.generic_name_translated}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </UserLayout>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({reduxState});

export default connect(mapReduxStateToProps)(MedicationsPage);