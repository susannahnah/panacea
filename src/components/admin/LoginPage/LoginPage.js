import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';

// material ui
import { Button, FormControl, InputLabel, OutlinedInput, Typography } from '@material-ui/core/';

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

        <div
          className="login-page">

          <form
            onSubmit={this.login}>

            <div
              className="login-welcome">

              <Typography>
                Welcome
            </Typography>

            </div>

            <div
              className="login-username">

              <FormControl
                margin="dense"
                variant="outlined">

                <InputLabel>Username</InputLabel>

                <OutlinedInput
                  labelWidth={75}
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />

              </FormControl>

            </div>

            <div
              className="login-password">

              <FormControl
                margin="dense"
                variant="outlined">

                <InputLabel>Password</InputLabel>

                <OutlinedInput
                  labelWidth={70}
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />

              </FormControl>
            </div>

            <div
              className="login-button">

              <Button
                type="submit"
                variant="contained"
              >Log In
            </Button>

            </div>

          </form>

        </div>

      </>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({errors});
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
