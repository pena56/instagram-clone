import {
  GetAppContainer,
  GetAppText,
  StoreIcons,
  Icon,
} from '../styles/getApp';

import appStore from '../images/appStore.svg';
import playStore from '../images/playStore.svg';

function GetApp() {
  return (
    <GetAppContainer>
      <GetAppText>Get the app</GetAppText>
      <StoreIcons>
        <Icon src={appStore} alt="app store" />
        <Icon src={playStore} alt="play store" />
      </StoreIcons>
    </GetAppContainer>
  );
}

export default GetApp;
