import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';

// styles
import GlobalStyle, { ParentContainer } from './styles/globalStyle';

function App() {
  return (
    <ParentContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/accounts/emailsignup" component={SignUp} />
          <Route path="/accounts/password/reset" component={ResetPassword} />
          <Route path="/:username" component={Profile} />
        </Switch>
      </BrowserRouter>
    </ParentContainer>
  );
}

export default App;
