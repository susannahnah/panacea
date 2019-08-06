import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from 'axios';
import './MapPage.css';
import BackButton from '@material-ui/icons/ChevronLeftRounded';

function MapPage(props) {

  const [loadingStatus, setLoadingStatus] = useState(true);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {

    async function fetchOrganizations() {
      try {
        const { data } = await axios.get(`/api/public/map?city_id=${props.location.city_id}&orgType=${props.location.orgType}`);
        setOrganizations(data);
      } catch (error) {
        console.log('Error with request: ', error);
      }

      setLoadingStatus(false);
    }

    if (props.location.city_id) {
      fetchOrganizations();
    }

    setLoadingStatus(true);
  }, []);

  if (!loadingStatus) {
    return (
      <>

        <div className="container">

          <GoogleMapReact
            bootstrapURLKeys={{
              key: '',
              language: 'en'
            }}
            center={props.location.coordinates}
            defaultZoom={11}
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

      </>
    )
  } else {
    return (
      <div className="container">
        <div className="loading"></div>
      </div>
    )
  }


}

export default (MapPage);