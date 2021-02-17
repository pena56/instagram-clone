import { AiFillFacebook } from 'react-icons/ai';

import {
  AuthContainer,
  LogoContainer,
  Logo,
  Divider,
  Text,
  Line,
  DisplayText,
  TermsText,
} from '../styles/authForm';
import logo from '../images/logo.svg';

import InputField from './InputField';
import Button from './Button';

function SignUp() {
  return (
    <AuthContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>

      <DisplayText>
        Sign up to see photos and videos from your friends
      </DisplayText>

      <Button
        color="#0095F6"
        icon={<AiFillFacebook fontSize="1.1rem" color="#ffffff" />}
        text="Log in with Facebook"
      />

      <Divider>
        <Line />
        <Text>OR</Text>
        <Line />
      </Divider>

      <InputField
        inputPlaceholder="Mobile Number or Email"
        inputType="email"
        labelText="Mobile Number or Email"
      />

      <InputField
        inputPlaceholder="Full Name"
        inputType="text"
        labelText="Full Name"
      />

      <InputField
        inputPlaceholder="Username"
        inputType="text"
        labelText="Username"
      />

      <InputField
        inputPlaceholder="Password"
        inputType="password"
        labelText="Password"
      />

      <Button disabled={true} color="#0095F6" text="Sign up" />

      <TermsText>
        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
      </TermsText>
    </AuthContainer>
  );
}

export default SignUp;
