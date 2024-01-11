import { render, screen, fireEvent } from "@testing-library/react";
import TopBar from ".";

describe("TopBar component", () => {
  test("renders TopBar component", () => {
    // Arrange
    const setOpenedMock = jest.fn();

    // Act
    render(<TopBar opened={false} setOpened={setOpenedMock} />);

    // Assert
    const logoElement = screen.getByAltText("");
    expect(logoElement).toBeInTheDocument();

    const openButtonElement = screen.getByTestId("btn-open");
    expect(openButtonElement).toBeInTheDocument();
  });

  test("calls setOpened when open button is clicked", () => {
    // Arrange
    const setOpenedMock = jest.fn();

    // Act
    render(<TopBar opened={false} setOpened={setOpenedMock} />);
    const openButtonElement = screen.getByTestId("btn-open");
    fireEvent.click(openButtonElement);

    // Assert
    expect(setOpenedMock).toHaveBeenCalledWith(true);
  });

  test("calls setOpened when close button is clicked", () => {
    // Arrange
    const setOpenedMock = jest.fn();

    // Act
    render(<TopBar opened={true} setOpened={setOpenedMock} />);
    const closeButtonElement = screen.getByTestId("btn-close");
    fireEvent.click(closeButtonElement);

    // Assert
    expect(setOpenedMock).toHaveBeenCalledWith(false);
  });
});
