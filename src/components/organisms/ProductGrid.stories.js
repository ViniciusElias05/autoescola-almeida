import React from "react";

import ProductGrid from "./ProductGrid";
import { buildProductList } from "models/builders/products";


export default {
  title: "Components/Organisms/ProductGrid",
  tags: ["autodocs"],
  component: ProductGrid
};

export const Usage = () => (
  <ProductGrid
    products={buildProductList(6)}
  />
);
