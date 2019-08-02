import React from 'react';

import UserNav from '../UserNav/UserNav';
import Footer from '../Footer/Footer';

import Grid from '@material-ui/core/Grid'

export default ({children}) => {

    return (
        <div>
            <UserNav/>
            <Grid container
                item xs={12}
                style={{width: `100vw`}}
            >
               {children} 
            </Grid>
            <Footer/>
        </div>
    );
}