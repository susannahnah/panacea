import React from 'react';
import './Marker.css';

const Marker = (props) => {
    switch (props.type) {
        case 'Hospital':
            return (
                <div className="pin bounce">
                    <span className="type">H</span>
                </div>
            )
        case 'Clinic':
            return (
                <div className="pin bounce">
                    <span className="type">C</span>
                </div>
            )
        case 'Urgent Care':
            return (
                <div className="pin bounce">
                    <span className="type">U</span>
                </div>
            )
        case 'Laboratory':
            return (
                <div className="pin bounce">
                    <span className="type">L</span>
                </div>
            )
        case 'Home Visits':
            return (
                <div className="pin bounce">
                    <span className="type">Hv</span>
                </div>
            )
        case 'Pharmacy':
            return (
                <div className="pin bounce">
                    <span className="type">Ph</span>
                </div>
            )
    }
};

export default Marker;