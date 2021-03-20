import React from "react";
import { Div, Text, Header, ButtonDiv } from "./StyledApp";
import Button from "./components/Button";

import {
  FiGithub,
  FiDroplet,
  FiMoon,
  FiSettings,
  FiPlay,
} from "react-icons/fi";

const App: React.FC = () => (
  <ButtonDiv>
    <Header>Buttons</Header>

    <Div>
      <Text>Simple Button</Text>
      <Button>Default</Button>
    </Div>

    <Div>
      <Text>Button Shadow</Text>
      <Button shouldShowShadow>Default</Button>
    </Div>

    <Div>
      <Text>Button Icon</Text>
      <Button icon={<FiGithub />}>Default</Button>

      <Button icon={<FiDroplet />}>Default</Button>

      <Button icon={<FiMoon />}>Default</Button>

      <Button icon={<FiSettings />}>Default</Button>

      <Button icon={<FiPlay />}>Default</Button>
    </Div>

    <Div>
      <Text>Disabled Button</Text>
      <Button disabled>Disabled</Button>
    </Div>

    <Div>
      <Text>Button Size</Text>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </Div>

    <Div>
      <Text>Button Color</Text>
      <Button color="green">Green</Button>
      <Button color="purple">Purple</Button>
      <Button color="orange">Orange</Button>
    </Div>
  </ButtonDiv>
);

export default App;
