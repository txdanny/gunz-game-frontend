import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImageButtonSm from ".";

describe("ImageButtonSm Component", () => {
  it("renders button with title", () => {
    const { getByText } = render(<ImageButtonSm title="Test Button" />);
    const buttonElement = getByText("Test Button");

    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick prop when button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<ImageButtonSm onClick={onClickMock} />);
    const buttonElement = getByRole("button");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("applies custom className and style", () => {
    const { container } = render(
      <ImageButtonSm className="custom-class" style={{ color: "red" }} />
    );
    const buttonElement = container.querySelector(".custom-class");

    expect(buttonElement).toHaveClass("custom-class");
    expect(buttonElement).toHaveStyle("color: red");
  });

});
