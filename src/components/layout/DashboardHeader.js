import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { withRouter, Link } from 'react-router-dom';

const DashboardHeader = props => {
  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
    props.history.push('/');
  };

  return (
    <div className="flex h-16 items-center shadow z-20">
      <div className="flex w-full flex-row px-2 md:px-6 items-center justify-center md:justify-end">
        <div className="flex border-r border-gray-400 items-center h-8 pr-4">
          <span className="ml-8 lg:mx-3 text-gray-600">
            Hello, {props.username}
          </span>
          <Link to="/profile">
            <ion-icon name="contact" size="large"></ion-icon>
          </Link>
        </div>
        <div className="flex ml-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onLogoutClick}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { logoutUser }
)(withRouter(DashboardHeader));
