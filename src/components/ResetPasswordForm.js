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
      <LockIconContainer>
        <VscLock size="3.5rem" />
      </LockIconContainer>
      <ResetText>Trouble Logging In?</ResetText>
      <ResetDesc>
        Enter your email, phone, or username and we'll send you a link to get
        back into your account.
      </ResetDesc>
      <InputField
        inputType="text"
        inputPlaceholder="Email, Phone, or Username"
        labelText="Email, Phone, or Username"
      />
      <Button text="Send Login Link" color="#0095F6" />

      <Divider>
        <Line />
        <Text>OR</Text>
        <Line />
      </Divider>

      <SignUpLink>
        <Link to="/accounts/emailsignup">Create New Account</Link>
      </SignUpLink>

      <LoginButton>
        <LoginLink>
          <Link to="/accounts/signin">Back To Login</Link>
        </LoginLink>
      </LoginButton>
    </AuthResetContainer>
  );
}

export default ResetPasswordForm;
