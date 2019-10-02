import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';

import { Link } from 'react-router-dom';

export class Register extends Component {
  state = {
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    Password2: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Password: this.state.Password,
      Password2: this.state.Password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    return (
      <>
        <div className="mb-4">
          <span className="font-bold text-3xl md:text-4xl uppercase tracking-wider text-gray-800">
            iCanHelpNetwork
          </span>
        </div>
        <div className="mb-16">
          <span className="text-gray-500">
            Please complete to create your account.
          </span>
        </div>

        <form className="w-full max-w-lg" onSubmit={this.onSubmit}>
          <div className="flex flex-wrap items-center ">
            <div className="border-b border-b-2 border-gray-400 mx-2 flex-grow mb-12 md:mb-0">
              <input
                className="validate appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none"
                name="FirstName"
                type="text"
                placeholder="First Name"
                value={this.state.FirstName}
                onChange={this.onChange}
              />
              <span
                className="helper-text"
                data-error="required"
                data-success=" "
              />
            </div>
            <div className="items-center border-b border-b-2 border-gray-400 mx-2 flex-grow">
              <input
                className="validate appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none"
                name="LastName"
                type="text"
                placeholder="Last Name"
                value={this.state.LastName}
                onChange={this.onChange}
              />
              <span
                className="helper-text"
                data-error="required"
                data-success=" "
              />
            </div>
            <div className="items-center border-b border-b-2 border-gray-400 mx-2 my-12 w-full">
              <input
                className="validate appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none"
                name="Email"
                type="email"
                placeholder="Email"
                value={this.state.Email}
                onChange={this.onChange}
              />
              <span
                className="helper-text"
                data-error="please enter a valid email"
                data-success=" "
              />
            </div>
            <div className="items-center border-b border-b-2 border-gray-400 mx-2 w-full">
              <input
                className="validate appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-2 leading-tight focus:outline-none"
                name="Password"
                type="password"
                placeholder="Password"
                value={this.state.Password}
                onChange={this.onChange}
              />
              <span
                className="helper-text"
                data-error="required"
                data-success=" "
              />
            </div>
            <div className="validate items-center border-b border-b-2 border-gray-400 mx-2 my-12 w-full">
              <input
                name="Password2"
                type="password"
                placeholder="Confirm Your Password"
                value={this.state.Password2}
                onChange={this.onChange}
              />
              <span
                className="helper-text"
                data-error="required"
                data-success=" "
              />
              <p>
                {this.state.Password !== this.state.Password2
                  ? 'Passwords do not match'
                  : ''}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              name="action"
              disabled={this.state.Password !== this.state.Password2}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center my-6">
          <p>{this.props.error ? this.props.error.message : ''}</p>
        </div>
        <div className="flex items-center justify-center my-8 text-sm text-gray-700">
          <p>Already have an account?&nbsp;</p>
          <Link to="/">
            <u>Sign In</u>
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
