import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authActions';

export class Login extends Component {
  state = {
    Email: '',
    Password: '',
    passwordIsMasked: true
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      Email: this.state.Email,
      Password: this.state.Password
    };

    this.props.loginUser(user);
  };

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked
    }));
  };

  render() {
    return (
      <>
        <div className="mb-4">
          <span className="font-bold text-4xl uppercase tracking-wider text-gray-800">
            iCanHelpNetwork
          </span>
        </div>
        <div className="mb-16">
          <span className="text-gray-500">
            Welcome back! Please login to your account.
          </span>
        </div>
        <div className="w-full max-w-md">
          <form onSubmit={this.onSubmit}>
            <div className="flex items-center border-b border-b-2 border-gray-400 py-2 mb-8">
              <input
                className="validate appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                name="Email"
                type="email"
                placeholder="Email"
                value={this.state.Email}
                onChange={this.onChange}
              />
              <span
                className="helper-text"
                data-error="Please Enter a Valid Email"
                data-success=" "
              />
            </div>
            <div className="flex items-center border-b border-b-2 border-gray-400 py-2 mb-12">
              <input
                className="validate appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                name="Password"
                type={this.state.passwordIsMasked ? 'Password' : 'text'}
                placeholder="Password"
                value={this.state.Password}
                onChange={this.onChange}
              />
              <span
                className="helper-text"
                data-error="Please Enter Your Password"
                data-success=" "
              />
            </div>
            <div className="flex items-center justify-center mt-16">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-12 mx-2 border border-blue-500 hover:border-transparent rounded"
                type="button"
              >
                <Link to="/register">Sign up</Link>
              </button>
            </div>
          </form>
          <p>{this.props.error}</p>
          <div className="flex items-center justify-center my-12 text-sm text-gray-700">
            <Link to="/reset-password">Forgot Password?</Link>
          </div>
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
  { loginUser }
)(withRouter(Login));
