import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileHeader from ".";

describe("MobileHeader Component", () => {
  it("renders MobileHeader component correctly", () => {
    const { getByTestId } = render(<MobileHeader />);
    expect(getByTestId("header-content")).toBeInTheDocument();
  });
});

