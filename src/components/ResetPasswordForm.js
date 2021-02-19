import { useRef, useState } from 'react';

import { VscLock } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

import {
  AuthResetContainer,
  AuthForm,
  AuthError,
  AuthSuccess,
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
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { passwordReset } = useAuth();

  const emailRef = useRef();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    const email = emailRef.current.value;
    passwordReset(email)
      .then((msg) => {
        setMessage(msg);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

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
      <AuthForm onSubmit={(e) => handlePasswordReset(e)}>
        <InputField
          inputType="text"
          inputPlaceholder="Email, Phone, or Username"
          labelText="Email, Phone, or Username"
          inputRef={emailRef}
          inputRequired={true}
        />
        <Button disabled={loading} text="Send Login Link" color="#0095F6" />

        {error && <AuthError>{error}</AuthError>}
        {message && <AuthSuccess>{message}</AuthSuccess>}
      </AuthForm>
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
