import React from 'react';

import UserNav from '../UserNav/UserNav';
import Footer from '../Footer/Footer';
import './UserLayout.css';

import Grid from '@material-ui/core/Grid'

export default ({children}) => {

    return (
        <div className="App">
            <UserNav/>
            <Grid container spacing={5}
                item xs={12}
                style={{margin: `0`}}
            >
               {children} 
            </Grid>
            <Footer/>
        </div>
    );
}