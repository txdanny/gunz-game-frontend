import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import StreamingNow from ".";

describe("StreamingNow Component", () => {
  it("renders without crashing", () => {
    render(<StreamingNow />);
    expect(screen.getByTestId("streaming-section")).toBeInTheDocument();
  });

  it("renders the correct section title", () => {
    render(<StreamingNow />);
    expect(screen.getByText("Streaming GUNZ Now")).toBeInTheDocument();
  });

  it("handles left button click correctly", () => {
    render(<StreamingNow />);
    const leftButton = screen.getByLabelText("Previous Stream");
    fireEvent.click(leftButton);
  });

  it("handles right button click correctly", () => {
    render(<StreamingNow />);
    const rightButton = screen.getByLabelText("Next Stream");
    fireEvent.click(rightButton);
  });

  it("renders the background image correctly", () => {
    render(<StreamingNow />);
    const bgImage = screen.getByTestId("streaming-bg");
    expect(bgImage).toBeInTheDocument();
  });

  it("renders the current streamer brand logo correctly", () => {
    render(<StreamingNow />);
    const brandLogo = screen.getByAltText("Brand");
    expect(brandLogo).toBeInTheDocument();
  });
});
