
import React from 'react';
import Image from '../Image';
import '../components/UserProfile.css';
import PropTypes from 'prop-types';


class UserProfile extends React.Component {
  render() {
  const { user:{name, email, avatar,id}} = this.props
  return (
    <section id={id}>
      <div classNam e="App-body-user-profile">
        <p> {name} </p>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    </section>
    );
  }
}

UserProfile.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

UserProfile.defaultProps = {
  id: 0,
  name:'Undefined_Name',
  email:'Undefined_email',
  avatar:'Undefined_Image'
}

export default UserProfile;