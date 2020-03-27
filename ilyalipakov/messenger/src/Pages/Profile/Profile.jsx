import React from 'react';

import './Profile.css';

const Profile = (props) => {
    const {name, hobby, skills} = props;
    return (
      <div className="profile">
        <div className="profile__name">{name}</div>
        <div className="profile__hobby">{hobby}</div>
        <div className="profile__skills">
          <ul>
            {_renderSkills(skills)}
          </ul>
        </div>
      </div>);
};

const _renderSkills = (skills) => skills.map((skill) => <li key={skill}>{skill}</li>);

export default Profile;
