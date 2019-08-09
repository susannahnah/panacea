import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CityPage.css';
import hospitalIcon from '../../../images/hospital-teal.png';
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
                    style={{ textAlign: `center`, marginTop: `3vh` }}
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
                      <Card style={{width: `35vw`, margin: `auto`, opacity: `.8`, elevation: `12`}}>
                        <Typography style={{ color: `#2ECBB0` }}>
                          {type}
                        </Typography>
                      </Card>
                      
                    </Link>

                  </Grid>

                ))}

            </Grid>
          </div>
          <Typography variant='h6' gutterBottom style={{ paddingLeft: `3%`, marginTop: '2%', marginBottom: '2%' }}>
            <img src={hospitalIcon} alt="Hospital Icon"/> 
            <> Healthcare in the City</>
          </Typography>
        </Paper>
        <Grid item xs={12}>
          <Paper style={{ backgroundColor: `#F8F9FA`}} square={true}>
          {/* <ExpansionPanel style={{width: `100%`}}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Expansion Panel 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel> */}

            {/* TODO: Refactor this code */}

            <Typography variant='body2' gutterBottom style={{ paddingLeft: `8%`, paddingRight: `8%` }}>
              <b>Overview:</b>
            </Typography>
              <Typography variant='body2' gutterBottom style={{ paddingLeft: `9%`, paddingRight: `8%` }}>
                {this.state.city.overview}
              </Typography>
            <Typography variant='body2' gutterBottom style={{ paddingLeft: `8%`, paddingRight: `8%` }}>
              <b>Health Risks:</b>
            </Typography>
              <Typography variant='body2' gutterBottom style={{ paddingLeft: `9%`, paddingRight: `8%` }}>
                {this.state.city.health_risks}
              </Typography>
            <Typography variant='body2' gutterBottom style={{ paddingLeft: `8%`, paddingRight: `8%` }}>
              <b>Wellness Resources:</b>
            </Typography>
              <Typography variant='body2' gutterBottom style={{ paddingLeft: `9%`, paddingRight: `8%` }}>
                {this.state.city.wellness_resources}
              </Typography>
            <Typography variant='body2' gutterBottom style={{ paddingLeft: `8%`, paddingRight: `8%` }}>
              <b>Local Health Remedies</b>
            </Typography>
              <Typography variant='body2' gutterBottom style={{ paddingLeft: `9%`, paddingRight: `8%` }}>
                {this.state.city.local_health_remedies}
              </Typography>
            <Typography variant='body2' gutterBottom style={{ paddingLeft: `8%`, paddingRight: `8%` }}>
              <b>Healthcare Tourism:</b>
            </Typography>
              <Typography variant='body2' gutterBottom style={{ paddingLeft: `9%`, paddingRight: `8%` }}>
                {this.state.city.healthcare_tourism}
              </Typography>
            <Typography variant='body2' gutterBottom style={{ paddingLeft: `8%`, paddingRight: `8%` }}>
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
            <Link 
            to={{ pathname: `/city/${this.props.match.params.cityName}/medications` }}
            style={{ textDecoration: 'underline', color: 'blue'}}
            >
              <Typography>
                Medicine Translations
              </Typography>
              
            </Link>

          </Paper>

        </Grid>

        <Typography variant='h4' gutterBottom style={{ marginTop: '2%', marginBottom: '2%' }}>
          <b>Emergency Phone Numbers</b>
        </Typography>

        <Grid item xs={12}>

          <Paper style={{ backgroundColor: `#F8F9FA`, padding: `2% 2%` }} square={true}>

            {/* TODO: Refactor this code */}

            <Typography gutterBottom>
              Fire: {this.state.city.fire}
            </Typography>

            <Typography gutterBottom>
              Police: {this.state.city.police}
            </Typography>

            <Typography gutterBottom>
              Ambulance: {this.state.city.ambulance}
            </Typography>

            <Typography>
              Roadside Assist: {this.state.city.roadside_assistance}
            </Typography>

          </Paper>

        </Grid>

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