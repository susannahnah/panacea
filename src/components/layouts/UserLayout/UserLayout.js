import React from 'react';

import UserNav from '../UserNav/UserNav';
import Footer from '../Footer/Footer';

export default ({children}) => {

    return (
        <div style={{ maxWidth: 650, padding: `0 1rem` }}>
            <UserNav/>
            {children}
            <Footer/>
        </div>
    );
}