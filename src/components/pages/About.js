import React from "react";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";
import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/Hero.jpg";
import AboutImage from "draws/About";
import InstImage1 from "assets/instructors/inst-1.jpg";
import InstImage2 from "assets/instructors/inst-2.jpg";
import InstImage3 from "assets/instructors/inst-3.jpg";
import InstImage4 from "assets/instructors/inst-4.jpg";
import InstImage5 from "assets/instructors/inst-5.jpg";
import InstImage6 from "assets/instructors/inst-6.jpg";

const instructors = [
  { id: 1, name: "Jorge", avatar: InstImage1 },
  { id: 2, name: "Steven", avatar: InstImage2 },
  { id: 3, name: "Jennifer", avatar: InstImage3 },
  { id: 4, name: "Melina", avatar: InstImage4 },
  { id: 5, name: "John", avatar: InstImage5 },
  { id: 6, name: "Leila", avatar: InstImage6 },
];

const ImageContainer = styled.div`
  svg{
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${props => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Auto Escola Almeida
        </h1>
      </Heading>
      <BreadCrumb items={[{ label: "Início", link: "/" }, { label: "Sobre" }]} />
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia optio repellendus reiciendis dignissimos, sapiente iste exercitationem ipsam omnis. Atque quidem in animi incidunt inventore reprehenderit voluptas porro consequatur alias?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti assumenda fugit voluptatum! Reiciendis vel dolore nulla, iste perferendis deserunt, inventore quisquam expedita eius fugit architecto modi, saepe minus natus repellat!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore, animi rem saepe praesentium quas soluta necessitatibus molestiae! Deserunt fuga hic officia vel deleniti quasi, exercitationem dolor asperiores. Quis, culpa.</p>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
          </ul>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla dolor repudiandae sit facilis magni ipsa enim tempora assumenda mollitia itaque corporis deleniti, illo qui officiis rem omnis reiciendis dolorum.</p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet eaque ducimus expedita distinctio voluptatum consequatur et consequuntur pariatur iure qui. Velit atque amet eum minus fugiat voluptatem quaerat. Doloribus.</p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>Sequi ab illum ducimus aspernatur, eveniet atque quo quas dignissimos eius beatae deserunt natus delectus molestias necessitatibus sint quod corrupti eum. Possimus facilis et quos nihil, ducimus labore delectus inventore!</p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
      <Grid sm={2} md={3} lg={4}>
        {instructors.map((instructor) => (
          <Card key={instructor.id}>
            <CardMedia image={instructor.avatar}>
              <CardMediaDescription>
                <h5>
                  {instructor.name}
                </h5>
              </CardMediaDescription>
            </CardMedia>
          </Card>
        ))}
      </Grid>
    </Section>
    <Footer />
  </>
);

export default About;
