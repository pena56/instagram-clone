import { BsFillHeartFill, BsFillChatFill } from 'react-icons/bs';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExploreContainer } from '../styles/posts';
import {
  UserPosts,
  UserPost,
  PostImage,
  PostOverlay,
  OverlayContainer,
} from '../styles/profile';
import home from '../images/home.jpg';

function Explore({ match }) {
  return (
    <ExploreContainer>
      <Header currentPath={match.path} />
      <UserPosts>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
        <UserPost>
          <PostImage src={home} alt="post" />
          <PostOverlay>
            <OverlayContainer>
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
              89
            </OverlayContainer>
            <OverlayContainer>
              <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
              78
            </OverlayContainer>
          </PostOverlay>
        </UserPost>
      </UserPosts>
      <Footer />
    </ExploreContainer>
  );
}

export default Explore;
