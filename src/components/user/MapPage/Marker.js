import React, { useState } from 'react';
import './Marker.css';

function Marker(props) {

    const [infoWindow, setInfoWindow] = useState(false);

    const showInfoWindow = () => {
        setInfoWindow(!infoWindow);
    }

    switch (props.type) {
        case 'Hospital':
            return (
                <>
                    <div onClick={showInfoWindow} className="pin bounce">
                        <span className="type">H</span>
                    </div>
                    {
                        infoWindow
                            ?
                            <InfoWindow visibility="show" {...props} />
                            :
                            <InfoWindow visibility="hidden" {...props} />
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
                            <InfoWindow visibility="show" {...props} />
                            :
                            <InfoWindow visibility="hidden" {...props} />
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
                            <InfoWindow visibility="show" {...props} />
                            :
                            <InfoWindow visibility="hidden" {...props} />
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
                            <InfoWindow visibility="show" {...props} />
                            :
                            <InfoWindow visibility="hidden" {...props} />
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
                            <InfoWindow visibility="show" {...props} />
                            :
                            <InfoWindow visibility="hidden" {...props} />
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
                            <InfoWindow visibility="show" {...props} />
                            :
                            <InfoWindow visibility="hidden" {...props} />
                    }
                </>
            )
    }
};

const InfoWindow = (props) => {
    return (
        <div className={props.visibility}>
            <h2 >{props.name}</h2>
            <h4 >info</h4>
        </div>
    )
}

export default Marker;