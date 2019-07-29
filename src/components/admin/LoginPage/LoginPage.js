import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';

// material ui
import { Button, FormControl, InputLabel, OutlinedInput } from '@material-ui/core/';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <>

        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}

        <form 
        className="login-page"
        onSubmit={this.login}
        >

          <FormControl
            margin='dense'
            variant="outlined">

            <InputLabel>Username</InputLabel>
            <OutlinedInput
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />

          </FormControl>

          <FormControl
            margin='dense'
            variant="outlined">

            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />

          </FormControl>

          <Button
            type="submit"
            variant="contained"
          >Log In
            </Button>

        </form>

      </>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
