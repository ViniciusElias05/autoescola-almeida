import React from 'react';
import { render } from "test-utils";

import About from "./About";

test("scrolls to top in first render", () => {
  render(<About />);
  expect(window.scrollTo).toBeCalledTimes(1);
});
