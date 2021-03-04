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

export const ExploreContainer = styled(HomeContainer)`
  overflow-y: scroll;
  flex-direction: column;
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

  &.modal {
    height: 55px;
    position: absolute;
    top: 0;
    z-index: 3;
    border-bottom: thin solid #dbdbdb;
  }

  &.modal-header {
    display: none;

    @media (max-width: 450px) {
      display: flex;
      position: relative;
    }
  }

  &.search {
    padding: 5px;
  }
`;

export const CommentRow = styled(PostHeader)`
  padding: 0;
  padding-right: 15px;
  align-items: flex-start;
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

  &.darker {
    color: #000000;
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
    width: 25px;
    height: 25px;
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

  &.search {
    width: 40px;
    height: 40px;
  }
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  &.search {
    gap: 3px;
  }
`;

export const PostImage = styled.img`
  min-width: 100%;
  max-width: 100%;
  height: auto;
  cursor: pointer;
  /* object-fit: cover; */
`;

export const PostLikes = styled(AuthorName)`
  padding: 0 15px;
  font-weight: 700;
`;

export const PostDesc = styled(PostLikes)`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow-x: hidden;

  &.activity {
    gap: 15px;
    font-weight: 700;
  }
`;

export const DescText = styled.span`
  font-weight: 500;

  &.reply {
    cursor: pointer;
  }
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

export const CommentForm = styled.div`
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
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 450px) {
    flex-direction: column;
  }

  &.upload {
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
`;

export const ModalImage = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    width: 100%;
    height: auto;
  }
`;

export const ModalDetails = styled.div`
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #ffffff;
  right: 0;
  overflow-y: hidden;

  @media (max-width: 450px) {
    width: 100%;
    height: fit-content;
    position: relative;
    overflow-y: scroll;
    display: none;
  }
`;

export const CommentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;

  &.modal {
    padding: 10px 0;
    padding-left: 15px;
    margin-top: 55px;
    margin-bottom: 150px;
    overflow-y: scroll;
    height: 100%;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #828689;
    }
  }
`;

export const ModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;

  &.footer {
    display: none;

    @media (max-width: 450px) {
      position: relative;
      height: fit-content;
      display: block;
    }
  }
`;

export const ModalComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
`;

export const UploadButton = styled.label``;

export const UploadField = styled.input`
  width: 0;
  display: none;
  opacity: 0;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  align-items: center;
  background: #ffffff;

  &.footer {
    justify-content: space-around;
    border-top: thin solid #dbdbdb;
    border-bottom: thin solid #dbdbdb;
    padding: 0;
  }
`;

export const ModalTitle = styled.p`
  color: #000000;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const NextButton = styled(ModalTitle)`
  color: #0095f6;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  margin-bottom: 20px;

  &.small {
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin: 0;
  }
`;

export const FooterAction = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: thin solid #000000;
  box-sizing: border-box;

  &.disabled {
    border: none;
  }
`;

export const PhotoSection = styled.div`
  width: 100%;
  height: 100%;
  background: #fafafa;
  box-sizing: border-box;
`;

export const CaptionSection = styled(PhotoSection)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.show ? '0' : '-100%')};
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LoadingModal = styled(CaptionSection)`
  right: 0;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  background: #000000;

  &.search {
    background: #fafafa;
  }
`;

export const DescContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  background: #ffffff;
  border-top: thin solid #dbdbdb;
  border-bottom: thin solid #dbdbdb;
  margin: 10px 0;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const UserPrevImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
`;
