import styled from "styled-components";

export const ButtonDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  button {
    cursor: pointer;
    font-size: 20px;
    height: 56px;
    border-radius: 10px;
    border: 0;
    color: #000;
    width: 112px;
    font-weight: 500;
    outline: none;

    transition: background-color 0.2s;
  }
`;
export const Header = styled.header`
  font-family: arial;
  font-size: 28px;
  font-weight: bold;
`;

export const Div = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 13px;
`;
export const Text = styled.p`
  font-family: Arial;
  font-size: 25px;

  margin: 20px;
`;
