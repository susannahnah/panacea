import React, { useState } from 'react';
import './Marker.css';
import { Link } from 'react-router-dom';

function Marker(organization) {

    const [infoWindow, setInfoWindow] = useState(false);

    const showInfoWindow = () => {
        setInfoWindow(!infoWindow);
    }

    switch (organization.type) {
        case 'Hospital':
            return (
                <>
                    <div onClick={showInfoWindow} className="pin bounce">
                        <span className="type">H</span>
                    </div>
                    {
                        infoWindow
                            ?
                            <InfoWindow visibility="show" {...organization} />
                            :
                            <InfoWindow visibility="hidden" {...organization} />
                    }
                </>
            )
        case 'Clinic':
            return (
                <>
                    <div onClick={showInfoWindow} className="pin bounce">
                        <span className="type">C</span>
                    </div>
                    {
                        infoWindow
                            ?
                            <InfoWindow visibility="show" {...organization} />
                            :
                            <InfoWindow visibility="hidden" {...organization} />
                    }
                </>
            )
        case 'Urgent Care':
            return (
                <>
                    <div onClick={showInfoWindow} className="pin bounce">
                        <span className="type">U</span>
                    </div>
                    {
                        infoWindow
                            ?
                            <InfoWindow visibility="show" {...organization} />
                            :
                            <InfoWindow visibility="hidden" {...organization} />
                    }
                </>

            )
        case 'Laboratory':
            return (
                <>
                    <div onClick={showInfoWindow} className="pin bounce">
                        <span className="type">L</span>
                    </div>
                    {
                        infoWindow
                            ?
                            <InfoWindow visibility="show" {...organization} />
                            :
                            <InfoWindow visibility="hidden" {...organization} />
                    }
                </>

            )
        case 'Home Visits':
            return (
                <>
                    <div onClick={showInfoWindow} className="pin bounce">
                        <span className="type">Hv</span>
                    </div>
                    {
                        infoWindow
                            ?
                            <InfoWindow visibility="show" {...organization} />
                            :
                            <InfoWindow visibility="hidden" {...organization} />
                    }
                </>

            )
        case 'Pharmacy':
            return (
                <>
                    <div onClick={showInfoWindow} className="pin bounce">
                        <span className="type">Ph</span>
                    </div>
                    {
                        infoWindow
                            ?
                            <InfoWindow visibility="show" {...organization} />
                            :
                            <InfoWindow visibility="hidden" {...organization} />
                    }
                </>
            )
    }
};

const InfoWindow = (organization) => {

    // If you are styling, this is all the organization information
    // comments: "Important to be an advocate and have a birth plan and have talked to locals who recommend paying in cash staff to take better care of you otherwise you get minimal attention and lack of supplies.  bring your own supplies for pads, and foods etc for yourself and diapers outfits etc for baby"
    // created_at: "2019-08-07T17:22:13.674Z"
    // google_maps_link: "https://www.google.com/maps/place/Szpital+Ginekologiczno-Po%C5%82o%C5%BCniczy+im.+Rafa%C5%82a+Czerwiakowskiego/@50.0692737,19.930189,17z/data=!3m1!4b1!4m5!3m4!1s0x47165b0649eb0a4f:0x90f06b0b4a997bb9!8m2!3d50.0692737!4d19.9323777"
    // homeopathic_remedies: "none"
    // hours: "Open 24 hours"
    // id: 3
    // labor_delivery: true
    // lat: "50.069313"
    // lng: "19.932438"
    // medical_translators: false
    // name: "Szpital Ginekologiczno-Położniczy im. Rafała Czerwiakowskiego"
    // phone_number: "+48 12 634 22 22"
    // recommended: true
    // twentyfour: true
    // type: "Hospital"
    // visibility: "hidden"

    const { showOrganizationClick } = organization;

    return (
        <div className={organization.visibility}>
            <h3>{organization.name}</h3>
            <h4>Phone Number: {organization.phone_number}</h4>
            <a target="_blank" href={organization.google_maps_link}>directions</a>
            <br />
            <span onClick={showOrganizationClick} id={organization.id}>...more info</span>
        </div>
    )
}

export default Marker;