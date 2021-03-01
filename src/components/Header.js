import { useState, useEffect, useRef } from 'react';
import { Link, useHistory, NavLink } from 'react-router-dom';

import { AiOutlineCompass, AiFillCompass } from 'react-icons/ai';
import {
  IoHomeOutline,
  IoHomeSharp,
  IoBookmarkOutline,
  IoHeartOutline,
  IoHeart,
} from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { RiSettings3Line } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

import ReactLoading from 'react-loading';

import { searchUsers } from '../adapters/search';
import { useAuth } from '../contexts/AuthContext';

import UploadModal from '../components/UploadModal';

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

import {
  PostHeader,
  PostHeaderDetails,
  UserImage,
  Names,
  AuthorName,
  LoadingModal,
} from '../styles/posts';
import { ProfileImageContainer } from '../styles/profile';

function Header({ currentPath }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchRef = useRef();

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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length >= 1) {
      setLoading(true);
      setShowSearchBar(true);
      searchUsers(e.target.value)
        .then((snapshot) => {
          setLoading(false);
          if (snapshot.empty) {
            console.log('No entry found');
          } else {
            setSearchResults(snapshot.docs);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setShowSearchBar(false);
    }
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src={logo} alt="logo" />
      </Link>

      <SearchFieldContainer>
        <SearchField
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
          placeholder="Search"
        />

        <SearchIconContainer>
          <AiOutlineSearch color="#dbdbdb" fontSize="1rem" />
        </SearchIconContainer>

        <CancelIconContainer onClick={() => setShowSearchBar(false)}>
          <MdCancel cursor="pointer" color="#dbdbdb" fontSize="1rem" />
        </CancelIconContainer>
      </SearchFieldContainer>

      <DropdownMenu className="search" show={showSearchBar}>
        {loading && (
          <LoadingModal className="search">
            <ReactLoading type="spokes" color="#000000" fontSize="5%" />
          </LoadingModal>
        )}

        <Triangle className="search" />

        {searchResults &&
          searchResults.map((result) => (
            <Link to={`/${result.id}`}>
              <PostHeader key={result.id} className="search">
                <PostHeaderDetails>
                  <ProfileImageContainer>
                    <UserImage
                      className="search"
                      src={result.data().photoURL}
                      alt="profile"
                    />
                  </ProfileImageContainer>
                  <Names className="search">
                    <AuthorName className="thick">
                      {result.data().username}
                    </AuthorName>
                    <AuthorName className="secondary">
                      {result.data().fullName}
                    </AuthorName>
                  </Names>
                </PostHeaderDetails>
              </PostHeader>
            </Link>
          ))}
      </DropdownMenu>
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

            <NavLink to="/explore/">
              {currentPath === '/explore/' ? (
                <AiFillCompass fontSize="1.5rem" cursor="pointer" />
              ) : (
                <AiOutlineCompass fontSize="1.5rem" cursor="pointer" />
              )}
            </NavLink>

            <UploadModal />

            {showNotification ? (
              <IoHeart
                onClick={() => setShowNotification((prev) => !prev)}
                fontSize="1.5rem"
                cursor="pointer"
              />
            ) : (
              <IoHeartOutline
                onClick={() => setShowNotification((prev) => !prev)}
                fontSize="1.5rem"
                cursor="pointer"
              />
            )}

            <DropdownMenu className="notifications " show={showNotification}>
              <Triangle className="notifications" />
              <DropdownText className="notifications">This Month</DropdownText>
              <DropdownText>
                You currently don't have any notifications
              </DropdownText>
            </DropdownMenu>

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
              <NavLink to="/accounts/edit/">
                <DropdownItem>
                  <RiSettings3Line fontSize="1.2rem" />
                  <DropdownText>Settings</DropdownText>
                </DropdownItem>
              </NavLink>

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
