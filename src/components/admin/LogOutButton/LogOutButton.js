import React from 'react';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';

const LogOutButton = props => (
  <Link
    // This Button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    style={{color: 'white'}}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >
    Logout
  </Link>
);


export default connect()(LogOutButton);
