import React, {Component} from 'react';
import UserLayout from '../../layouts/UserLayout/UserLayout';
import { Paper, Divider, InputBase, Typography, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class UserLandingPage extends Component {

  state = {
    citySearch: '',
  }  

  handleChange = (e) => {
    this.setState({
      ...this.state,
      citySearch: e.target.value,
    });
  }

  render() {
    return (
        <UserLayout>
          <Grid item xs={12}
            style={{width: `100%`, display: `inline`}}>
            <Paper style={{border: `1px solid #6AA4DA`}}>
            <IconButton style={{width: `15%`}}>
              <SearchIcon/>
            </IconButton>
            <InputBase
              style={{width: `80%`}}
              value={this.state.citySearch}
              placeholder="Where are you traveling?"
              onChange={this.handleChange}/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{backgroundColor: `#EAECEE`}}>
              <Typography variant="h5" component="h5">
                Health and Wellness Resources
                for the Explorer.
              </Typography>
              <Typography variant="p" component="p">
                As heath care needs and locations change, we will help you quickly identify resources to support you in your journey, no matter where you are.
              </Typography>
            </Paper>
          </Grid>
        </UserLayout>
  )}
}

export default (UserLandingPage);