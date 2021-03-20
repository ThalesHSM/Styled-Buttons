import styled, { css } from "styled-components";
import { shade } from "polished";

interface IButton {
  ButtonShadowProp?: boolean;
  ButtonColorProp?: "purple" | "green" | "orange";
  ButtonSizeProp?: "sm" | "md" | "lg";
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
  min-width: 400px;
  margin: 13px;
`;
export const Text = styled.p`
  font-family: Arial;
  font-size: 25px;

  margin: 20px;
`;

export const Button = styled.button<IButton>`
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

  ${(props) =>
    props.ButtonShadowProp === true &&
    css`
      box-shadow: 10px 10px 8px #888888;
    `}

  ${(props) =>
    props.ButtonSizeProp === "sm" &&
    css`
      transform: scale(0.8);
    `}
  ${(props) =>
    props.ButtonSizeProp === "lg" &&
    css`
      transform: scale(1.3);
    `}

    ${(props) =>
    props.ButtonColorProp === "green"
      ? css`
          background-color: #54c481;
          &:hover {
            background: ${shade(0.2, "#54c481")};
          }
        `
      : props.ButtonColorProp === "purple"
      ? css`
          background-color: #c34ac7;
          &:hover {
            background: ${shade(0.2, "#c34ac7")};
          }
        `
      : props.ButtonColorProp === "orange" &&
        css`
          background-color: #f54a16;
          &:hover {
            background: ${shade(0.2, "#f54a16")};
          }
        `}
`;
