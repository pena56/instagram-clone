import AltHeader from '../components/AltHeader';
import ResetPasswordForm from '../components/ResetPasswordForm';
import Footer from '../components/Footer';

import { AuthPageContainer } from '../styles/authForm';

function ResetPassword() {
  return (
    <AuthPageContainer>
      {/* Header */}
      <AltHeader />
      {/* ResetForm */}
      <ResetPasswordForm />
      {/* Back to Login */}
      {/* footer */}
      <Footer />
    </AuthPageContainer>
  );
}

export default ResetPassword;
