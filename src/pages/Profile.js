import { useState, useEffect } from 'react';

import { useAuth } from '../contexts/AuthContext';

import { getFollowers, getFollowing } from '../adapters/follow';

import Header from '../components/Header';
import ProfileBanner from '../components/ProfileBanner';
import ProfilePost from '../components/ProfilePost';
import LoaderScreen from '../components/LoaderScreen';

import CheckFollowing from '../utils/checkFollowing';

import { ProfileContainer } from '../styles/profile';

import { getUserProfile } from '../adapters/getProfile';

function Profile({ match }) {
  const [profileData, setProfileData] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [followStatus, setFollowStatus] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  useEffect(() => {
    setLoading(true);
    getFollowing(match.params.uid)
      .then((data) => {
        setFollowing(data.docs);
      })
      .catch((error) => {
        console.error(error);
      });
    getFollowers(match.params.uid)
      .then((data) => {
        setFollowers(data.docs);
        CheckFollowing(currentUser.displayName, data.docs)
          ? setFollowStatus(true)
          : setFollowStatus(false);
      })
      .catch((error) => {
        console.error(error);
      });
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
          <Header currentPath={match.path} />
          <ProfileBanner
            isFollowing={followStatus}
            following={following}
            followers={followers}
            userProfile={profileData}
          />
          <ProfilePost />
        </>
      )}
    </ProfileContainer>
  );
}

export default Profile;
