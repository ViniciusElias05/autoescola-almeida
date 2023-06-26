import React from "react";
import Card, { CardBody, CardMedia, CardMediaDescription } from "./Card";
import Section from "components/molecules/Section";

import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

import PlaceholderImage from "stories/assets/draft.jpg";

export default {
  title: "Components/Atoms/Card",
  tags: ["autodocs"],
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDescription },
};

export const Usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, deserunt, pariatur error quia minus.
        </p>
        <div>
          <Button color="primary" variant="link">Saiba mais</Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const WithMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, deserunt, pariatur error quia minus.
        </p>
        <div>
          <Button color="primary" variant="link">Saiba mais</Button>
        </div>
      </CardBody>
    </Card>
  </Section>

);

export const onlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage}>
        <CardMediaDescription>
          <h5>
            Descrição da imagem
          </h5>
        </CardMediaDescription>
      </CardMedia>
    </Card>
  </Section>

);
