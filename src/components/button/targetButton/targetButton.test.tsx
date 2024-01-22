import { render } from "@testing-library/react";
import TargetButton from ".";
import { CSSProperties } from "react";

interface TestArguments {
  title: string | number;
  className: string;
  style: CSSProperties;
  onClick: () => void;
}

const describeTestData: TestArguments[] = [
  {
    title: "Search",
    className: "search-button",
    style: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
    onClick: () => console.log("Clicked"),
  },
  {
    title: "Sort",
    className: "sort-button",
    style: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
    onClick: () => console.log("Sorted"),
  },
];

describe("TargetButton", () => {
  for (const { title, className, style, onClick } of describeTestData) {
    it(`should render correctly for ${title}`, () => {
      const { getByText } = render(
        <TargetButton
          title={title}
          className={className}
          style={style}
          onClick={onClick}
        />
      );
    });
  }
});
