import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import { getAllPost } from '../adapters/post';
import { getPersonalisedPost } from '../utils/getPersonalisedPost';
import { getRecommendedUsers } from '../utils/recommendedUsers';
import { getFollowing } from '../adapters/follow';
import { getAllUsers } from '../adapters/getProfile';
import { useAuth } from '../contexts/AuthContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import HomeSidebar from '../components/HomeSidebar';

import { HomeContainer, PostList, Extra } from '../styles/posts';
import { LoaderContainer } from '../styles/authForm';
import emptyImage from '../images/empty.svg';

function Home({ match }) {
  const [posts, setPosts] = useState();
  const [recUsers, setRecUsers] = useState();
  const [loading, setLoading] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    setLoading(true);
    getFollowing(currentUser.displayName).then((followingList) => {
      getAllPost()
        .then((postLists) => {
          setPosts(
            getPersonalisedPost(postLists.docs, followingList.docs, currentUser)
          );
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });

      getAllUsers()
        .then((users) => {
          setRecUsers(
            getRecommendedUsers(
              followingList.docs,
              users.docs,
              currentUser.displayName
            )
          );
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, []);

  return (
    <HomeContainer>
      <Header currentPath={match.path} />
      {loading ? (
        <LoaderContainer className="home">
          <ReactLoading
            color="#000000"
            type="spokes"
            height="5rem"
            width="5rem"
          />
        </LoaderContainer>
      ) : (
        <>
          <PostList>
            {posts?.length > 0 ? (
              posts?.map((post) => <Post key={post.id} post={post} />)
            ) : (
              <>
                <img src={emptyImage} alt="empty" />
                <h3 style={{ textAlign: 'center' }}>
                  You are not following anyone yet? See the suggestions on the
                  left.
                </h3>
              </>
            )}
          </PostList>

          <Extra>
            <HomeSidebar recommendedUsers={recUsers} />
            <Footer />
          </Extra>
        </>
      )}
    </HomeContainer>
  );
}

export default Home;
