import { render } from "@testing-library/react";
import MobileTopBanner from ".";
import { useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("MobileTopBanner", () => {
  it("renders with tabParam", () => {
    const mockTabParam = "SomeTabParam";
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => mockTabParam,
    });

    const { getByText } = render(<MobileTopBanner />);
    expect(
      getByText(new RegExp(`${mockTabParam} RANKED LEADERBOARD`))
    ).toBeInTheDocument();
  });

  it("renders without tabParam", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => null,
    });

    const { getByText } = render(<MobileTopBanner />);
    expect(getByText(/RANKED LEADERBOARD/)).toBeInTheDocument();
  });
});
