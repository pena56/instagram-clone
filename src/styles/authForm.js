import styled from 'styled-components';
import { ParentContainer } from './globalStyle';

export const AuthContainer = styled(ParentContainer)`
  padding: 0 34px;
  align-items: center;
  margin-top: 34px;
  width: 350px;
  background: #ffffff;
  align-self: center;
  border: thin solid #dbdbdb;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 450px) {
    border: none;
    background: inherit;
  }
`;

export const AuthResetContainer = styled(AuthContainer)`
  margin-top: 108px;
  width: 400px;
  position: relative;
`;

export const AuthPageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LogoContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin-top: 34px;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;

export const Divider = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  margin: 10px 0;
`;

export const Text = styled.p`
  color: #8e8e8e;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: thin solid #dbdbdb;
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5px;
  margin: 15px;
`;

export const SocialLoginText = styled.p`
  font-size: 0.9rem;
  color: #385185;
  font-weight: normal;
  cursor: pointer;
`;

export const ForgotPassword = styled.p`
  font-size: 0.8rem;
  color: #00376b;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const DisplayText = styled.p`
  color: #8e8e8e;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const TermsText = styled(DisplayText)`
  font-size: 0.75rem;
  margin-bottom: 40px;
  margin-top: 10px;
`;

export const LockIconContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2.5px solid #000000;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const ResetText = styled.p`
  color: #767676;
  font-size: 1rem;
  text-align: center;
  font-weight: 700;
`;

export const ResetDesc = styled(ResetText)`
  color: #8e8e8e;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const SignUpLink = styled(ResetText)`
  font-size: 0.9rem;
  margin-top: 10px;
  margin-bottom: 100px;
`;

export const LoginLink = styled(SignUpLink)`
  margin: 0;
`;

export const LoginButton = styled.div`
  width: 100%;
  background: #fafafa;
  border-top: thin solid #dbdbdb;
  padding: 13px 0;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const AuthError = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: #ed4956;
  margin: 10px 0;
`;

export const AuthSuccess = styled(AuthError)`
  color: #2ed339;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &.home {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
`;
