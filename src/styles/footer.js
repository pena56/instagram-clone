import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 15px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 40px;
  margin: 15px 0;

  @media (max-width: 450px) {
    padding: 10px 20px;
    background: inherit;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const FooterLink = styled.p`
  width: fit-content;
  text-transform: capitalize;
  color: #8e8e8e;
  margin: 3px 10px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;
