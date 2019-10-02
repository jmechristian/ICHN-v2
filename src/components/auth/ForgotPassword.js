import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export class ForgotPassword extends Component {
  state = {
    userEmail: '',
    successMessage: false
  };

  onChange = e => {
    this.setState({ userEmail: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    var postData = JSON.stringify(this.state.userEmail);

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Accept: 'text/plain'
      }
    };

    axios
      .post(
        'https://ichnserver.gear.host/User/RequestNewPassword',
        postData,
        axiosConfig
      )
      .then(result => {
        if (result.status === 200) {
          this.setState({
            successMessage: true
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <>
        <div className="mb-4">
          <span className="font-bold md:text-4xl text-3xl uppercase tracking-wider text-gray-800">
            iCanHelpNetwork
          </span>
        </div>
        <div className="mb-16 text-center">
          <span className="text-gray-500">
            Please enter the email you used to register with.
          </span>
        </div>
        <div className="w-full max-w-md">
          <form>
            <div className="flex items-center border-b border-b-2 border-gray-400 py-2 mb-8">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="Email"
                value={this.state.userEmail}
                onChange={this.onChange}
              />
            </div>
            <div className="flex items-center justify-center mt-12">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mx-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={this.onSubmit}
              >
                Send Request
              </button>
            </div>
          </form>
          <div className="text-center mt-5">
            {this.state.successMessage
              ? 'Please Check your Email for Reset Instructions'
              : ''}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ForgotPassword);
