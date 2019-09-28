import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

const DashboardHeader = props => {
  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
    props.history.push('/');
  };

  return (
    <div className="flex h-16 items-center shadow z-20">
      <div className="flex flex-grow flex-row-reverse px-6 items-center">
        <div className="flex border-l border-gray-400 items-center h-8">
          <span className="mr-3 ml-6 text-gray-600">
            Hello, {props.username}
          </span>
          <ion-icon name="contact" size="large"></ion-icon>
        </div>
        <div className="flex mr-6">
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
