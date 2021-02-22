import styled from 'styled-components';
import { AuthContainer } from './authForm';

export const GetAppContainer = styled(AuthContainer)`
  background: inherit;
  margin: 15px 0;
  border: none;
  box-sizing: border-box;
`;

export const GetAppText = styled.p`
  margin: 20px 0;
  font-size: 0.8rem;
`;

export const StoreIcons = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
`;
export const Icon = styled.img`
  width: 140px;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;
