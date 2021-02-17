// styles
import { InputFieldContainer, InputLabel, Field } from '../styles/inputField';

function InputField({ inputType, inputPlaceholder, labelText }) {
  return (
    <InputFieldContainer>
      <Field type={inputType} placeholder={inputPlaceholder} />
      <InputLabel>{labelText}</InputLabel>
    </InputFieldContainer>
  );
}

export default InputField;
