import { VscLock } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import {
  AuthResetContainer,
  LockIconContainer,
  ResetText,
  ResetDesc,
  Divider,
  Line,
  Text,
  SignUpLink,
  LoginButton,
  LoginLink,
} from '../styles/authForm';

import InputField from './InputField';
import Button from './Button';

function ResetPasswordForm() {
  return (
    <AuthResetContainer>
      {/* lock icon */}
      <LockIconContainer>
        <VscLock size="3.5rem" />
      </LockIconContainer>
      {/* Trouble logging in text */}
      <ResetText>Trouble Logging In?</ResetText>
      {/* Enter your email, phone, or username and we'll send you a link to get back into your account.
 text */}
      <ResetDesc>
        Enter your email, phone, or username and we'll send you a link to get
        back into your account.
      </ResetDesc>
      {/* Input Field */}
      <InputField
        inputType="text"
        inputPlaceholder="Email, Phone, or Username"
        labelText="Email, Phone, or Username"
      />
      {/* send login link button */}
      <Button disabled={true} text="Send Login Link" color="#0095F6" />
      {/* divider */}
      <Divider>
        <Line />
        <Text>OR</Text>
        <Line />
      </Divider>
      {/* create new account link */}
      <SignUpLink>
        <Link to="/accounts/emailsignup">Create New Account</Link>
      </SignUpLink>

      <LoginButton>
        <LoginLink>
          <Link to="/">Back To Login</Link>
        </LoginLink>
      </LoginButton>
    </AuthResetContainer>
  );
}

export default ResetPasswordForm;
