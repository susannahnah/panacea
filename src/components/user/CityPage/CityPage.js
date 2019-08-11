import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CityPage.css';
import hospitalIcon from '../../../images/hospital-teal.png';
import phoneIcon from '../../../images/Ringing-phone-teal.png';
import UserLayout from '../../layouts/UserLayout/UserLayout';

// Material-UI components
import { 
  Grid, 
  Paper, 
  Typography,
  Link as MuiLink, 
  Card, 
  SvgIcon,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class CityPage extends Component {

  state = {
    city: {},
    orgTypes: ['Hospital', 'Clinic', 'Urgent Care', 'Laboratory', 'Home Visits', 'Pharmacy'],
  }

  componentDidMount() {
    axios.get(`/api/search/city?city_name=%${this.props.match.params.cityName}%`)
      .then(({ data }) => {
        this.setState({
          city: { ...data[0] },
        })
      })
      .catch((error) => {
        console.log('Error with search city:', error);
      })
  }

  render() {
    return (
      <UserLayout>
        <Paper style={{width: `100%` }} square={true}>
          <Typography variant='h5' gutterBottom style={{ paddingLeft: `4%`, marginTop: '2%', marginBottom: '2%' }}>
            <b>{this.state.city.city_name}, {this.state.city.city_country_id}</b>
          </Typography>
          <div className="stock-map">
            <Grid
              container
              spacing={1}
            >

              {this.state.orgTypes.map(
                (type, i) => (

                  <Grid
                    key={i}
                    item xs={6}
                    style={{ textAlign: `center`, marginTop: `2.5vh` }}
                  >

                    <Link
                      style={{ display: 'block' }}
                      to={{
                        pathname: `/map/${this.props.match.params.cityName}`,
                        city_id: this.state.city.city_id,
                        orgType: type,
                        coordinates: {
                          lat: Number(this.state.city.lat),
                          lng: Number(this.state.city.long)
                        },
                      }}>
                      <Card style={{
                          width: `35vw`, 
                          margin: `auto`, 
                          opacity: `.8`, 
                          elevation: `12`, 
                          backgroundColor: `#4A8CCD`,
                          padding: `2.5%`
                      }}>
                        <Typography variant='p' style={{ color: `white` }}>
                          {type}
                        </Typography>
                      </Card>
                      
                    </Link>

                  </Grid>

                ))}

            </Grid>
          </div>
          <Typography variant='h6' gutterBottom style={{ paddingLeft: `3%`, marginTop: '2%', marginBottom: '2%' }}>
            <img src={hospitalIcon} alt="Hospital Icon" /> 
            <> Healthcare in the City</>
          </Typography>
        </Paper>
        <Grid item xs={12}>
          <Paper style={{ backgroundColor: `#F8F9FA`}} square={true}>
            <ExpansionPanel display='block' style={{width: `100%`, backgroundColor: `#F8F9FA`}}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{color: `2ECBB0`}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div>
                  <Typography variant='body2' gutterBottom style={{ paddingLeft: `6%`, paddingRight: `6%` }}>
                    <b>Overview:</b> 
                  </Typography>
                    <Typography variant='body2' gutterBottom style={{ paddingLeft: `7%`, paddingRight: `6%` }}>
                      {this.state.city.overview}
                    </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{marginTop: 0}}>
                  <Typography variant='body2' gutterBottom style={{ paddingLeft: `5%`, paddingRight: `5%` }}>
                    <b>Health Risks:</b>
                  </Typography>
                    <Typography variant='body2' gutterBottom style={{ paddingLeft: `6%`, paddingRight: `5%` }}>
                      {this.state.city.health_risks}
                    </Typography>
                  <Typography variant='body2' gutterBottom style={{ paddingLeft: `5%`, paddingRight: `5%` }}>
                    <b>Wellness Resources:</b>
                  </Typography>
                    <Typography variant='body2' gutterBottom style={{ paddingLeft: `6%`, paddingRight: `5%` }}>
                      {this.state.city.wellness_resources}
                    </Typography>
                  <Typography variant='body2' gutterBottom style={{ paddingLeft: `5%`, paddingRight: `5%` }}>
                    <b>Local Health Remedies</b>
                  </Typography>
                    <Typography variant='body2' gutterBottom style={{ paddingLeft: `6%`, paddingRight: `5%` }}>
                      {this.state.city.local_health_remedies}
                    </Typography>
                  <Typography variant='body2' gutterBottom style={{ paddingLeft: `5%`, paddingRight: `5%` }}>
                    <b>Healthcare Tourism:</b>
                  </Typography>
                    <Typography variant='body2' gutterBottom style={{ paddingLeft: `6%`, paddingRight: `5%` }}>
                      {this.state.city.healthcare_tourism}
                    </Typography>
                  <Typography variant='body2' gutterBottom style={{ paddingLeft: `5%`, paddingRight: `5%` }}>
                    <b>Important Resources:</b>
                  { this.state.city.WHO_link &&
                    <Typography gutterBottom>
                      <MuiLink href={this.state.city.WHO_link} target="_blank" underline='always'>
                        WHO Link
                      </MuiLink>
                    </Typography>
                  }
                  { this.state.city.CDC_link &&
                    <Typography gutterBottom>
                      <MuiLink href={this.state.city.CDC_link} target="_blank" underline='always'>
                        CDC Link
                      </MuiLink>
                    </Typography>
                  }
                  { this.state.city.google_translate_link &&
                    <Typography gutterBottom>
                      <MuiLink href={this.state.city.google_translate_link} target="_blank" underline='always'>
                      Google Translate Link
                      </MuiLink>
                    </Typography>
                  }
                  { this.state.city.local_resources &&
                    <Typography gutterBottom>
                      <MuiLink href={this.state.city.local_resources} target="_blank" underline='always'>
                      Local Resources
                      </MuiLink>
                    </Typography>
                  }
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Paper>  
        </Grid>
        <Typography variant='h6' gutterBottom style={{ paddingLeft: `3%`, marginTop: '4%', marginBottom: '2%' }}>
            <img src={phoneIcon} alt="Phone Icon" style={{ width: `6%` }}/> 
            <> Emergency Phone Numbers</>
        </Typography>
        <Grid item xs={12}>
          <Paper style={{ backgroundColor: `#F8F9FA`, padding: `2% 11%` }} square={true}>
            <Typography variant='body1' gutterBottom>
              {this.state.city.fire}: Fire
            </Typography>
            <Typography variant='body1' gutterBottom>
              {this.state.city.police}: Police
            </Typography>
            <Typography variant='body1' gutterBottom>
              {this.state.city.ambulance}: Ambulance
            </Typography>
            <Typography variant='body1' gutterBottom>
              {this.state.city.roadside_assistance}: Roadside Assist
            </Typography>
          </Paper>
        </Grid>
        <Link 
        to={{ pathname: `/city/${this.props.match.params.cityName}/medications`, id: this.state.city.city_id }}
        style={{ textDecoration: 'underline', color: 'blue', padding: `11%`}}
        >
          <Typography>
            Medicine Translations
          </Typography>
          
        </Link>
        {/* <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>

        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre> */}
      </UserLayout >
    )
  }
}

export default (CityPage);