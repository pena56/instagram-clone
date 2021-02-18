// styles
import { InputFieldContainer, InputLabel, Field } from '../styles/inputField';

function InputField({
  inputType,
  inputPlaceholder,
  labelText,
  inputRequired,
  inputRef,
}) {
  return (
    <InputFieldContainer>
      <Field
        required={inputRequired}
        type={inputType}
        placeholder={inputPlaceholder}
        ref={inputRef}
      />
      <InputLabel>{labelText}</InputLabel>
    </InputFieldContainer>
  );
}

export default InputField;
