import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en';

import { FiMoreHorizontal } from 'react-icons/fi';
import {
  BsInbox,
  BsChat,
  BsHeart,
  BsFillHeartFill,
  BsBookmark,
} from 'react-icons/bs';
import { GrEmoji } from 'react-icons/gr';

import { createLike, getPostLike } from '../adapters/like';
import { createComment, getPostComment } from '../adapters/comment';
import checkLiked from '../utils/checkLiked';
import { useAuth } from '../contexts/AuthContext';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import truncateText from '../utils/truncateText';

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

function Post({ post }) {
  const [showModal, setShowModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [likes, setLikes] = useState();
  const [comments, setComments] = useState();
  const [likeStatus, setLikeStatus] = useState();
  const { currentUser } = useAuth();
  const [comment1, setComment1] = useState();
  const [comment2, setComment2] = useState();

  const commentRef = useRef();

  TimeAgo.addLocale(en);

  useEffect(() => {
    getPostComment(post.id)
      .then((snapshot) => {
        setComment1(snapshot.docs[0]);
        setComment2(snapshot.docs[1]);
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

  const uploadComment = () => {
    createComment(post.id, currentUser.displayName, commentRef.current.value)
      .then((snapshot) => {
        commentRef.current.value = '';
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const likePost = () => {
    createLike(post.id, currentUser.displayName)
      .then((snapshot) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderDetails>
          <Link to={`/${currentUser.displayName}`}>
            <ProfileImageContainer>
              <AuthorImage
                src={JSON.parse(post.data().userDetails).photoURL}
                alt="profile"
              />
            </ProfileImageContainer>
          </Link>
          <AuthorName>
            <Link to={`/${currentUser.displayName}`}>
              {JSON.parse(post.data().userDetails).username}
            </Link>
          </AuthorName>
        </PostHeaderDetails>
        <FiMoreHorizontal
          onClick={() => setShowModal(true)}
          cursor="pointer"
          fontSize="1.5rem"
        />
      </PostHeader>

      <PostImage
        onClick={() => setShowPostModal(true)}
        src={post.data().file}
        alt="post"
      />

      <PostHeader>
        <PostHeaderDetails>
          {likeStatus ? (
            <BsFillHeartFill color="#ff0000" fontSize="1.7rem" />
          ) : (
            <BsHeart onClick={likePost} fontSize="1.7rem" cursor="pointer" />
          )}
          <BsChat fontSize="1.7rem" cursor="pointer" />
          <BsInbox fontSize="1.7rem" cursor="pointer" />
        </PostHeaderDetails>
        <BsBookmark fontSize="1.7rem" cursor="pointer" />
      </PostHeader>

      <PostLikes>{likes?.length} likes</PostLikes>

      <CommentRow onClick={() => setShowPostModal(true)}>
        <PostDesc>
          {JSON.parse(post.data().userDetails).username}{' '}
          <DescText>{truncateText(post.data().desc, 10)}</DescText>{' '}
          <MoreLink>more</MoreLink>{' '}
        </PostDesc>
      </CommentRow>

      {comments?.length > 2 && (
        <CommentRow onClick={() => setShowPostModal(true)}>
          <CommentsLink>View all {comments?.length} comments</CommentsLink>
        </CommentRow>
      )}

      {comment1 && (
        <CommentRow>
          <PostDesc>
            {JSON.parse(comment1.data().userDetails).username}{' '}
            <DescText>{comment1.data().comment}</DescText>
          </PostDesc>

          <BsHeart fontSize="0.9rem" cursor="pointer" />
        </CommentRow>
      )}

      {comment2 && (
        <CommentRow>
          <PostDesc>
            {JSON.parse(comment2.data().userDetails).username}{' '}
            <DescText>{comment2.data().comment}</DescText>
          </PostDesc>

          <BsHeart fontSize="0.9rem" cursor="pointer" />
        </CommentRow>
      )}

      <CommentRow>
        <PostTime>
          {' '}
          <ReactTimeAgo date={post.data().date.toDate()} locale="en-US" />{' '}
        </PostTime>
      </CommentRow>

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
                {JSON.parse(post.data().userDetails).username} . Following
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
                <Link to={`/${currentUser.displayName}`}>
                  <ProfileImageContainer>
                    <AuthorImage
                      className="modal"
                      src={JSON.parse(post.data().userDetails).photoURL}
                      alt="profile"
                    />
                  </ProfileImageContainer>
                </Link>

                <AuthorName className="darker thick">
                  <Link to={`/${currentUser.displayName}`}>
                    {JSON.parse(post.data().userDetails).username} . Following
                  </Link>
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
                <Link to={`/${currentUser.displayName}`}>
                  <ProfileImageContainer className="modal">
                    <AuthorImage
                      className="modal"
                      src={JSON.parse(post.data().userDetails).photoURL}
                      alt="profile"
                    />
                  </ProfileImageContainer>
                </Link>
                <ModalComment>
                  <PostDesc>
                    <Link to={`/${currentUser.displayName}`}>
                      {JSON.parse(post.data().userDetails).username}{' '}
                    </Link>
                    <DescText>{post.data().desc}</DescText>
                  </PostDesc>
                  <PostDesc className="activity">
                    <DescText>
                      <ReactTimeAgo
                        date={post.data().date.toDate()}
                        locale="en-US"
                      />
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
                      <DescText>likes</DescText>
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
