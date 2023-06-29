import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";
import { buildProduct } from "models/builders/products";

test('renders Product Detail Page', () => {
  render(<ProductDetail product={buildProduct()} />);
  expect(screen.getByText("Handcrafted Frozen Chair", { selector: "h1" })).toBeInTheDocument();
});
