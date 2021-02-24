import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { FaUserCheck } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

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
  Bio,
  Website,
  Loader,
  UnfollowModal,
  ModalImage,
  UnfollowText,
  ModalButton,
  ProfileImageContainer,
} from '../styles/profile';

import { useAuth } from '../contexts/AuthContext';

import { follow, unfollow } from '../adapters/follow';

import blankProfile from '../images/BlankImage.jpg';

function ProfileBanner({ userProfile, followers, following, isFollowing }) {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showUnfollow, setShowUnfollow] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleFollow = () => {
    setLoading(true);
    follow(currentUser.displayName, userProfile.id)
      .then((ref) => {
        setLoading(false);
        window.location.reload(true);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error.message);
      });
  };

  const handleUnfollow = () => {
    unfollow(currentUser.displayName, userProfile.id)
      .then((ref) => {
        window.location.reload(true);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const unfollowButton = () => {
    setShowUnfollow(false);
    handleUnfollow();
  };

  return (
    <BannerContainer>
      <ProfileImageContainer>
        <ProfileImage
          src={userProfile.photoURL ? userProfile.photoURL : blankProfile}
          alt="profile"
        />
      </ProfileImageContainer>

      <ProfileDetails>
        <ProfileMeta>
          <Username>{userProfile.username}</Username>
          {currentUser ? (
            currentUser.displayName == userProfile.id ? (
              <>
                <ProfileButton>
                  <Link to="/accounts/edit">Edit Profile</Link>
                </ProfileButton>
              </>
            ) : isFollowing ? (
              <>
                <ProfileButton>Message</ProfileButton>
                <ProfileButton onClick={() => setShowUnfollow(true)}>
                  <FaUserCheck />
                </ProfileButton>
                <FiMoreHorizontal
                  onClick={() => setShowMore(true)}
                  cursor="pointer"
                  fontSize="1.5rem"
                />
              </>
            ) : (
              <>
                <ProfileButton onClick={handleFollow} className="follow-btn">
                  {loading && (
                    <Loader>
                      <ReactLoading
                        width="1.2rem"
                        height="1.2rem"
                        color="#000000"
                        type="spokes"
                      />
                    </Loader>
                  )}
                  Follow
                </ProfileButton>
              </>
            )
          ) : (
            <ProfileButton className="follow-btn">
              <Link to="/accounts/signin">Follow</Link>
            </ProfileButton>
          )}
        </ProfileMeta>
        <Activity>
          <ActivityText>
            <ActivityNumber>0</ActivityNumber> posts
          </ActivityText>
          <ActivityText>
            <ActivityNumber>{followers.length}</ActivityNumber> followers
          </ActivityText>
          <ActivityText>
            <ActivityNumber>{following.length}</ActivityNumber> following
          </ActivityText>
        </Activity>
        <DisplayName>{userProfile.fullName}</DisplayName>
        {userProfile.bio && <Bio>{userProfile.bio}</Bio>}
        {userProfile.website && (
          <Website target="_blank" href={userProfile.website}>
            {userProfile.website}
          </Website>
        )}
      </ProfileDetails>
      <Rodal
        measure="px"
        width={300}
        height={290}
        visible={showUnfollow}
        onClose={() => setShowUnfollow(false)}
        showCloseButton={false}
        customMaskStyles={{ opacity: '0.8', backgroundColor: '#262626' }}
        customStyles={{ borderRadius: '15px', padding: '0' }}
      >
        <UnfollowModal>
          <ModalImage
            src={userProfile.photoURL ? userProfile.photoURL : blankProfile}
            alt="profile"
          />
          <UnfollowText>Unfollow @{userProfile.id}?</UnfollowText>
          <ModalButton onClick={unfollowButton} className="danger">
            Unfollow
          </ModalButton>
          <ModalButton onClick={() => setShowUnfollow(false)}>
            Cancel
          </ModalButton>
        </UnfollowModal>
      </Rodal>

      <Rodal
        measure="px"
        width={300}
        height={190}
        visible={showMore}
        onClose={() => setShowMore(false)}
        showCloseButton={false}
        customMaskStyles={{ opacity: '0.8', backgroundColor: '#262626' }}
        customStyles={{ borderRadius: '15px', padding: '0' }}
      >
        <UnfollowModal>
          <ModalButton className="danger first">Block the user</ModalButton>
          <ModalButton className="danger">Restrict</ModalButton>
          <ModalButton className="danger">Report user</ModalButton>
          <ModalButton onClick={() => setShowMore(false)}>Cancel</ModalButton>
        </UnfollowModal>
      </Rodal>
    </BannerContainer>
  );
}

export default ProfileBanner;
