import React from "react";
import {FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon} from "react-icons/fa";

import Grid from 'components/atoms/Grid';
import Feature from "./Feature";


export default  {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () =>(
  <Feature icon={<FaCar/>} title="Titulo"> 
    <p>Aprenda a dirigir conosco </p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<FaCar/>} title="Maior e melhor frota"> 
      <p>Maior e melhor frota</p>
    </Feature>
    <Feature icon={<FaKey/>} title="Habilitação mais rápida"> 
      <p>Maior e melhor frota</p>
    </Feature>
    <Feature icon={< FaMapMarkedAlt/>} title="Excelente localização"> 
      <p>Maior e melhor frota</p>
    </Feature>
    <Feature icon={<FaAccessibleIcon/>} title="Acessibilidade"> 
      <p>Maior e melhor frota</p>
    </Feature>
  </Grid>
)
