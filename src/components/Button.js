// styles
import { ButtonContainer, ButtonText } from '../styles/button';

function Button({ text, color, icon, disabled }) {
  return (
    <ButtonContainer disabled={disabled} buttonColor={color}>
      {icon && icon}
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;
