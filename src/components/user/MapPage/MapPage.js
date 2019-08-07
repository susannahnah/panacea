import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from 'axios';
import './MapPage.css';
import BackButton from '@material-ui/icons/ChevronLeftRounded';
import UserLayout from '../../layouts/UserLayout/UserLayout';

function MapPage(props) {

  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {

    async function fetchOrganizations() {
      try {
        const { data } = await axios.get(`/api/public/map?city_id=${props.location.city_id}&orgType=${props.location.orgType}`);
        setOrganizations(data);
      } catch (error) {
        console.log('Error with request: ', error);
      }
    }

    if (props.location.city_id) {
      fetchOrganizations();
    }

  }, []);

  const markerClicked = (key, org) => {
    console.log('this is the org', org);
  }

  if (props.location.city_id) {
    return (
      <>
        <UserLayout>

          <div className="container">

            <GoogleMapReact
              bootstrapURLKeys={{
                key: '',
                language: 'en'
              }}
              center={props.location.coordinates}
              defaultZoom={11}
              onChildClick={markerClicked}
            >

              {/* TODO: add functioning back button
            <div className="back-button">
              <BackButton></BackButton>
            </div> */}

              {organizations.map((org, i) => {
                return (
                  <Marker
                    key={i}
                    {...org}
                  />
                )
              })}

            </GoogleMapReact>

          </div>

        </UserLayout>

      </>
    )
  } else {
    return (
      <>
      </>
    )
  }


}

export default (MapPage);