import React from "react";
import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  tags: ["autodocs"],
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça a sua Matricula agora mesmo</h6>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aperiam corporis modi odit ducimus iusto cupiditate!
        Reiciendis veritatis, nisi, officiis assumenda reprehenderit asperiores expedita, consectetur incidunt molestiae
        delectus velit cupiditate!</p>
      <CalloutActions>
        <Button color="primary">Matricula-se</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);
