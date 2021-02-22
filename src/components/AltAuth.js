import { Link } from 'react-router-dom';

import {
  AltAuthContainer,
  AltAuthAction,
  AltAuthText,
} from '../styles/altAuth';

function AltAuth({ authText, authLink }) {
  return (
    <AltAuthContainer>
      <AltAuthText>
        Don't have an account?
        <AltAuthAction>
          {' '}
          <Link to={authLink}>{authText}</Link>{' '}
        </AltAuthAction>
      </AltAuthText>
    </AltAuthContainer>
  );
}

export default AltAuth;
