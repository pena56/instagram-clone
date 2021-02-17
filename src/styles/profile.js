import styled from 'styled-components';
import { ParentContainer } from './globalStyle';

export const ProfileContainer = styled(ParentContainer)`
  align-items: center;
  padding: 0 10%;
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
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ProfileMeta = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Activity = styled(ProfileMeta)`
  gap: 30px;
`;

export const DisplayName = styled.p`
  font-weight: 700;
  color: #262626;
`;

export const Username = styled.p`
  font-size: 1.8rem;
  color: #9b9b9b;
`;

export const EditButton = styled.button`
  outline: none;
  padding: 7px;
  border: thin solid #dbdbdb;
  color: #262626;
  background: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9rem;
`;

export const ActivityText = styled(Username)`
  font-size: 1rem;
  cursor: pointer;
`;

export const ActivityNumber = styled.span`
  color: #262626;
`;

export const ProfilePostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15%;
`;

export const ProfilePostHeader = styled.div`
  width: 100%;
  border-top: thin solid #dbdbdb;
`;
