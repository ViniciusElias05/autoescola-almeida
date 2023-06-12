import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgHighwayImage from "../stories/assets/traffic-gefc7236a6_1280.jpg";
import BgCarImage from "../stories/assets/nabeel-syed-Jk3-Uhdwjcs-unsplash.jpg";
import Heading from "./Heading";

export default {
  title: "Components/Hero",
  tags: ["autodocs"],
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <h1>{text("Title", "Ganhe a sua liberdade para ir e vir")}</h1>
    <p> {text("Text", "A auto escola lider em aprovação.")}</p>
  </Hero>
);

export const WithList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br />
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
  </Hero>
);