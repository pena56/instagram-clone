import styled from 'styled-components';
import { ParentContainer } from './globalStyle';

export const ProfileContainer = styled(ParentContainer)`
  align-items: center;
  padding: 0 10%;
  width: 100vw;
  box-sizing: border-box;
  /* overflow-x: hidden; */

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 85px;
  padding-bottom: 40px;
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  gap: 80px;
  overflow-x: hidden;

  @media (max-width: 450px) {
    padding-left: 5%;
    padding-right: 5%;
    gap: 10px;
    flex-wrap: wrap;
    position: relative;
    height: fit-content;
    padding-bottom: 170px;
  }
`;

export const EditContainer = styled(BannerContainer)`
  background: #ffffff;
  border-radius: 3px;
  width: 100%;
  padding: 0;
  margin-top: 85px;
  border: thin solid #dbdbdb;
  gap: 0;

  @media (max-width: 450px) {
    margin-top: 60px;
    height: 100%;
  }
`;

export const ProfileImage = styled.img`
  min-width: 150px;
  max-width: 150px;
  max-height: 150px;
  min-height: 150px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  background: #fafafa;
  padding: 3px;

  @media (max-width: 450px) {
    max-width: 90px;
    min-width: 90px;
    max-height: 90px;
    min-height: 90px;
  }
`;

export const ProfileImageContainer = styled.div`
  background: linear-gradient(to right, red, orange);
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  &.modal {
    align-self: flex-start;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 450px) {
    position: absolute;
    padding-right: 10%;
    gap: 0;
  }
`;

export const ProfileMeta = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    gap: 10px;
    order: 1;
    width: 200px;
    align-self: flex-end;
  }
`;

export const Activity = styled(ProfileMeta)`
  gap: 50px;

  @media (max-width: 450px) {
    order: 3;
    gap: 0;
    align-items: space-between;
    justify-content: space-between;
    width: 100%;
    padding: 5px 0;
    border-bottom: thin solid #dbdbdb;
    border-top: thin solid #dbdbdb;
    margin-top: 20px;
  }
`;

export const DisplayName = styled.p`
  font-weight: 700;
  color: #262626;

  @media (max-width: 450px) {
    order: 2;
    margin-top: 50px;
    /* margin-bottom: 10px; */
  }
`;

export const Bio = styled(DisplayName)`
  font-weight: 500;

  @media (max-width: 450px) {
    order: 2;
    margin-top: 5px;
  }
`;

export const Website = styled.a`
  color: #0095f6;

  @media (max-width: 450px) {
    order: 2;
  }
