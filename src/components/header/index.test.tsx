// header.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import Header from ".";
import test, { describe } from "node:test";

describe("Header Component", () => {
  test("renders without crashing", () => {
    render(<Header />);
  });

  // Add more tests as needed
});