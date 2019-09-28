import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFollowing } from '../../actions/authActions';

import Sidebar from '../layout/Sidebar';
import Dashboard from '../profile/Dashboard';

export class DashboardContainer extends Component {
  componentDidMount() {
    this.props.setFollowing();
  }

  render() {
    return (
      <div className="flex flex-row">
        <Sidebar />
        <Dashboard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { setFollowing }
)(DashboardContainer);
