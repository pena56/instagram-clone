import ReactLoading from 'react-loading';

// styles
import { ButtonContainer, ButtonText } from '../styles/button';

import { LoaderContainer } from '../styles/authForm';

function Button({ text, color, icon, disabled, type, callback }) {
  return (
    <ButtonContainer
      onClick={callback}
      type={type}
      disabled={disabled}
      buttonColor={color}
    >
      {icon && icon}
      {disabled && (
        <LoaderContainer>
          <ReactLoading
            width="0.9rem"
            height="0.9rem"
            color="#000000"
            type="spokes"
          />
        </LoaderContainer>
      )}
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;
