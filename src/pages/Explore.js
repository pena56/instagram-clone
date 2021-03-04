import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import { getAllPost } from '../adapters/post';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UserPostModal from '../components/UserPostModal';
import { ExploreContainer } from '../styles/posts';
import { UserPosts } from '../styles/profile';
import { LoaderContainer } from '../styles/authForm';

function Explore({ match }) {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    getAllPost()
      .then((snapshot) => {
        setPosts(snapshot.docs);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <ExploreContainer>
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
        <UserPosts>
          {posts?.map((post) => (
            <UserPostModal post={post} key={post.id} />
          ))}
        </UserPosts>
      )}
      <Footer />
    </ExploreContainer>
  );
}

export default Explore;
