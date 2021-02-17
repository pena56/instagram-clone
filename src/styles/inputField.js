import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  width: 100%;
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 5px;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 10%;
  left: 10px;
  transition: all 0.3s ease-in-out;
  color: #9b9b9b;
  font-size: 0.7rem;
  font-weight: lighter;
`;

export const Field = styled.input`
  border-radius: 3px;
  border: thin solid #dbdbdb;
  outline: none;
  color: #000;
  font-size: 0.8rem;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4%;
  box-sizing: border-box;
  background: #e8f0fe;
  font-weight: lighter;
  transition: border-color 0.3s ease-in;

  &::-webkit-input-placeholder {
    color: transparent;
  }

  &:placeholder-shown {
    padding-top: 0;
    background: #fafafa;
  }

  &:placeholder-shown ~ ${InputFieldContainer} {
    background: #fafafa;
  }

  &:placeholder-shown ~ ${InputLabel} {
    top: 30%;
    font-size: 0.8rem;
  }

  &:focus {
    border: thin solid #8e8e8e;
  }
`;
