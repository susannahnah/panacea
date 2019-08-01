import React from 'react';

import AdminNav from '../AdminNav/AdminNav';
import Footer from '../Footer/Footer';

export default ({children}) => {

    return (
        <div style={{ maxWidth: 650, padding: `0 1rem`, margin: `6vw` }}>
            <AdminNav/>
            {children}
            <Footer/>
        </div>
    );
}