import SigninForm from '../components/SigninForm';
import AltAuth from '../components/AltAuth';
import GetApp from '../components/GetApp';
import Footer from '../components/Footer';

import { AuthPageContainer } from '../styles/authForm';

function SignIn() {
  return (
    <AuthPageContainer>
      <SigninForm />
      <AltAuth authText="Sign up" authLink="/accounts/emailsignup" />
      <GetApp />
      <Footer />
    </AuthPageContainer>
  );
}

export default SignIn;
