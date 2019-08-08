import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from 'axios';
import './MapPage.css';
import BackButton from '@material-ui/icons/ChevronLeftRounded';
import UserLayout from '../../layouts/UserLayout/UserLayout';

function MapPage(props) {

  const { cityName } = props.match.params;
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

  if (props.location.city_id) {
    return (
      <>
        <UserLayout>

          <div className="container">

            <GoogleMapReact
              bootstrapURLKeys={{
                // TODO: restrict key later
                key: '',
                language: 'en'
              }}
              center={props.location.coordinates}
              defaultZoom={11}
              options={{ clickableIcons: false }}
            >
              {/* 
              TODO: add functioning back button
            <div className="back-button">
              <BackButton></BackButton>
            </div> */}

              {organizations.map((organization, i) => {
                return (
                  <Marker
                    key={i}
                    cityName={cityName}
                    {...organization}
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