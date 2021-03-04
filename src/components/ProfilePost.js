import { BsGrid3X3 } from 'react-icons/bs';
import { IoPricetagsOutline } from 'react-icons/io5';

import UserPostModal from './UserPostModal';

import {
  ProfilePostContainer,
  ProfilePostHeader,
  ProfileHeader,
  HeaderName,
  UserPosts,
} from '../styles/profile';

function ProfilePost({ posts }) {
  return (
    <ProfilePostContainer>
      <ProfilePostHeader>
        <ProfileHeader className="active">
          <BsGrid3X3 />
          <HeaderName>POSTS</HeaderName>
        </ProfileHeader>

        <ProfileHeader>
          <IoPricetagsOutline />
          <HeaderName>TAGS</HeaderName>
        </ProfileHeader>
      </ProfilePostHeader>

      <UserPosts>
        {posts?.length === 0 ? (
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h3 style={{ textAlign: 'center' }}>
              This User haven't uploaded any photos
            </h3>
          </div>
        ) : (
          posts?.map((post) => <UserPostModal post={post} key={post.id} />)
        )}
        {}
      </UserPosts>
    </ProfilePostContainer>
  );
}

export default ProfilePost;
