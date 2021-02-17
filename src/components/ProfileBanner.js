import { RiSettings3Line } from 'react-icons/ri';

import {
  BannerContainer,
  ProfileImage,
  ProfileDetails,
  ProfileMeta,
  Activity,
  DisplayName,
  EditButton,
  Username,
  ActivityNumber,
  ActivityText,
} from '../styles/profile';

import blankProfile from '../images/BlankImage.jpg';

function ProfileBanner() {
  return (
    <BannerContainer>
      <ProfileImage src={blankProfile} alt="profile" />

      <ProfileDetails>
        <ProfileMeta>
          <Username>brake_emi</Username>

          <EditButton>Edit Profile</EditButton>

          <RiSettings3Line cursor="pointer" fontSize="1.5rem" />
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
        <DisplayName>Moses Ogbopina</DisplayName>
      </ProfileDetails>
    </BannerContainer>
  );
}

export default ProfileBanner;
