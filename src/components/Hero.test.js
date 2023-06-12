import React, { Component } from "react";
import { render } from "@testing-library/react";
import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Vinicius Elias</p>
    </Hero>
  );

  expect(getByText("Vinicius Elias")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";
  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
