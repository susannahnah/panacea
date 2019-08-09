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
  const [showOrganization, setOrganizationToShow] = useState([]);

  const markerOpen = (e) => {
    const { id } = e.currentTarget;
    // console.log('You clicked me!', e.currentTarget.id);
    // console.log('this is state array', organizations);
    setOrganizationToShow(organizations.filter((org) => {
      return org.id == id;
    }))
    console.log(showOrganization[0]);
  }

  const markerClose = (e) => {
    setOrganizationToShow([]);
  }

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
        {/* <UserLayout> */}

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
                  showOrganizationClick={markerOpen}
                  cityName={cityName}
                  {...organization}
                />
              )
            })}

          </GoogleMapReact>

        </div>

        {/* adult: false
adult_surgical: false
childrens: false
childrens_surgical: false
city_id: 1
comments: "Important to be an advocate and have a birth plan and have talked to locals who recommend paying in cash staff to take better care of you otherwise you get minimal attention and lack of supplies.  bring your own supplies for pads, and foods etc for yourself and diapers outfits etc for baby"
created_at: "2019-08-07T17:22:13.674Z"
google_maps_link: "https://www.google.com/maps/place/Szpital+Ginekologiczno-Po%C5%82o%C5%BCniczy+im.+Rafa%C5%82a+Czerwiakowskiego/@50.0692737,19.930189,17z/data=!3m1!4b1!4m5!3m4!1s0x47165b0649eb0a4f:0x90f06b0b4a997bb9!8m2!3d50.0692737!4d19.9323777"
homeopathic_remedies: "none"
hours: "Open 24 hours"
id: 3
labor_delivery: true
lat: "50.069313"
lng: "19.932438"
medical_translators: false
name: "Szpital Ginekologiczno-Położniczy im. Rafała Czerwiakowskiego"
phone_number: "+48 12 634 22 22"
recommended: true
twentyfour: true
type: "Hospital"
website_url: "https://www.su.krakow.pl/" */}

        {
          showOrganization.length > 0
            ?
            <>
              <div className="organization-list">
                {showOrganization[0].name}
                <br />
                <span onClick={markerClose}>X</span>
              </div>
            </>
            :
            <>
            </>
        }



        {/* </UserLayout> */}

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