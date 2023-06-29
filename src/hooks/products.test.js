import { render, screen } from "test-utils";

import { useProduct, useProducts } from "./products";

describe("useProduct()", () => {
  test('returns a product', () => {
    const slang = "primeira-habilitacao-carro-e-moto";

    const product = useProduct({ slang });

    expect(product.title).toEqual("Habilitação Carro e Moto");
  });

  test("returns undefined if product was not found", () => {
    const slang = "invalid-slang";

    const product = useProduct({ slang });

    expect(product).toBeUndefined();

  })

});

describe("UseProducts()", () => {
  test("returns a product list", () => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  })
})
