import { render } from "@testing-library/react";
import MobileTopBar from ".";

describe("MobileTopBar", () => {
  it("renders title correctly", () => {
    const { getByText } = render(<MobileTopBar />);
    expect(getByText("GUNZ LEADERBOARD")).toBeInTheDocument();
  });

  it("renders rank icon", () => {
    const { getByAltText } = render(<MobileTopBar />);
    expect(getByAltText("")).toBeInTheDocument();
  });
});
