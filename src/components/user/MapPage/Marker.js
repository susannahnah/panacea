import React from 'react';
import './Marker.css';

const InfoWindow = (props) => {
    return (
        <div className="info-window">
            <h2 style={{ margin: '0' }}>{props.name}</h2>
            <h4 style={{ margin: '0' }}>info</h4>
        </div>
    )
}

const Marker = (props) => {
    switch (props.type) {
        case 'Hospital':
            return (
                <>
                    <div className="pin bounce">
                        <span className="type">H</span>
                    </div>
                    <InfoWindow {...props} />
                </>
            )
        case 'Clinic':
            return (
                <>
                    <div className="pin bounce">
                        <span className="type">C</span>
                    </div>
                    <InfoWindow {...props} />
                </>
            )
        case 'Urgent Care':
            return (
                <>
                    <div className="pin bounce">
                        <span className="type">U</span>
                    </div>
                    <InfoWindow {...props} />
                </>

            )
        case 'Laboratory':
            return (
                <>
                    <div className="pin bounce">
                        <span className="type">L</span>
                    </div>
                    <InfoWindow {...props} />
                </>

            )
        case 'Home Visits':
            return (
                <>
                    <div className="pin bounce">
                        <span className="type">Hv</span>
                    </div>
                    <InfoWindow {...props} />
                </>

            )
        case 'Pharmacy':
            return (
                <>
                    <div className="pin bounce">
                        <span className="type">Ph</span>
                    </div>
                    <InfoWindow {...props} />
                </>
            )
    }
};

export default Marker;