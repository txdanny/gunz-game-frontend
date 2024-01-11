import React from "react";
import { render, screen } from "@testing-library/react";
import NavLinks from ".";
import { NAV_LINKS } from "@/config";

describe("NavLinks Component", () => {
  it("renders without crashing", () => {
    render(<NavLinks />);
    const navLinksElement = screen.getByTestId("nav-links");
    expect(navLinksElement).toBeInTheDocument();
  });

  it("renders correct number of menu items", () => {
    render(<NavLinks />);
    const menuItems = screen.getAllByTestId("nav-menu-item");
    expect(menuItems.length).toBe(NAV_LINKS.length);
  });

  it("renders correct number of submenu items", () => {
    render(<NavLinks />);
    const submenuItems = screen.getAllByTestId("submenu-item");
    const totalSubmenuItems = NAV_LINKS.reduce(
      (total, menu) => total + (menu.submenu ? menu.submenu.length : 0),
      0
    );
    expect(submenuItems.length).toBe(totalSubmenuItems);
  });

  // Cleanup after each test
  afterEach(() => {
    jest.clearAllMocks();
  });
});
