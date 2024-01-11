import { render } from "@testing-library/react";
import CoinBalance from ".";

jest.mock("@/contexts/gameProvider");

describe("CoinBalance Component", () => {
  it("renders the CoinBalance component with correct balance", () => {
    // Mocking the useGame hook return value
    require("@/contexts/gameProvider").useGame.mockReturnValue({
      state: {
        balance: 1000,
      },
    });

    const { getByText, getByAltText } = render(<CoinBalance />);

    // Asserting that the component renders with the correct balance
    const balanceElement = getByText("1,000"); 
    expect(balanceElement).toBeInTheDocument();

    // Asserting that the "coin icon" is present
    const coinIcon = getByAltText(/coin icon/);
    expect(coinIcon).toBeInTheDocument();
  });
});
