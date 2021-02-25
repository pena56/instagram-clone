import { useState } from 'react';

import { FiMoreHorizontal } from 'react-icons/fi';
import { BsInbox, BsChat, BsHeart } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { UnfollowModal, ModalButton } from '../styles/profile';

import {
  PostContainer,
  PostHeader,
  PostHeaderDetails,
  AuthorName,
  AuthorImage,
  PostImage,
  PostLikes,
  PostDesc,
  DescText,
  MoreLink,
  CommentsLink,
  CommentRow,
  CommentBox,
  PostTime,
  CommentForm,
  CommentField,
  CommentButton,
  ModalContainer,
  ModalImage,
  ModalDetails,
  ModalFooter,
  ModalComment,
  CommentSection,
} from '../styles/posts';
import { ProfileImageContainer } from '../styles/profile';
import blankImage from '../images/BlankImage.jpg';
import home from '../images/home.jpg';

function Post() {
  const [showModal, setShowModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderDetails>
          <ProfileImageContainer>
            <AuthorImage src={blankImage} alt="profile" />
          </ProfileImageContainer>

          <AuthorName>kahstudios</AuthorName>
        </PostHeaderDetails>
        <FiMoreHorizontal
          onClick={() => setShowModal(true)}
          cursor="pointer"
          fontSize="1.5rem"
        />
      </PostHeader>

      <PostImage onClick={() => setShowPostModal(true)} src={home} alt="post" />

      <PostHeader>
        <PostHeaderDetails>
          <BsHeart fontSize="1.7rem" cursor="pointer" />
          <BsChat fontSize="1.7rem" cursor="pointer" />
          <BsInbox fontSize="1.7rem" cursor="pointer" />
        </PostHeaderDetails>
        <BsBookmark fontSize="1.7rem" cursor="pointer" />
      </PostHeader>

      <PostLikes>105 likes</PostLikes>

      <CommentRow onClick={() => setShowPostModal(true)}>
        <PostDesc>
          kahstudios <DescText>!!4 DAYS LEFT!!...</DescText>{' '}
          <MoreLink>more</MoreLink>{' '}
        </PostDesc>
      </CommentRow>

      <CommentRow onClick={() => setShowPostModal(true)}>
        <CommentsLink>View all 4 comments</CommentsLink>
      </CommentRow>

      <CommentRow>
        <PostDesc>
          rumeo_ <DescText>The best !!!!</DescText>
        </PostDesc>

        <BsHeart fontSize="0.7rem" cursor="pointer" />
      </CommentRow>

      <CommentRow>
        <PostDesc>
          amoldgeyu{' '}
          <DescText>Bro.....cool art man, what software did you use</DescText>
        </PostDesc>

        <BsHeart fontSize="0.7rem" cursor="pointer" />
      </CommentRow>

      <CommentRow>
        <PostTime>12 hours ago</PostTime>
      </CommentRow>

      <CommentBox>
        <GrEmoji fontSize="1.7rem" cursor="pointer" />
        <CommentForm>
          <CommentField type="text" placeholder="Add a comment..." />
        </CommentForm>
        <CommentButton>Post</CommentButton>
      </CommentBox>

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
          <ModalImage>
            <PostImage src={home} alt="post" />
          </ModalImage>
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
                      ‼️Fan Art Contest Entry‼️ Entry #13 Kindly Vote by liking
                      this entry and also remember to follow 😉 Name: Neo ig
                      handle: @Artsbyneo #kahstudioscontest #faithcomicbook
                      #fanartcontest #artwork
                    </DescText>
                  </PostDesc>
                  <PostDesc className="activity">
                    <DescText>1d</DescText>
                  </PostDesc>
                </ModalComment>

                <BsHeart fontSize="0.9rem" cursor="pointer" />
              </CommentRow>

              <CommentRow>
                <AuthorImage className="modal" src={blankImage} alt="profile" />
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
                <AuthorImage className="modal" src={blankImage} alt="profile" />
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
                <AuthorImage className="modal" src={blankImage} alt="profile" />
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
                <AuthorImage className="modal" src={blankImage} alt="profile" />
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

      <Rodal
        visible={showModal}
        onClose={() => setShowModal(false)}
        showCloseButton={false}
        customMaskStyles={{ opacity: '0.8', backgroundColor: '#262626' }}
        customStyles={{
          width: '350px',
          height: 'fit-content',
          borderRadius: '15px',
          padding: '0',
        }}
      >
        <UnfollowModal>
          <ModalButton className="danger first">Report</ModalButton>
          <ModalButton className="danger">Unfollow</ModalButton>
          <ModalButton className="danger">Go to post</ModalButton>
          <ModalButton className="danger">Share to ...</ModalButton>
          <ModalButton className="danger">Copy link</ModalButton>
          <ModalButton className="danger">Embed</ModalButton>
          <ModalButton onClick={() => setShowModal(false)}>Cancel</ModalButton>
        </UnfollowModal>
      </Rodal>
    </PostContainer>
  );
}

export default Post;
