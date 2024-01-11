import React from "react";
import { render } from "@testing-library/react";
import HeroBanner from ".";

describe("HeroBanner Component", () => {
  it("renders correctly", () => {
    const { container } = render(<HeroBanner />);
    expect(container).toMatchSnapshot();
  });

  // You can add more test cases as needed
});
