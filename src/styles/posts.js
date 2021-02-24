import styled from 'styled-components';

import { ProfileContainer } from './profile';

export const HomeContainer = styled(ProfileContainer)`
  padding-top: 65px;
  width: 100%;
  max-height: 100vh;
  overflow-y: hidden;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

export const PostList = styled.div`
  width: 65%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Extra = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: thin solid #dbdbdb;
  border-radius: 3px;
`;

export const SidebarContainer = styled(PostContainer)`
  background: none;
  border: none;
  align-items: center;
`;

export const PostHeader = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;

  &.small {
    padding: 0 15px;
    width: 90%;
    margin: 7px 0;
  }
`;

export const CommentRow = styled(PostHeader)`
  padding: 0;
  padding-right: 15px;
  margin-top: 5px;
`;

export const PostHeaderDetails = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: pointer;
`;

export const AuthorName = styled.p`
  font-size: 0.9rem;
  color: #262626;

  &.thick {
    font-weight: 700;
  }

  &.secondary {
    color: #8e8e8e;
  }

  &.suggestion {
    padding: 0 15px;
    padding-bottom: 10px;
    font-size: 0.95rem;
    width: 100%;
  }

  &.small {
    font-size: 0.7rem;
  }
`;

export const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  background: #ffffff;
  padding: 2px;

  &.modal {
    width: 35px;
    height: 35px;
  }
`;

export const UserImage = styled(AuthorImage)`
  width: 55px;
  height: 55px;
  background: #fafafa;
  padding: 2px;

  &.mini {
    width: 30px;
    height: 30px;
  }
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const PostLikes = styled(AuthorName)`
  padding: 0 15px;
  font-weight: 700;
`;

export const PostDesc = styled(PostLikes)``;

export const DescText = styled.span`
  font-weight: 500;
`;

export const MoreLink = styled(DescText)`
  cursor: pointer;
  font-size: 0.8rem;
`;

export const PostTime = styled(MoreLink)`
  text-transform: uppercase;
  padding-left: 15px;
  font-size: 0.7rem;
`;

export const CommentsLink = styled(MoreLink)`
  display: block;
  padding: 0 15px;
`;

export const CommentBox = styled.div`
  width: 100%;
  padding: 10px 15px;
  border-top: thin solid #dbdbdb;
  display: flex;
  margin-top: 15px;
  box-sizing: border-box;
  align-items: center;
`;

export const CommentForm = styled.form`
  width: 100%;
  display: flex;
`;

export const CommentField = styled.input`
  width: 100%;
  font-size: 0.95rem;
  padding: 10px;
  outline: none;
  border: none;
`;

export const CommentButton = styled.button`
  padding: 10px;
  background: none;
  color: #0095f6;
  outline: none;
  border: none;
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ModalImage = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDetails = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentSection = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`;
