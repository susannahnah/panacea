import React, { Component } from 'react';
import UserLayout from '../../layouts/UserLayout/UserLayout';
import { Grid, Typography } from '@material-ui/core';
import CompareArrow from '@material-ui/icons/CompareArrows';

class MedicationsPage extends Component {

  render() {
    return (
      <>

        {/* TODO: REPLACE DUMMY DATA WITH REAL DATA */}

        <UserLayout>

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

          </Grid>

        </UserLayout>

      </>
    )
  }
}

export default (MedicationsPage);