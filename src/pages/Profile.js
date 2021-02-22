import { useState, useEffect } from 'react';

import Header from '../components/Header';
import ProfileBanner from '../components/ProfileBanner';
import ProfilePost from '../components/ProfilePost';
import LoaderScreen from '../components/LoaderScreen';

import { ProfileContainer } from '../styles/profile';

import { getUserProfile } from '../adapters/getProfile';

function Profile({ match }) {
  const [profileData, setProfileData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getUserProfile(match.params.uid)
      .then((profile) => {
        setProfileData(profile.data());
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [match]);

  return (
    <ProfileContainer>
      {loading ? (
        <LoaderScreen />
      ) : (
        <>
          <Header />
          <ProfileBanner userProfile={profileData} />
          <ProfilePost />
        </>
      )}
    </ProfileContainer>
  );
}

export default Profile;
