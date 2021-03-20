import { ButtonDiv, Text, Button, Div, Header } from "./StyledButtons";

import {
  FiGithub,
  FiDroplet,
  FiMoon,
  FiSettings,
  FiPlay,
} from "react-icons/fi";

const Buttons = () => {
  return (
    <ButtonDiv>
      <Header>Buttons</Header>

      <Div>
        <Text>Simple Button</Text>
        <Button></Button>
      </Div>

      <Div>
        <Text>Button Shadow</Text>
        <Button ButtonShadowProp>Default</Button>
      </Div>

      <Div>
        <Text>Button Icon</Text>
        <Button>
          <FiGithub />
          Default
        </Button>

        <Button>
          <FiDroplet />
          Default
        </Button>

        <Button>
          <FiMoon />
          Default
        </Button>

        <Button>
          <FiSettings />
          Default
        </Button>

        <Button>
          <FiPlay />
          Default
        </Button>
      </Div>

      <Div>
        <Text>Disabled Button</Text>
        <Button disabled>Disabled</Button>
      </Div>

      <Div>
        <Text>Button Size</Text>
        <Button ButtonSizeProp="sm">Small</Button>
        <Button ButtonSizeProp="lg">Large</Button>
      </Div>

      <Div>
        <Text>Button Color</Text>
        <Button ButtonColorProp="green">Green</Button>
        <Button ButtonColorProp="purple">Purple</Button>
        <Button ButtonColorProp="orange">Orange</Button>
      </Div>
    </ButtonDiv>
  );
};

export default Buttons;
