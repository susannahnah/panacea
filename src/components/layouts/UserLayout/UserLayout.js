import React from 'react';

import UserNav from '../UserNav/UserNav';
import Footer from '../Footer/Footer';
import SearchBox from './SearchBox';

import { Grid, Paper, IconButton } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';

export default ({ children }) => {

    return (
            <div>
                <UserNav />
                <Grid container
                    item xs={12}
                    style={{ width: `100vw` }}
                >
                    <Grid item xs={12}
                        style={{ width: `100%`, display: `inline` }}>
                        <Paper style={{ 
                            border: `1px solid #6AA4DA`, borderLeft: `0px`, borderRight: `0px` 
                            }} square={true}>
                            <IconButton style={{ width: `15%` }}>
                                <SearchIcon />
                            </IconButton>
                            <SearchBox />
                        </Paper>
                    </Grid>
                    {children}
                </Grid>
                <Footer />
            </div>
    );
}