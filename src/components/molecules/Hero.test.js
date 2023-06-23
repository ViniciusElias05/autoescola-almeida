import React from "react";
import { render, screen } from "test-utils";
import Hero from "./Hero";

test("renders Hero with children", () => {
  render(
    <Hero>
      <p>Vinicius Elias</p>
    </Hero>
  );

  expect(screen.getByText("Vinicius Elias")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";
  render(<Hero image={image} />);

  expect(screen.getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
