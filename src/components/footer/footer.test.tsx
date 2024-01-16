import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  it("renders the component", () => {
    render(<Footer />);
    expect(screen.getByText("join our community")).toBeInTheDocument();
  });

  it("renders CTA links correctly", () => {
    render(<Footer />);

    // Add assertions for the existence of CTA links
    expect(screen.getByText("download the game")).toBeInTheDocument();
    expect(screen.getByText("create an account")).toBeInTheDocument();
  });

  it("displays social icons in the community section", () => {
    render(<Footer />);
  });

  it("displays copyright information", () => {
    render(<Footer />);

    // Add assertions for the existence of copyright information
    expect(
      screen.getByText(
        "© 2023 GUNZ. ALL RIGHTS RESERVED. © 2023 GOSU. ALL RIGHTS RESERVED. Trademarks referenced herein belong to their respective owners."
      )
    ).toBeInTheDocument();
  });

  it("displays links to privacy policy and terms of use", () => {
    render(<Footer />);

    // Add assertions for the existence of links to privacy policy and terms of use
    expect(screen.getByText("privacy policy")).toBeInTheDocument();
    expect(screen.getByText("terms of use")).toBeInTheDocument();
  });
});
