import { render } from "@testing-library/react";
import NewsSeenAll from ".";

jest.mock("next/navigation", () => ({
  useSearchParams: jest
    .fn()
    .mockReturnValue({ get: jest.fn().mockReturnValue("blogPosts") }),
}));

describe("NewsSeenAll component", () => {
  test("renders correctly when tabParam is blogPosts", () => {
    const { getByText, getByAltText } = render(<NewsSeenAll />);
    expect(getByText("You're all caught up!")).toBeInTheDocument();
    expect(getByAltText("Illustration")).toBeInTheDocument();
  });

  test("does not render when tabParam is not blogPosts", () => {
    jest.spyOn(window, "location", "get");
  });
});
