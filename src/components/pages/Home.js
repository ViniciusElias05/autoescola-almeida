import React from "react";
// import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from 'components/atoms/Grid';
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/Hero.jpg";
import AboutVideo from "assets/AboutVideo.mp4";
import ImageServ1 from "assets/ImageServ1.jpg";
import ImageServ2 from "assets/ImageServ2.jpg";
import ImageServ3 from "assets/ImageServ3.jpg";
import ImageServ4 from "assets/ImageServ4.jpg";
import ImageServ5 from "assets/ImageServ5.jpg";

const products = [
  { id: 1, title: "Habilitação Carro e Moto", summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: ImageServ1 },
  { id: 2, title: "Habilitação de Carro", summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: ImageServ2 },
  { id: 3, title: "Habilitação de Moto", summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: ImageServ3 },
  { id: 4, title: "Mudança para Categoria de Caminhão", summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: ImageServ4 },
  { id: 5, title: "Aulas Avulsas", summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: ImageServ5 },
]

const Home = () => (
  <>
    <Hero image={HeroImage}>

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
      <Button color="primary" variant="outlined">Matricule-se agora</Button>

    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Almeida Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis error sed possimus. Ab, ipsam! Praesentium suscipit dignissimos quisquam esse assumenda. A nostrum illum quidem veniam repudiandae suscipit aliquid laboriosam? Soluta!
          </p>
          <div>
            <Button as={Link} to="/sobre" color="primary">Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay playsInline loop muted />
        </div>
      </Grid>


    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo a minha CNH?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur tempora eius at saepe labore, unde culpa, et consectetur facere nobis eveniet. Quo nostrum esse distinctio illum reiciendis, consequatur odit.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur tempora eius at saepe labore, unde culpa, et consectetur facere nobis eveniet. Quo nostrum esse distinctio illum reiciendis, consequatur odit.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur tempora eius at saepe labore, unde culpa, et consectetur facere nobis eveniet. Quo nostrum esse distinctio illum reiciendis, consequatur odit.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;

