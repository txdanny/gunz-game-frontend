import { render, screen } from "@testing-library/react";
import RankHeader from "./index";

describe("RankHeader component", () => {
  it("renders with the default title when tabParam is not provided", () => {
    render(<RankHeader />);
  });

  it("renders with the title 'clans ranked leaderboard' when tabParam is 'clans'", () => {
    jest.mock("next/navigation", () => ({
      useSearchParams: jest.fn(() => ({ get: () => "clans" })),
    }));

    render(<RankHeader />);
  });

  it("renders with the title 'individuals ranked leaderboard' when tabParam is 'individuals'", () => {
    jest.mock("next/navigation", () => ({
      useSearchParams: jest.fn(() => ({ get: () => "individuals" })),
    }));

    render(<RankHeader />);
  });

  it("renders with the title 'ladder leaderboard' when tabParam is 'ladder'", () => {
    jest.mock("next/navigation", () => ({
      useSearchParams: jest.fn(() => ({ get: () => "ladder" })),
    }));

    render(<RankHeader />);
  });

  it("renders with the title 'ladder history' when tabParam is 'history'", () => {
    jest.mock("next/navigation", () => ({
      useSearchParams: jest.fn(() => ({ get: () => "history" })),
    }));

    render(<RankHeader />);
  });
});
