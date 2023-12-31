import React from 'react';
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";


export default {
  title: "Components/Atoms/Button",
  tags: ["autodocs"],
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > *{
    margin-right: 8px;
  }
`

export const ButtonsWrapper = (props) => (
  <div>
    <p>Enabled: </p>
    <Toolbar>
      <Button {...props} {...events}>Default</Button>
      <Button color='primary' {...props} {...events}>Primary</Button>
      <Button color='danger' {...props} {...events}>Danger</Button>
    </Toolbar>
    <p>As a link:</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>Default</Button>
      <Button color='primary' as="a" href="#" {...props} {...events}>Primary</Button>
      <Button color='danger' as="a" href="#" {...props} {...events}>Danger</Button>
    </Toolbar>
    <p>Disabled: </p>
    <Toolbar>
      <Button disabled {...events} {...props} >Default</Button>
      <Button color='primary' disabled {...events} {...props}>Primary</Button>
      <Button color='danger' disabled {...events} {...props}>Danger</Button>
    </Toolbar>
  </div>


);

export const Usage = () => <ButtonsWrapper />;

export const Outlined = () => <ButtonsWrapper variant="outlined" />;

export const Link = () => <ButtonsWrapper variant="link" />;

