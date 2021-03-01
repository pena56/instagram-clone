import { useState, useRef, useEffect } from 'react';
import Rodal from 'rodal';

import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en';

import {
  BsFillChatFill,
  BsFillHeartFill,
  BsHeart,
  BsChat,
  BsInbox,
  BsBookmark,
} from 'react-icons/bs';

import { FiMoreHorizontal } from 'react-icons/fi';
import { GrEmoji } from 'react-icons/gr';

import { createComment, getPostComment } from '../adapters/comment';
import { createLike, getPostLike } from '../adapters/like';
import { useAuth } from '../contexts/AuthContext';
import checkLiked from '../utils/checkLiked';

import {
  UserPost,
  PostImage,
  PostOverlay,
  OverlayContainer,
  ProfileImageContainer,
  UnfollowModal,
  ModalButton,
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

function UserPostModal({ post }) {
  const [showPostModal, setShowPostModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState();
  const [likes, setLikes] = useState();
  const [likeStatus, setLikeStatus] = useState();
  TimeAgo.addLocale(en);
  const commentRef = useRef();
  const { currentUser } = useAuth();

  const uploadComment = () => {
    createComment(post.id, currentUser.displayName, commentRef.current.value)
      .then((snapshot) => {
        commentRef.current.value = '';
        // console.log(snapshot);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const likePost = () => {
    createLike(post.id, currentUser.displayName)
      .then((snapshot) => {
        console.log(snapshot);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPostComment(post.id)
      .then((snapshot) => {
        setComments(snapshot.docs);
      })
      .catch((error) => {
        console.error(error);
      });

    getPostLike(post.id)
      .then((snapshot) => {
        setLikes(snapshot.docs);
        setLikeStatus(checkLiked(currentUser.displayName, snapshot.docs));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <UserPost onClick={() => setShowPostModal(true)}>
        <PostImage className="modal" src={post.data().file} alt="post" />
        <PostOverlay>
          <OverlayContainer>
            {likeStatus ? (
              <BsFillHeartFill color="#ff0000" fontSize="1.7rem" />
            ) : (
              <BsFillHeartFill color="#ffffff" fontSize="1.5rem" />
            )}
            {likes?.length}
          </OverlayContainer>
          <OverlayContainer>
            <BsFillChatFill color="#ffffff" fontSize="1.5rem" />
            {comments?.length}
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
                  src={JSON.parse(post.data().userDetails).photoURL}
                  alt="profile"
                />
              </ProfileImageContainer>

              <AuthorName className="darker thick">
                {JSON.parse(post.data().userDetails).username}
              </AuthorName>
            </PostHeaderDetails>
            <FiMoreHorizontal
              onClick={() => setShowModal(true)}
              cursor="pointer"
              fontSize="1.5rem"
            />
          </PostHeader>
          <ModalImage>
            <PostImage src={post.data().file} alt="post" />
          </ModalImage>
          <ModalFooter className="footer">
            <PostHeader>
              <PostHeaderDetails>
                {likeStatus ? (
                  <BsFillHeartFill color="#ff0000" fontSize="1.7rem" />
                ) : (
                  <BsHeart
                    onClick={likePost}
                    fontSize="1.7rem"
                    cursor="pointer"
                  />
                )}
                <BsChat fontSize="1.7rem" cursor="pointer" />
                <BsInbox fontSize="1.7rem" cursor="pointer" />
              </PostHeaderDetails>
              <BsBookmark fontSize="1.7rem" cursor="pointer" />
            </PostHeader>

            <PostLikes>{likes?.length} likes</PostLikes>
            <CommentRow>
              <PostTime>
                <ReactTimeAgo date={post.data().date.toDate()} locale="en-US" />
              </PostTime>
            </CommentRow>
          </ModalFooter>
          <ModalDetails>
            <PostHeader className="modal">
              <PostHeaderDetails>
                <ProfileImageContainer>
                  <AuthorImage
                    className="modal"
                    src={JSON.parse(post.data().userDetails).photoURL}
                    alt="profile"
                  />
                </ProfileImageContainer>

                <AuthorName className="darker thick">
                  {JSON.parse(post.data().userDetails).username}
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
                    src={JSON.parse(post.data().userDetails).photoURL}
                    alt="profile"
                  />
                </ProfileImageContainer>
                <ModalComment>
                  <PostDesc>
                    {JSON.parse(post.data().userDetails).username}
                    <DescText>{post.data().desc}</DescText>
                  </PostDesc>
                  <PostDesc className="activity">
                    <DescText>
                      {' '}
                      <ReactTimeAgo
                        date={post.data().date.toDate()}
                        locale="en-US"
                      />{' '}
                    </DescText>
                  </PostDesc>
                </ModalComment>
              </CommentRow>

              {comments?.map((comment) => (
                <CommentRow>
                  <AuthorImage
                    className="modal"
                    src={JSON.parse(comment.data().userDetails).photoURL}
                    alt="profile"
                  />
                  <ModalComment>
                    <PostDesc>
                      {JSON.parse(comment.data().userDetails).username}{' '}
                      <DescText>{comment.data().comment}</DescText>
                    </PostDesc>
                    <PostDesc className="activity">
                      <DescText>
                        <ReactTimeAgo
                          date={comment.data().date.toDate()}
                          locale="en-US"
                        />
                      </DescText>
                      <DescText>2 likes</DescText>
                      <DescText className="reply">Reply</DescText>
                    </PostDesc>
                  </ModalComment>

                  <BsHeart fontSize="0.9rem" cursor="pointer" />
                </CommentRow>
              ))}
            </CommentSection>

            <ModalFooter>
              <PostHeader>
                <PostHeaderDetails>
                  {likeStatus ? (
                    <BsFillHeartFill color="#ff0000" fontSize="1.7rem" />
                  ) : (
                    <BsHeart
                      onClick={likePost}
                      fontSize="1.7rem"
                      cursor="pointer"
                    />
                  )}

                  <BsChat fontSize="1.7rem" cursor="pointer" />
                  <BsInbox fontSize="1.7rem" cursor="pointer" />
                </PostHeaderDetails>
                <BsBookmark fontSize="1.7rem" cursor="pointer" />
              </PostHeader>

              <PostLikes>{likes?.length} likes</PostLikes>

              <CommentBox>
                <GrEmoji fontSize="1.7rem" cursor="pointer" />
                <CommentForm>
                  <CommentField
                    ref={commentRef}
                    type="text"
                    placeholder="Add a comment..."
                  />
                </CommentForm>
                <CommentButton onClick={uploadComment}>Post</CommentButton>
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
    </div>
  );
}

export default UserPostModal;
