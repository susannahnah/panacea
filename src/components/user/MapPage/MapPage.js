import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from 'axios';
import './MapPage.css';

function MapPage(props) {

  const [loadingStatus, setLoadingStatus] = useState(false);
  const [coordinates, setCoordinates] = useState();
  const org = [{ lat: 50, lng: 19.9 }, { lat: 50, lng: 20 }];

  axios.get(`/api/`)

  if (loadingStatus) {
    return (
      <>

        {
          props.location.coordinates

            ?

            <div style={{ height: '100vh', width: '100%' }}>

              <GoogleMapReact
                bootstrapURLKeys={{
                  key: '',
                  language: 'en'
                }}
                center={props.location.coordinates}
                defaultZoom={11}
              >

                {org.map((object, i) => {
                  return (
                    <Marker
                      key={i}
                      {...object}
                    />
                  )
                })}

              </GoogleMapReact>

              <pre>
                {JSON.stringify(props, null, 2)}
              </pre>

            </div>

            :

            <></>

        }

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