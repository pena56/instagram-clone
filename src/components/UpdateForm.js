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
} from '../styles/profile';

import { AuthForm } from '../styles/authForm';

import defaultProfile from '../images/BlankImage.jpg';

function UpdateForm() {
  return (
    <AuthForm>
      <ImageBodyItem>
        <ImageLabel>
          <Image src={defaultProfile} alt="profile" />
        </ImageLabel>

        <ImageMeta>
          <BodyUsername>brake_emi</BodyUsername>
          <ImageInput type="file" id="update_image" />
          <Label htmlFor="update_image">Change Profile Photo</Label>
        </ImageMeta>
      </ImageBodyItem>
      <BodyItem>
        <BodyLabel>
          <InputLabel htmlFor="displayName">Name</InputLabel>
        </BodyLabel>

        <BodyMeta>
          <Input id="displayName" value="Moses Ogbopina" />
          <InputDesc>
            Help people discover your account by using the name you're known by:
            either your full name, nickname, or business name. <br /> <br /> You
            can only change your name twice within 14 days.
          </InputDesc>
        </BodyMeta>
      </BodyItem>
      <BodyItem>
        <BodyLabel>
          <InputLabel htmlFor="username">Username</InputLabel>
        </BodyLabel>

        <BodyMeta>
          <Input id="username" value="brake_emi" />
          <InputDesc>
            In most cases, you'll be able to change your username back to
            brake_emi for another 14 days. Learn More
          </InputDesc>
        </BodyMeta>
      </BodyItem>
      <BodyItem>
        <BodyLabel>
          <InputLabel htmlFor="website">Website</InputLabel>
        </BodyLabel>

        <BodyMeta>
          <Input id="website" placeholder="Website" />
        </BodyMeta>
      </BodyItem>
      <BodyItem>
        <BodyLabel>
          <InputLabel htmlFor="bio">Bio</InputLabel>
        </BodyLabel>

        <BodyMeta>
          <InputArea id="bio" rows="3" />
          <DescHeader>Personal Information</DescHeader>
          <InputDesc>
            Provide your personal information, even if the account is used for a
            business, a pet or something else. This won't be a part of your
            public profile.
          </InputDesc>
        </BodyMeta>
      </BodyItem>
      <BodyItem>
        <BodyLabel>
          <InputLabel htmlFor="email">Email</InputLabel>
        </BodyLabel>

        <BodyMeta>
          <Input id="email" placeholder="Email" />
        </BodyMeta>
      </BodyItem>
      <BodyItem>
        <BodyLabel>
          <InputLabel htmlFor="phone">Phone Number</InputLabel>
        </BodyLabel>

        <BodyMeta>
          <Input id="phone" placeholder="Phone Number" />
        </BodyMeta>
      </BodyItem>
      <BodyItem>
        <BodyLabel></BodyLabel>

        <BodyMeta>
          <Button>Submit</Button>
        </BodyMeta>
      </BodyItem>
    </AuthForm>
  );
}

export default UpdateForm;
