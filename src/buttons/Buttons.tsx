import React, { useState } from "react";

import {
  ButtonDiv,
  Text,
  Button,
  ButtonShadow,
  ButtonSize,
  ButtonColor,
  Div,
  Header,
} from "./StyledButtons";

import { FiGithub } from "react-icons/fi";

const Buttons: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState(false);
  const [size, setSize] = useState(false);
  const [border, setBorder] = useState(false);
  const [icon, setIcon] = useState(false);

  function handleShadowButton() {
    setIsActive(!isActive);
  }

  function handleChangeColor() {
    setColor(!color);
  }

  function handleChangeSize() {
    setSize(!size);
  }

  function handleBorderChange() {
    setBorder(!border);
  }

  function handleIconChange() {
    setIcon(!icon);
  }

  return (
    <ButtonDiv>
      <Header>Buttons</Header>

      <Div>
        <Text>Simple Button</Text>
        <Button onClick={handleBorderChange}>Default</Button>
      </Div>

      <Div>
        <Text>Button Shadow</Text>
        <ButtonShadow onClick={handleShadowButton} isActive={isActive}>
          Default
        </ButtonShadow>
      </Div>

      <Div>
        <Text>Button Icon</Text>
        {icon === true ? (
          <Button onClick={handleIconChange}>
            Default
            <FiGithub />
          </Button>
        ) : (
          <Button onClick={handleIconChange}>
            <FiGithub />
            Default
          </Button>
        )}
      </Div>

      <Div>
        <Text>Disabled Button</Text>
        <Button onClick={handleBorderChange} disabled={true}>
          Disabled
        </Button>
      </Div>

      <Div>
        <Text>Button Size</Text>
        <ButtonSize onClick={handleChangeSize} setSize={size}>
          Change size
        </ButtonSize>
      </Div>

      <Div>
        <Text>Button Color</Text>
        <ButtonColor onClick={handleChangeColor} setColor={color}>
          Change color
        </ButtonColor>
      </Div>
    </ButtonDiv>
  );
};

export default Buttons;
