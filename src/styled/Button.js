import styled from "styled-components";

export const Button = styled.button`
  width: 220px;
  background: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: background ease-in 0.4s;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
    transition: background ease-in 0.3s;
  }
`;

export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background: black;
    color: white;
    border: 1px solid transparent;
  }
`;
