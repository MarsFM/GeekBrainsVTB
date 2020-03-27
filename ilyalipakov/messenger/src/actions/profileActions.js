export const REQUEST_PROFILES = 'REQUEST_PROFILE';
export const SUCCESS_PROFILES = 'SUCCESS_PROFILE';

const requestProfile = () => {
  return {
    type: REQUEST_PROFILES,
  }
};

const successProfile = (data) => {
  return {
    type: SUCCESS_PROFILES,
    payload: data
  }
};

export const loadProfiles = () => {
  return async (dispatch) => {
    dispatch(requestProfile());

    const response = await fetch('http://localhost:5000/api/profile.json');
    try {
      const data = await response.json();
      dispatch(successProfile(data))
    } catch (e) {
      console.log(e)
    }
  }
};