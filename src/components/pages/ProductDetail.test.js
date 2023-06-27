import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";

test('renders Product Detail Page', () => {
  render(<ProductDetail />);
  expect(screen.getByText("Nome do Serviço")).toBeInTheDocument();
});
