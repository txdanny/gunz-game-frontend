import React from "react";
import { render } from "@testing-library/react";
import ServerStatus from ".";

jest.mock("@/contexts/gameProvider", () => ({
  useGame: jest.fn(() => ({
    state: {
      serverStatus: "mockedStatus",
    },
  })),
}));

describe("ServerStatus Component", () => {
  it("renders server status correctly", () => {
    const { getByText } = render(<ServerStatus />);
    const titleElement = getByText("Server Status");
    const statusElement = getByText("mockedStatus");

    expect(titleElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
  });

  // Add more test cases as needed
});
