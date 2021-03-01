import { useState, useEffect } from 'react';

import { getAllPost } from '../adapters/post';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UserPostModal from '../components/UserPostModal';
import { ExploreContainer } from '../styles/posts';
import { UserPosts } from '../styles/profile';

function Explore({ match }) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getAllPost()
      .then((snapshot) => {
        setPosts(snapshot.docs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ExploreContainer>
      <Header currentPath={match.path} />
      <UserPosts>
        {posts?.map((post) => (
          <UserPostModal post={post} key={post.id} />
        ))}
      </UserPosts>
      <Footer />
    </ExploreContainer>
  );
}

export default Explore;
