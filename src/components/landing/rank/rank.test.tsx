import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Rank from ".";

describe("Rank Component", () => {
  it("renders the component", () => {
    render(<Rank />);
    expect(screen.getByText("the battle for rank #1")).toBeInTheDocument();
  });

  it("changes the active tab on button click", () => {
    render(<Rank />);

    const individualTab = screen.getByText("individual");
    userEvent.click(individualTab);

  });

  it("renders winner cards with correct information", () => {
    render(<Rank />);

    // Add assertions for the initial state of winner cards
    expect(screen.getByText("DBZS")).toBeInTheDocument();
    expect(screen.getByText("Avoid")).toBeInTheDocument();
    expect(screen.getByText("Rakuzan")).toBeInTheDocument();

  });

});
