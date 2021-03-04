import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserProfile } from '../adapters/getProfile';

import {
  SidebarContainer,
  PostHeader,
  PostHeaderDetails,
  UserImage,
  Names,
  AuthorName,
  CommentButton,
} from '../styles/posts';
import { ProfileImageContainer } from '../styles/profile';
import blankProfile from '../images/BlankImage.jpg';

function HomeSidebar({ recommendedUsers }) {
  const { currentUser } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    getUserProfile(currentUser.displayName)
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <SidebarContainer>
      {userInfo && (
        <>
          <PostHeader>
            <PostHeaderDetails>
              <Link to={`/${currentUser.displayName}`}>
                <ProfileImageContainer>
                  <UserImage src={userInfo?.data().photoURL} alt="profile" />
                </ProfileImageContainer>
              </Link>

              <Names>
                <AuthorName className="thick">
                  <Link to={`/${currentUser.displayName}`}>
                    {userInfo?.data().username}{' '}
                  </Link>
                </AuthorName>
                <AuthorName className="secondary">
                  <Link to={`/${currentUser.displayName}`}>
                    {userInfo?.data().fullName}{' '}
                  </Link>
                </AuthorName>
              </Names>
            </PostHeaderDetails>

            <CommentButton>Switch</CommentButton>
          </PostHeader>
        </>
      )}

      <AuthorName className="secondary suggestion">
        Suggestions for you
      </AuthorName>

      {recommendedUsers?.map((user) => (
        <PostHeader className="small">
          <PostHeaderDetails>
            <Link to={`/${user.id}`}>
              <UserImage
                className="mini"
                src={user.data().photoURL}
                alt="profile"
              />
            </Link>
            <Names>
              <AuthorName className="thick">
                <Link to={`/${user.id}`}> {user.data().username} </Link>
              </AuthorName>
              <AuthorName className="secondary small">
                Suggested for you
              </AuthorName>
            </Names>
          </PostHeaderDetails>

          <CommentButton>
            <Link to={`/${user.id}`}>Follow</Link>
          </CommentButton>
        </PostHeader>
      ))}
    </SidebarContainer>
  );
}

export default HomeSidebar;
