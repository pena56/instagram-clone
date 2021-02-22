import { LoaderContainer } from '../styles/globalStyle';
import { SiInstagram } from 'react-icons/si';

function LoaderScreen() {
  return (
    <LoaderContainer>
      <SiInstagram color="#dbdbdb" fontSize="4rem" />
    </LoaderContainer>
  );
}

export default LoaderScreen;
