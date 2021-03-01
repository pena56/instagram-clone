import { useState } from 'react';
import Rodal from 'rodal';

import {
  BsGrid3X3,
  BsFillChatFill,
  BsFillHeartFill,
  BsHeart,
  BsChat,
  BsInbox,
  BsBookmark,
} from 'react-icons/bs';
import { IoPricetagsOutline } from 'react-icons/io5';
import { FiMoreHorizontal } from 'react-icons/fi';
import { GrEmoji } from 'react-icons/gr';

import {
  ProfilePostContainer,
  ProfilePostHeader,
  ProfileHeader,
  HeaderName,
  UserPosts,
  UserPost,
  PostImage,
  PostOverlay,
  OverlayContainer,
  ProfileImageContainer,
} from '../styles/profile';
import {
  ModalContainer,
  PostHeader,
  PostHeaderDetails,
  AuthorImage,
  AuthorName,
  ModalImage,
  // PostImage,
  ModalFooter,
  PostLikes,
  CommentRow,
  PostTime,
  ModalDetails,
  CommentSection,
  ModalComment,
  PostDesc,
  DescText,
  CommentBox,
  CommentForm,
  CommentField,
  CommentButton,
} from '../styles/posts';
import home from '../images/home.jpg';
import blankImage from '../images/BlankImage.jpg';

function ProfilePost() {
  const [showPostModal, setShowPostModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        <UserPost onClick={() => setShowPostModal(true)}>
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

        <Rodal
          visible={showPostModal}
          onClose={() => setShowPostModal(false)}
          showCloseButton={false}
          customMaskStyles={{ opacity: '0.8', backgroundColor: '#262626' }}
          customStyles={{
            padding: '0',
            width: '95%',
            height: 'fit-content',
            maxHeight: '90vh',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          <ModalContainer>
            <PostHeader className="modal modal-header">
              <PostHeaderDetails>
                <ProfileImageContainer>
                  <AuthorImage
                    className="modal"
                    src={blankImage}
                    alt="profile"
                  />
                </ProfileImageContainer>

                <AuthorName className="darker thick">
                  kahstudios . Following
                </AuthorName>
              </PostHeaderDetails>
              <FiMoreHorizontal
                onClick={() => setShowModal(true)}
                cursor="pointer"
                fontSize="1.5rem"
              />
            </PostHeader>
            <ModalImage>
              <PostImage src={home} alt="post" />
            </ModalImage>
            <ModalFooter className="footer">
              <PostHeader>
                <PostHeaderDetails>
                  <BsHeart fontSize="1.7rem" cursor="pointer" />
                  <BsChat fontSize="1.7rem" cursor="pointer" />
                  <BsInbox fontSize="1.7rem" cursor="pointer" />
                </PostHeaderDetails>
                <BsBookmark fontSize="1.7rem" cursor="pointer" />
              </PostHeader>

              <PostLikes>105 likes</PostLikes>
              <CommentRow>
                <PostTime>12 hours ago</PostTime>
              </CommentRow>
            </ModalFooter>
            <ModalDetails>
              <PostHeader className="modal">
                <PostHeaderDetails>
                  <ProfileImageContainer>
                    <AuthorImage
                      className="modal"
                      src={blankImage}
                      alt="profile"
                    />
                  </ProfileImageContainer>

                  <AuthorName className="darker thick">
                    kahstudios . Following
                  </AuthorName>
                </PostHeaderDetails>
                <FiMoreHorizontal
                  onClick={() => setShowModal(true)}
                  cursor="pointer"
                  fontSize="1.5rem"
                />
              </PostHeader>
              <CommentSection className="modal">
                <CommentRow>
                  <ProfileImageContainer className="modal">
                    <AuthorImage
                      className="modal"
                      src={blankImage}
                      alt="profile"
                    />
                  </ProfileImageContainer>
                  <ModalComment>
                    <PostDesc>
                      kahstudios
                      <DescText>
                        ‼️Fan Art Contest Entry‼️ Entry #13 Kindly Vote by
                        liking this entry and also remember to follow 😉 Name:
                        Neo ig handle: @Artsbyneo #kahstudioscontest
                        #faithcomicbook #fanartcontest #artwork
                      </DescText>
                    </PostDesc>
                    <PostDesc className="activity">
                      <DescText>1d</DescText>
                    </PostDesc>
                  </ModalComment>
                </CommentRow>

                <CommentRow>
                  <AuthorImage
                    className="modal"
                    src={blankImage}
                    alt="profile"
                  />
                  <ModalComment>
                    <PostDesc>
                      rumeo_ <DescText>The best !!!!</DescText>
                    </PostDesc>
                    <PostDesc className="activity">
                      <DescText>21h</DescText>
                      <DescText>2 likes</DescText>
                      <DescText className="reply">Reply</DescText>
                    </PostDesc>
                  </ModalComment>

                  <BsHeart fontSize="0.9rem" cursor="pointer" />
                </CommentRow>

                <CommentRow>
                  <AuthorImage
                    className="modal"
                    src={blankImage}
                    alt="profile"
                  />
                  <ModalComment>
                    <PostDesc>
                      rumeo_ <DescText>The best !!!!</DescText>
                    </PostDesc>
                    <PostDesc className="activity">
                      <DescText>21h</DescText>
                      <DescText>2 likes</DescText>
                      <DescText className="reply">Reply</DescText>
                    </PostDesc>
                  </ModalComment>

                  <BsHeart fontSize="0.9rem" cursor="pointer" />
                </CommentRow>

                <CommentRow>
                  <AuthorImage
                    className="modal"
                    src={blankImage}
                    alt="profile"
                  />
                  <ModalComment>
                    <PostDesc>
                      rumeo_ <DescText>The best !!!!</DescText>
                    </PostDesc>
                    <PostDesc className="activity">
                      <DescText>21h</DescText>
                      <DescText>2 likes</DescText>
                      <DescText className="reply">Reply</DescText>
                    </PostDesc>
                  </ModalComment>

                  <BsHeart fontSize="0.9rem" cursor="pointer" />
                </CommentRow>

                <CommentRow>
                  <AuthorImage
                    className="modal"
                    src={blankImage}
                    alt="profile"
                  />
                  <ModalComment>
                    <PostDesc>
                      rumeo_ <DescText>The best !!!!</DescText>
                    </PostDesc>
                    <PostDesc className="activity">
                      <DescText>21h</DescText>
                      <DescText>2 likes</DescText>
                      <DescText className="reply">Reply</DescText>
                    </PostDesc>
                  </ModalComment>

                  <BsHeart fontSize="0.9rem" cursor="pointer" />
                </CommentRow>
              </CommentSection>

              <ModalFooter>
                <PostHeader>
                  <PostHeaderDetails>
                    <BsHeart fontSize="1.7rem" cursor="pointer" />
                    <BsChat fontSize="1.7rem" cursor="pointer" />
                    <BsInbox fontSize="1.7rem" cursor="pointer" />
                  </PostHeaderDetails>
                  <BsBookmark fontSize="1.7rem" cursor="pointer" />
                </PostHeader>

                <PostLikes>105 likes</PostLikes>

                <CommentBox>
                  <GrEmoji fontSize="1.7rem" cursor="pointer" />
                  <CommentForm>
                    <CommentField type="text" placeholder="Add a comment..." />
                  </CommentForm>
                  <CommentButton>Post</CommentButton>
                </CommentBox>
              </ModalFooter>
            </ModalDetails>
          </ModalContainer>
        </Rodal>
      </UserPosts>
    </ProfilePostContainer>
  );
}

export default ProfilePost;
