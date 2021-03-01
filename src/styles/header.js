import styled from 'styled-components';
import { InputFieldContainer } from './inputField';

export const HeaderContainer = styled.nav`
  width: 100vw;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  height: 54px;
  background: #ffffff;
  display: flex;
  padding: 0 10%;
  align-items: center;
  justify-content: space-between;
  border-bottom: thin solid #dbdbdb;
  z-index: 100;

  @media (max-width: 450px) {
    padding: 0 5%;
  }
`;

export const HeaderLogo = styled.img`
  width: 100px;
  height: auto;
  margin-top: 8px;
  cursor: pointer;
`;

export const SearchFieldContainer = styled(InputFieldContainer)`
  width: 200px;
  background: #fafafa;
  height: 30px;
  padding: 5px;
  margin: 0;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: thin solid #dbdbdb;
  border-radius: 3px;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  left: 5px;
  bottom: 1px;
  transition: left 0.2s ease-in-out;
`;

export const CancelIconContainer = styled.div`
  position: absolute;
  right: 5px;
  bottom: 1px;
  transition: left 0.2s ease-in-out;
`;

export const SearchField = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 80%;
  transition: left 0.2s ease-in-out;

  &::-webkit-input-placeholder {
    text-align: center;
  }

  &:focus {
    &::-webkit-input-placeholder {
      text-align: start;
    }
  }

  &:placeholder-shown ~ ${CancelIconContainer} {
    display: none;
  }

  &:placeholder-shown ~ ${SearchIconContainer} {
    left: 30%;
  }

  &:focus ~ ${SearchIconContainer} {
    left: 5px;
  }

  &:focus ~ ${CancelIconContainer} {
    display: block;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 450px) {
    gap: 15px;
  }
`;

export const HeaderProfileContainer = styled.div`
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.active ? 'thin solid #000000' : 'thin solid transparent'};
  border-radius: 50%;
`;

export const HeaderProfileImage = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  width: 110%;
  position: absolute;
  top: 170%;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  transition: display 0.3s ease-in-out;
  box-sizing: border-box;

  &.notifications {
    height: 300px;
    right: 0;
    width: 250%;
    padding: 20px;

    @media (max-width: 450px) {
      width: 150%;
      height: 200px;
    }
  }

  &.search {
    width: 400px;
    padding: 0;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    top: 60px;
    left: 30%;
    height: 350px;
    overflow-y: scroll;

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

export const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: -7%;
  right: 9%;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  z-index: -1;

  &.notifications {
    top: -4%;

    @media (max-width: 450px) {
      right: 14%;
    }
  }

  &.search {
    /* background: red; */
    top: -3%;
    right: 50%;
  }
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #fafafa;
  }
`;

export const DropdownText = styled.p`
  color: #000000;
  font-size: 0.8rem;

  &.notifications {
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export const LogoutLink = styled(DropdownItem)`
  border-top: thin solid #dbdbdb;
`;

export const HeaderLink = styled.div`
  padding: 0 10px;
  border-radius: 3px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  background: transparent;
  color: #0095f6;

  &.primary {
    background: #0095f6;
    color: #ffffff;
    font-weight: 500;
  }
`;
