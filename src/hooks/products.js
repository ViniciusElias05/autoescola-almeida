
import ImageServ1 from "assets/ImageServ1.jpg";
import ImageServ2 from "assets/ImageServ2.jpg";
import ImageServ3 from "assets/ImageServ3.jpg";
import ImageServ4 from "assets/ImageServ4.jpg";
import ImageServ5 from "assets/ImageServ5.jpg";


const products = [
  {
    id: 1,
    title: "Habilitação Carro e Moto",
    slang: "primeira-habilitacao-carro-e-moto",
    summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ImageServ1
  },
  {
    id: 2,
    title: "Habilitação de Carro",
    slang: "habilitacao-de-carro",
    summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ImageServ2
  },
  {
    id: 3,
    title: "Habilitação de Moto",
    slang: "habilitacao-de-moto",
    summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ImageServ3
  },
  {
    id: 4,
    title: "Mudança para Categoria de Caminhão",
    slang: "mudanca-para-categoria-de-caminhao",
    summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ImageServ4
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    slang: "aulas-avulsas",
    summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ImageServ5
  },
]

export const useProducts = () => {
  return products;
}

export const useProduct = ({ slang }) => {
  return products.find(p => p.slang === slang);
}
