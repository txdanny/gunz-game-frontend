import { render, fireEvent, waitFor } from "@testing-library/react";
import PageTabButton from ".";

interface TestArguments {
  handleTabClick: (tabName: string) => void;
  tabName: string;
  tabText: string;
  active?: boolean;
  leftDisableActiveState?: boolean;
  rightDisableActiveState?: boolean;
}

const beskrevTestData: TestArguments[] = [
  {
    handleTabClick: () => void 0,
    tabName: "clans",
    tabText: "Clans",
    active: true,
    leftDisableActiveState: false,
    rightDisableActiveState: false,
  },
  {
    handleTabClick: () => void 0,
    tabName: "world",
    tabText: "World",
    active: false,
    leftDisableActiveState: true,
    rightDisableActiveState: false,
  },
  {
    handleTabClick: () => void 0,
    tabName: "日本",
    tabText: "Japan",
    active: true,
    leftDisableActiveState: false,
    rightDisableActiveState: true,
  },
];

describe("PageTabButton", () => {
  for (const {
    handleTabClick,
    tabName,
    tabText,
    active,
    leftDisableActiveState,
    rightDisableActiveState,
  } of beskrevTestData) {
    it(`should render correctly for tabName="${tabName}"`, () => {
      const { getByText } = render(
        <PageTabButton
          handleTabClick={handleTabClick}
          tabName={tabName}
          tabText={tabText}
          active={active}
          leftDisableActiveState={leftDisableActiveState}
          rightDisableActiveState={rightDisableActiveState}
        />
      );
      expect(getByText(tabText)).toBeInTheDocument();
    });
  }
});
