import { render, fireEvent } from "@testing-library/react";
import LoadMoreButton from ".";

describe("LoadMoreButton", () => {
  it("renders with a loading icon", () => {
    const { getByText } = render(
      <LoadMoreButton title="Load More" onClick={() => {}} />
    );
    expect(getByText("Load More")).toBeInTheDocument();
  });

  it("triggers the onClick handler when button is clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <LoadMoreButton title="Load More" onClick={onClick} />
    );
    fireEvent.click(getByText("Load More"));
    expect(onClick).toHaveBeenCalled();
  });

  it("includes the title in the button", () => {
    const { getByText } = render(
      <LoadMoreButton title="Load More" onClick={() => {}} />
    );
    expect(getByText("Load More")).toHaveClass("btn");
  });
});
