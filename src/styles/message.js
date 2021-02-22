import styled from 'styled-components';

export const MessageContainer = styled.div`
  width: 100vw;
  padding: 20px;
  background: #000000;
  position: fixed;
  box-sizing: border-box;
  overflow-x: hidden;
  top: 580px;
  left: 0;
  z-index: 99;
  display: ${(props) => (props.status ? 'block' : 'none')};
  transition: all 0.3s ease-in-out;
`;

export const Message = styled.p`
  color: #ffffff;
  font-size: 0.9rem;
`;
