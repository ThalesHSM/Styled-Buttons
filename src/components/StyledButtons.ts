import styled, { css } from "styled-components";
import { shade } from "polished";

interface IButton {
  children: any;
  icon?: any;
  disabled?: boolean;
  size?: "sm" | "lg";
  shouldShowShadow?: boolean;
  color?: "purple" | "green" | "orange";
}

export const StyledButton = styled.button<IButton>`
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
    props.shouldShowShadow === true &&
    css`
      box-shadow: 10px 10px 8px #888888;
    `}

  ${(props) =>
    props.disabled === true &&
    css`
      opacity: 0.7;
      background-color: #ab3739;
      pointer-events: none;
    `}

  ${(props) =>
    props.size === "sm"
      ? css`
          transform: scale(0.8);
        `
      : props.size === "lg" &&
        css`
          transform: scale(1.3);
        `}



    ${(props) =>
    props.color === "green"
      ? css`
          background-color: #54c481;
          &:hover {
            background: ${shade(0.2, "#54c481")};
          }
        `
      : props.color === "purple"
      ? css`
          background-color: #c34ac7;
          &:hover {
            background: ${shade(0.2, "#c34ac7")};
          }
        `
      : props.color === "orange" &&
        css`
          background-color: #f54a16;
          &:hover {
            background: ${shade(0.2, "#f54a16")};
          }
        `}
`;
