import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNeeds, getMyNeeds } from '../../actions/needsActions';
import { getOrgs } from '../../actions/orgActions';
import {
  faAddressCard,
  faFolderOpen,
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons';

import ItemStat from './ItemStat';
import MyItemList from './MyItemsList';
import AvailableOrgs from './AvailableOrgs';
import DashboardHeader from '../layout/DashboardHeader';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getMyNeeds();
    this.props.getNeeds();
    this.props.getOrgs();
  }

  render() {
    const { user } = this.props.auth;
    const { needs, myNeeds } = this.props.needs;
    const { orgs } = this.props.orgs;

    return (
      <div className="flex flex-grow flex-col">
        <DashboardHeader username={user.unique_name} />
        <div className="flex flex-grow flex-col bg-gray-200 py-6 px-10">
          <div className="w-full mt-4 mb-4">
            <div className="text-2xl font-semibold text-gray-800 ml-3 mb-8">
              User Dashboard
            </div>
            <div className="flex flex-grow justify-center">
              <ItemStat
                title="My Items"
                name={faAddressCard}
                number={myNeeds.length}
              />
              <ItemStat
                title="Open Items"
                name={faFolderOpen}
                number={needs.length}
              />
              <ItemStat
                title="Organizations"
                name={faHandHoldingHeart}
                number={orgs.length}
              />
            </div>
          </div>
          <div className="w-full mt-4 mb-4">
            <div className="flex flex-grow">
              <MyItemList />
              <AvailableOrgs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  needs: state.needs,
  orgs: state.organization
});

export default connect(
  mapStateToProps,
  { getMyNeeds, getNeeds, getOrgs }
)(Dashboard);
