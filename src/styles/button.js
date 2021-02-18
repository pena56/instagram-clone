import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: ${(props) => (props.buttonColor ? props.buttonColor : 'gray')};
  color: white;
  width: 100%;
  padding: 8px 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  outline: none;
  margin: 10px 0;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

export const ButtonText = styled.p`
  width: fit-content;
  font-size: 0.8rem;
  font-weight: 700;
`;
