import React, {Component} from "react";
import {connect} from 'react-redux';

import {loadProfiles} from "../../actions/profileActions.js";

import Spinner from "../../components/Spinner";
import Profile from "./Profile.jsx";

class ProfileContainer extends Component {

  componentDidMount() {
    this.props.loadProfiles();
  }

  render() {
    const { loading } = this.props;
    return loading ? <Spinner /> : <Profile {...this.props.data}/>
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.profiles.entries,
    loading: state.profiles.loading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProfiles: () => dispatch(loadProfiles()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);