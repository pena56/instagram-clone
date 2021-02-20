import { RiSettings3Line } from 'react-icons/ri';

import {
  BannerContainer,
  ProfileImage,
  ProfileDetails,
  ProfileMeta,
  Activity,
  DisplayName,
  ProfileButton,
  Username,
  ActivityNumber,
  ActivityText,
} from '../styles/profile';

import { useAuth } from '../contexts/AuthContext';

import blankProfile from '../images/BlankImage.jpg';

function ProfileBanner({ userProfile }) {
  const { currentUser } = useAuth();

  return (
    <BannerContainer>
      <ProfileImage
        src={userProfile.photoURL ? userProfile.photoURL : blankProfile}
        alt="profile"
      />
      <ProfileDetails>
        <ProfileMeta>
          <Username>{userProfile.username}</Username>
          {currentUser ? (
            <>
              <ProfileButton>Edit Profile</ProfileButton>
              <RiSettings3Line cursor="pointer" fontSize="1.5rem" />
            </>
          ) : (
            <ProfileButton className="follow-btn">Follow</ProfileButton>
          )}
        </ProfileMeta>
        <Activity>
          <ActivityText>
            <ActivityNumber>0</ActivityNumber> posts
          </ActivityText>
          <ActivityText>
            <ActivityNumber>26</ActivityNumber> followers
          </ActivityText>
          <ActivityText>
            <ActivityNumber>150</ActivityNumber> following
          </ActivityText>
        </Activity>
        <DisplayName>{userProfile.fullName}</DisplayName>
      </ProfileDetails>
    </BannerContainer>
  );
}

export default ProfileBanner;