`;

export const Username = styled.p`
  font-size: 1.7rem;
  color: #262626;
  font-weight: 100;

  @media (max-width: 450px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

export const ProfileButton = styled.button`
  outline: none;
  padding: 7px 14px;
  border: thin solid #dbdbdb;
  color: #262626;
  background: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9rem;
  position: relative;

  &.follow-btn {
    border: none;
    background: #0095f6;
    color: #ffffff;
  }

  @media (max-width: 450px) {
    /* width: 100%; */
  }
`;

export const ActivityText = styled(DisplayName)`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
`;

export const ActivityNumber = styled.span`
  color: #262626;
  font-weight: 700;
`;

export const ProfilePostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const ProfilePostHeader = styled.div`
  width: 100%;
  border-top: thin solid #dbdbdb;
  display: flex;
  gap: 10px;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 450px) {
    justify-content: space-around;
  }
`;

export const MenuList = styled.div`
  width: 40%;
  border-right: thin solid #dbdbdb;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const MenuItem = styled.p`
  padding: 18px 30px;
  font-size: 0.9rem;
  cursor: pointer;
  border-left: 2px solid transparent;

  &:hover {
    background: #fafafa;
    border-left: 2px solid #dbdbdb;
  }

  &.active {
    font-weight: 700;
    border-left: 2px solid #000000;

    &:hover {
      background: #ffffff;
      border-left: 2px solid #000000;
    }
  }
`;

export const MenuBody = styled(MenuList)`
  width: 100vw;
  overflow-x: hidden;
  border: none;
  padding: 30px 0;
  gap: 20px;

  @media (max-width: 450px) {
    display: flex;
    padding: 10px 0;
  }
`;

export const BodyItem = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15%;
  margin: 10px 0;

  @media (max-width: 450px) {
    gap: 10px;
    padding: 0 20px;
    flex-direction: column;
  }
`;

export const ImageBodyItem = styled(BodyItem)`
  @media (max-width: 450px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const BodyMeta = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  box-sizing: border-box;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ImageMeta = styled(BodyMeta)`
  @media (max-width: 450px) {
    width: fit-content;
  }
`;

export const BodyLabel = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 450px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const ImageLabel = styled(BodyLabel)`
  @media (max-width: 450px) {
    width: fit-content;
    margin-right: 20px;
  }
`;

export const BodyUsername = styled(Username)`
  font-size: 1.2rem;
`;

export const ImageInput = styled.input`
  display: none;
  opacity: 0;
`;

export const Input = styled.input`
  padding: 7px 10px;
  border: thin solid #dbdbdb;
  border-radius: 3px;
  font-size: 1rem;
`;

export const InputArea = styled.textarea`
  padding: 7px 10px;
  border: thin solid #dbdbdb;
  border-radius: 3px;
  font-size: 1rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 700;
  color: #0095f6;
  cursor: pointer;
`;

export const InputLabel = styled(Label)`
  color: #000000;
  width: fit-content;
  cursor: text;
  margin-top: 5px;
`;

export const InputDesc = styled.p`
  font-size: 0.7rem;
  color: #a9a9a9;
  margin-top: 10px;
`;

export const DescHeader = styled(InputDesc)`
  font-size: 0.8rem;
  margin-top: 40px;
  font-weight: 500;
  color: #3a3a3a;
`;

export const Button = styled(ProfileButton)`
  width: fit-content;
  border: none;
  background: #0095f6;
  color: #ffffff;
  position: relative;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

export const ImageLoader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  position: absolute;
  background: #ffffff;
  z-index: 5;
`;

export const Loader = styled(ImageLoader)`
  border-radius: 0;
  top: 0;
  left: 0;
`;

export const UnfollowModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalImage = styled(ProfileImage)`
  min-width: 100px;
  max-width: 100px;
  max-height: 100px;
  min-height: 100px;
  margin: 30px 0;
`;

export const UnfollowText = styled.p`
  font-size: 0.85rem;
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: 15px 0;
  border: none;
  cursor: pointer;
  border-top: thin solid #dbdbdb;
  outline: none;
  background: none;
  font-size: 0.9rem;

  &.danger {
    font-weight: 700;
    color: #ed4956;
  }

  &.first {
    border-top: none;
  }
`;

export const ProfileHeader = styled.div`
  width: fit-content;
  display: flex;
  padding: 15px 10px;
  gap: 5px;
  cursor: pointer;

  &.active {
    border-top: 1px solid #000000;
    font-weight: 700;
  }
`;

export const HeaderName = styled.p`
  font-size: 0.8rem;
`;

export const UserPosts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 5px;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 450px) {
    justify-content: space-between;
    gap: 0;
    overflow-x: hidden;
  }
`;

export const PostOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export const OverlayContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: #ffffff;
`;

export const UserPost = styled.div`
  max-width: 300px;
  min-width: 300px;
  min-height: 300px;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 450px) {
    min-height: 120px;
    max-height: 120px;
    min-width: 120px;
    max-width: 120px;
    margin-bottom: 2px;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  /* max-height: 500px; */

  &.modal {
    max-width: 300px;
    min-width: 300px;
    min-height: 300px;
    max-height: 300px;
    object-fit: cover;

    @media (max-width: 450px) {
      min-height: 120px;
      max-height: 120px;
      min-width: 120px;
      max-width: 120px;
    }
  }
`;
