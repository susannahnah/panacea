import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function MapPage(props) {

  console.log(props);
  const [coordinates, setCoordinates] = useState()

  return (
    <>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>

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

              <AnyReactComponent
                lat={props.location.coordinates.lat}
                lng={props.location.coordinates.lng}
                text="My Marker"
              />

            </GoogleMapReact>

          </div>

          :

          <></>

      }

    </>
  )
}

export default (MapPage);