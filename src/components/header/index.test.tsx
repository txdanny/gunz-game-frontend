import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });

  it("displays the logo", () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText("Logo")).toBeInTheDocument();
  });
});
