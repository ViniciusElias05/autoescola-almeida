import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import { useScrollToTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "components/atoms/Callout";
import Button from "components/atoms/Button";
import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/Hero.jpg";
import SpeedImage from "draws/Speed";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg{
    margin-right: 8px;
    vertical-align: middle;
  }
`;


const ProductDetail = () => {
  useScrollToTop();
  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>
            Nome do Serviço
          </h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Início", link: "/" },
            { label: "Serviços" },
            { label: "Nome do Servico" },
          ]}
        />
      </Hero>
      <Section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius repellendus
          enim eligendi cupiditate non et tenetur, dolorum, suscipit, aliquam aspernatur iste
          consequuntur asperiores beatae laborum magni voluptas necessitatibus sint?
        </p>
        <p>
          Harum accusamus numquam assumenda temporibus vero perspiciatis voluptatibus dicta modi
          adipisci! Quisquam id eius ipsum, dignissimos eligendi exercitationem quia distinctio
          aliquam asperiores. Fuga eligendi provident est harum aut sint facilis?
        </p>
        <p>
          Nulla in omnis deserunt consequatur excepturi asperiores, ullam minima minus veritatis
          velit aspernatur magni qui distinctio optio saepe dignissimos iusto quisquam eveniet sit.
          Autem tempora qui magni voluptate accusantium quibusdam?
        </p>
        <h5>Documentos Necessários: </h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Certidão de Nascimento ou Casamento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residência
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
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
      </Section>
      <Footer />
    </>
  );
};

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
