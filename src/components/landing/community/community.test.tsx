import React from "react";
import { render, screen } from "@testing-library/react";
import Community from ".";
import { SOCIALS } from "@/config";

describe("Community Component", () => {
  it("renders the component", () => {
    render(<Community />);
    expect(screen.getByText("GunZ Community")).toBeInTheDocument();
  });

  it("renders community information correctly", () => {
    render(<Community />);

  });

  it("navigates to news & articles and game guide", () => {
    render(<Community />);

    // Add assertions for the existence of the 'news & articles' and 'game guide' links
    expect(
      screen.getByRole("link", { name: "news & articles" })
    ).toHaveAttribute("href", "#");
    expect(screen.getByRole("link", { name: "game guide" })).toHaveAttribute(
      "href",
      "#"
    );
  });
});
