import styled, { css } from "styled-components";
import { shade } from "polished";

interface IButtonShadow {
  isActive: boolean;
}

interface IButtonColor {
  setColor: boolean;
}

interface IButtonSize {
  setSize: boolean;
}

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

    & + button {
      margin-top: 20px;
    }

    transition: background-color 0.2s;
  }
`;

export const Text = styled.text`
  font-family: Arial;
  font-size: 25px;

  margin: 20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  background-color: #fa0c38;
  svg {
    color: #000;
    width: 30px;
    height: 25px;
  }

  &:hover {
    background: ${shade(0.2, "#e62246")};
  }
`;

export const ButtonShadow = styled.button<IButtonShadow>`
  margin-right: 50px;
  background-color: inherit;
  ${(props) =>
    props.isActive === true &&
    css`
      box-shadow: 10px 10px #cfd1cd;
    `}

  &:hover {
    background: ${shade(0.2, "#cfd1cd")};
  }
`;

export const ButtonSize = styled.button<IButtonSize>`
  margin-right: 50px;
  transform: scale(0.8);

  ${(props) =>
    props.setSize === true &&
    css`
      transform: scale(1.5);
    `};
`;

export const ButtonColor = styled.button<IButtonColor>`
  background-color: #a54ff0;
  margin-right: 50px;

  ${(props) =>
    props.setColor === true &&
    css`
      background-color: #34eba1;
    `};
`;

export const Div = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  min-width: 400px;
  margin: 10px 0;
`;

export const Header = styled.header`
  font-family: arial;
  font-size: 28px;
  font-weight: bold;
`;
