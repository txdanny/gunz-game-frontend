import { render } from "@testing-library/react";
import SearchButton from ".";
import { CSSProperties } from "react";

interface TestArguments {
  title: string | number;
  name: string;
  rank: string | number;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const describeTestData: TestArguments[] = [
  {
    title: "Search",
    name: "John Doe",
    rank: 10,
    className: "search-button",
    style: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
    onClick: () => console.log("Clicked"),
  },
  {
    title: "Sort",
    name: "Jane Doe",
    rank: 20,
    className: "search-button gradient-normal hover",
    style: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
    onClick: () => console.log("Sorted"),
  },
];

describe("SearchButton", () => {
  for (const {
    title,
    name,
    rank,
    className,
    style,
    onClick,
  } of describeTestData) {
    it(`should render correctly for ${title}`, () => {
      const { getByText } = render(
        <SearchButton
          title={title}
          name={name}
          rank={rank}
          className={className}
          style={style}
          onClick={onClick}
        />
      );
      expect(getByText(name)).toBeInTheDocument();
    });
  }
});
