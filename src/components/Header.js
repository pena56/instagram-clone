import { useState, useEffect } from 'react';
import { Link, useHistory, NavLink } from 'react-router-dom';

import { IoHomeOutline, IoHomeSharp, IoBookmarkOutline } from 'react-icons/io5';
import { CgAddR } from 'react-icons/cg';
import { BsInbox } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { RiSettings3Line } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

import { useAuth } from '../contexts/AuthContext';

import logo from '../images/logo.svg';
import blankProfile from '../images/BlankImage.jpg';

import {
  HeaderContainer,
  HeaderLogo,
  SearchFieldContainer,
  HeaderIcons,
  HeaderProfileImage,
  DropdownMenu,
  DropdownItem,
  DropdownText,
  HeaderProfileContainer,
  Triangle,
  SearchField,
  SearchIconContainer,
  CancelIconContainer,
  LogoutLink,
  HeaderLink,
} from '../styles/header';

function Header({ currentPath }) {
  const [showDrawer, setShowDrawer] = useState(false);

  const history = useHistory();

  const { signout, currentUser } = useAuth();

  useEffect(() => {}, [currentUser]);

  const handleSignout = () => {
    signout();
    setShowDrawer((prev) => !prev);
    history.push('/accounts/signin');
  };

  const showProfile = () => {
    if (currentUser) {
      setShowDrawer((prev) => !prev);
      history.push(`/${currentUser.displayName}`);
    }
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src={logo} alt="logo" />
      </Link>

      <SearchFieldContainer>
        <SearchField placeholder="Search" />

        <SearchIconContainer>
          <AiOutlineSearch color="#dbdbdb" fontSize="1rem" />
        </SearchIconContainer>

        <CancelIconContainer>
          <MdCancel cursor="pointer" color="#dbdbdb" fontSize="1rem" />
        </CancelIconContainer>
      </SearchFieldContainer>
      <HeaderIcons>
        {currentUser ? (
          <>
            <NavLink to="/">
              {currentPath === '/' ? (
                <IoHomeSharp fontSize="1.5rem" cursor="pointer" />
              ) : (
                <IoHomeOutline fontSize="1.5rem" cursor="pointer" />
              )}
            </NavLink>

            <BsInbox fontSize="1.5rem" cursor="pointer" />
            <CgAddR fontSize="1.5rem" cursor="pointer" />
            <IoHeartOutline fontSize="1.5rem" cursor="pointer" />
            <HeaderProfileContainer
              active={currentPath === '/:uid/' ? true : false}
              onClick={() => setShowDrawer((prev) => !prev)}
            >
              <HeaderProfileImage
                src={currentUser.photoURL ? currentUser.photoURL : blankProfile}
                alt="profile"
              />
            </HeaderProfileContainer>

            <DropdownMenu show={showDrawer}>
              <Triangle />
              <DropdownItem onClick={showProfile}>
                <CgProfile fontSize="1.2rem" />
                <DropdownText>Profile</DropdownText>
              </DropdownItem>
              <DropdownItem>
                <IoBookmarkOutline fontSize="1.2rem" />
                <DropdownText>Saved</DropdownText>
              </DropdownItem>
              <DropdownItem>
                <RiSettings3Line fontSize="1.2rem" />
                <DropdownText>Settings</DropdownText>
              </DropdownItem>
              <LogoutLink onClick={handleSignout}>
                <DropdownText>Logout</DropdownText>
              </LogoutLink>
            </DropdownMenu>
          </>
        ) : (
          <>
            <HeaderLink className="primary">
              <Link to="/accounts/signin">Log In</Link>
            </HeaderLink>
            <HeaderLink>
              <Link to="/accounts/emailsignup">Sign Up</Link>{' '}
            </HeaderLink>
          </>
        )}
      </HeaderIcons>
    </HeaderContainer>
  );
}

export default Header;
