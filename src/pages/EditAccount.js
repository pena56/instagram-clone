import Header from '../components/Header';
import Footer from '../components/Footer';
import UpdateForm from '../components/UpdateForm';
// import FlashMessage from '../components/FlashMessage';

import {
  ProfileContainer,
  EditContainer,
  MenuList,
  MenuBody,
  MenuItem,
} from '../styles/profile';

export default function EditAccount() {
  return (
    <ProfileContainer>
      {/* <FlashMessage message="Profile updated" /> */}
      <Header />
      <EditContainer>
        <MenuList>
          <MenuItem className="active">Edit Profile</MenuItem>
          <MenuItem>Change Password</MenuItem>
          <MenuItem>Apps and Websites</MenuItem>
          <MenuItem>Email and SMS</MenuItem>
          <MenuItem>Push Notifications</MenuItem>
          <MenuItem>Manage Contacts</MenuItem>
          <MenuItem>Privacy and Security</MenuItem>
          <MenuItem>Login Activity</MenuItem>
          <MenuItem>Emails from Instagram</MenuItem>
        </MenuList>
        <MenuBody>
          <UpdateForm />
        </MenuBody>
      </EditContainer>
      <Footer />
    </ProfileContainer>
  );
}
