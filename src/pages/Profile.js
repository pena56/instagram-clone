import Header from '../components/Header';
import ProfileBanner from '../components/ProfileBanner';
import ProfilePost from '../components/ProfilePost';

import { ProfileContainer } from '../styles/profile';

function Profile() {
  return (
    <ProfileContainer>
      <Header />
      <ProfileBanner />
      <ProfilePost />
    </ProfileContainer>
  );
}

export default Profile;
