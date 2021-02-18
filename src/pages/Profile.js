import { Redirect } from 'react-router-dom';

import Header from '../components/Header';
import ProfileBanner from '../components/ProfileBanner';
import ProfilePost from '../components/ProfilePost';

import { ProfileContainer } from '../styles/profile';

import { useAuth } from '../contexts/AuthContext';

function Profile() {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser ? (
        <ProfileContainer>
          <Header />
          <ProfileBanner />
          <ProfilePost />
        </ProfileContainer>
      ) : (
        <Redirect to="/accounts/signin" />
      )}
    </>
  );
}

export default Profile;
