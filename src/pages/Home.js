import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';
import HomeSidebar from '../components/HomeSidebar';

import { HomeContainer, PostList, Extra } from '../styles/posts';

function Home({ match }) {
  return (
    <HomeContainer>
      <Header currentPath={match.path} />
      <PostList>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostList>

      <Extra>
        <HomeSidebar />
        <Footer />
      </Extra>
    </HomeContainer>
  );
}

export default Home;
