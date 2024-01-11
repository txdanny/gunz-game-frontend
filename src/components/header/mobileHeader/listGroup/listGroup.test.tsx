import { render, screen, fireEvent } from "@testing-library/react";
import ListGroup from ".";

// Mock data for testing
const mockNavLink = {
  title: "Group Title",
  url: "#",
  submenu: [
    { title: "Submenu Item 1", url: "/submenu1" },
    { title: "Submenu Item 2", url: "/submenu2" },
  ],
};

describe("ListGroup component", () => {
  it("renders ListGroup component with provided data", () => {
    render(<ListGroup list={mockNavLink} />);

    // Check if the title is rendered
    const titleElement = screen.getByText(mockNavLink.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the submenu items are rendered
    mockNavLink.submenu?.forEach((subMenuItem) => {
      const linkElement = screen.getByText(subMenuItem.title);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("toggles the list-box height on click", () => {
    render(<ListGroup list={mockNavLink} />);

    // Initial height should be 0
    const listBoxElement = screen.getByTestId("list-box");
    expect(listBoxElement).toHaveStyle({ height: "0" });

    // Click on the component to toggle the height
    fireEvent.click(screen.getByTestId("list-group"));

    // Height should now be "auto"
    expect(listBoxElement).toHaveStyle({ height: "auto" });

    // Click again to toggle back to 0
    fireEvent.click(screen.getByTestId("list-group"));
    expect(listBoxElement).toHaveStyle({ height: "0" });
  });
});
