import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import {
  AuthContainer,
  LogoContainer,
  Logo,
  Divider,
  Text,
  Line,
  SocialLoginContainer,
  SocialLoginText,
  ForgotPassword,
} from '../styles/authForm';
import logo from '../images/logo.svg';

import InputField from './InputField';
import Button from './Button';

function SignIn() {
  return (
    <AuthContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>

      <InputField
        inputPlaceholder="Phone number, username, or email"
        inputType="text"
        labelText="Phone number, username, or email"
      />

      <InputField
        inputPlaceholder="Password"
        inputType="password"
        labelText="Password"
      />

      <Button disabled={true} color="#0095F6" text="Log In" />

      <Divider>
        <Line />
        <Text>OR</Text>
        <Line />
      </Divider>

      <SocialLoginContainer>
        <AiFillFacebook fontSize="1.3rem" color="#385185" />
        <SocialLoginText>Log in with Facebook</SocialLoginText>
      </SocialLoginContainer>

      <ForgotPassword>
        <Link to="/accounts/password/reset">Forgot password?</Link>
      </ForgotPassword>
    </AuthContainer>
  );
}

export default SignIn;
