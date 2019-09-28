import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFollowing, unFollow } from '../../actions/authActions';

export class AvailableOrgs extends Component {
  componentDidMount() {
    this.props.setFollowing();
  }

  removeOrgHandler = id => {
    this.props.unFollow(id);
  };

  render() {
    const { following } = this.props.auth;

    return (
      <div className="flex flex-col w-1/3 bg-white shadow-md mx-3 p-6 rounded">
        <div className="w-full border-b-2 pb-6">
          <span className="text-lg">Available Organizations</span>
        </div>
        <div>
          {following.map(org => (
            <li className="collection-item" key={org.Id}>
              <div>
                {org.Name}
                <span
                  className="secondary-content"
                  onClick={this.removeOrgHandler.bind(this, org.Id)}
                >
                  <i className="material-icons">remove_circle</i>
                </span>
              </div>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  needs: state.needs
});

export default connect(
  mapStateToProps,
  { setFollowing, unFollow }
)(AvailableOrgs);
