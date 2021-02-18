import SignupForm from '../components/SignupForm';
import AltAuth from '../components/AltAuth';
import GetApp from '../components/GetApp';
import Footer from '../components/Footer';

import { AuthPageContainer } from '../styles/authForm';

function SignUp() {
  return (
    <AuthPageContainer>
      <SignupForm />

      <AltAuth authLink="/accounts/signin" authText="Log in" />

      <GetApp />

      <Footer />
    </AuthPageContainer>
  );
}

export default SignUp;
