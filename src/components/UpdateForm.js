import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import {
  BodyItem,
  ImageBodyItem,
  BodyLabel,
  ImageLabel,
  Image,
  BodyMeta,
  ImageMeta,
  BodyUsername,
  ImageInput,
  Label,
  InputLabel,
  Input,
  InputDesc,
  InputArea,
  DescHeader,
  Button,
  ImageLoader,
} from '../styles/profile';

import { getUserProfile, updateProfile } from '../adapters/getProfile';

import { useAuth } from '../contexts/AuthContext';

import { AuthForm } from '../styles/authForm';

import FlashMessage from '../components/FlashMessage';

import defaultProfile from '../images/BlankImage.jpg';

function UpdateForm() {
  const { updateProfileImage, currentUser } = useAuth();
  const [imageLoading, setImageLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [fullName, setFullName] = useState();
  const [username, setUsername] = useState();
  const [website, setWebsite] = useState();
  const [bio, setBio] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    getUserProfile(currentUser.displayName)
      .then((doc) => {
        setFullName(doc.data().fullName);
        setUsername(doc.data().username);
        setWebsite(doc.data().website);
        setBio(doc.data().bio);
        setEmail(doc.data().email);
        setPhone(doc.data().phone);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [message]);

  const handleProfileImageUpdate = (e) => {
    setImageLoading(true);
    const file = e.target.files[0];
    updateProfileImage(file)
      .then((msg) => {
        setImageLoading(false);
        setMessage(msg);
      })
      .catch((error) => {
        setImageLoading(false);
        setMessage(error.message);
      });
  };

  const handleProfileUpdate = (e) => {
    setFormLoading(true);
    e.preventDefault();
    const data = {
      email,
      fullName,
      username,
      bio,
      website,
      phone,
    };
    updateProfile(currentUser.displayName, data)
      .then((msg) => {
        setFormLoading(false);
        setMessage(msg);
      })
      .catch((error) => {
        setFormLoading(false);
        setMessage(error.message);
      });
  };

  return (
    <>
      <FlashMessage message={message} />
      <ImageBodyItem>
        <ImageLabel>
          {imageLoading && (
            <ImageLoader>
              <ReactLoading
                width="1.2rem"
                height="1.2rem"
                color="#000000"
                type="spokes"
              />
            </ImageLoader>
          )}
          <Image
            src={currentUser.photoURL ? currentUser.photoURL : defaultProfile}
            alt="profile"
          />
        </ImageLabel>

        <ImageMeta>
          <BodyUsername>{username}</BodyUsername>
          <ImageInput
            onChange={handleProfileImageUpdate}
            type="file"
            id="update_image"
          />
          <Label htmlFor="update_image">Change Profile Photo</Label>
        </ImageMeta>
      </ImageBodyItem>
      <AuthForm onSubmit={(e) => handleProfileUpdate(e)}>
        <BodyItem>
          <BodyLabel>
            <InputLabel htmlFor="displayName">Name</InputLabel>
          </BodyLabel>

          <BodyMeta>
            <Input
              id="displayName"
              value={fullName && fullName}
              placeholder="Full Name"
              onChange={(e) => setFullName(e.currentTarget.value)}
            />
            <InputDesc>
              Help people discover your account by using the name you're known
              by: either your full name, nickname, or business name. <br />{' '}
              <br /> You can only change your name twice within 14 days.
            </InputDesc>
          </BodyMeta>
        </BodyItem>
        <BodyItem>
          <BodyLabel>
            <InputLabel htmlFor="username">Username</InputLabel>
          </BodyLabel>

          <BodyMeta>
            <Input
              id="username"
              value={username && username}
              placeholder="Username"
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <InputDesc>
              In most cases, you'll be able to change your username back to
              {username && username} for another 14 days. Learn More
            </InputDesc>
          </BodyMeta>
        </BodyItem>
        <BodyItem>
          <BodyLabel>
            <InputLabel htmlFor="website">Website</InputLabel>
          </BodyLabel>

          <BodyMeta>
            <Input
              id="website"
              value={website && website}
              placeholder="Website"
              onChange={(e) => setWebsite(e.currentTarget.value)}
            />
          </BodyMeta>
        </BodyItem>
        <BodyItem>
          <BodyLabel>
            <InputLabel htmlFor="bio">Bio</InputLabel>
          </BodyLabel>

          <BodyMeta>
            <InputArea
              id="bio"
              value={bio && bio}
              rows="3"
              onChange={(e) => setBio(e.currentTarget.value)}
            />
            <DescHeader>Personal Information</DescHeader>
            <InputDesc>
              Provide your personal information, even if the account is used for
              a business, a pet or something else. This won't be a part of your
              public profile.
            </InputDesc>
          </BodyMeta>
        </BodyItem>
        <BodyItem>
          <BodyLabel>
            <InputLabel htmlFor="email">Email</InputLabel>
          </BodyLabel>

          <BodyMeta>
            <Input
              id="email"
              value={email && email}
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </BodyMeta>
        </BodyItem>
        <BodyItem>
          <BodyLabel>
            <InputLabel htmlFor="phone">Phone Number</InputLabel>
          </BodyLabel>

          <BodyMeta>
            <Input
              id="phone"
              value={phone && phone}
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.currentTarget.value)}
            />
          </BodyMeta>
        </BodyItem>
        <BodyItem>
          <BodyLabel></BodyLabel>

          <BodyMeta>
            <Button disabled={formLoading} type="submit">
              Submit
            </Button>
          </BodyMeta>
        </BodyItem>
      </AuthForm>
    </>
  );
}

export default UpdateForm;
