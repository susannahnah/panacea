import React from 'react';
import './Footer.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    &copy; Panacea 2019.
  </footer>
  // <AppBar position="static" color="default" className="footer">
  //   <Toolbar>
  //     <Typography variant="h6" color="inherit">
  //       Photos
  //     </Typography>
  //   </Toolbar>
  // </AppBar>
);

export default Footer;
