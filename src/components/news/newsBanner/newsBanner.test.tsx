import { render } from "@testing-library/react";
import NewsBanner from "./";

describe("NewsBanner component", () => {
  test("renders correctly", () => {
    const { container } = render(<NewsBanner />);
    expect(container).toMatchSnapshot();
  });
});
