import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1.5rem;
  align-items: center;
`;
export const NewTransactionButton = styled.button`
  border-radius: 6px;
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  padding: 0 1.25rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
    transition: background-color 0.3s;
  }
`;
