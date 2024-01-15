import React from "react";
import { render, screen } from "@testing-library/react";
import GunzVip from ".";

describe("GunzVip Component", () => {
  it("renders the component", () => {
    render(<GunzVip />);
    expect(screen.getByText("GunZ V.I.P")).toBeInTheDocument();
  });

  it("renders exclusive benefits correctly", () => {
    render(<GunzVip />);

    // Add assertions for the initial state of exclusive benefits
    expect(
      screen.getByText("Access to exclusive items only for V.I.Ps")
    ).toBeInTheDocument();
    expect(screen.getByText("XP/Coins Bonus")).toBeInTheDocument();
    expect(screen.getByText("V.I.P Colored Name")).toBeInTheDocument();
    expect(screen.getByText("Custom Discord Benefits!")).toBeInTheDocument();
  });

  it("displays the 'buy v.i.p' button", () => {
    render(<GunzVip />);

    // Add assertions for the existence of the 'buy v.i.p' button
    expect(screen.getByText("buy v.i.p")).toBeInTheDocument();
  });

});
