import React from "react";
import { render } from "@testing-library/react";
import ZCoins from ".";

describe("ZCoins Component", () => {
  it("should render ZCoins component", () => {
    // Arrange
    const { getByTestId, getByText } = render(<ZCoins />);

    // Act
    const zcoinsSection = getByTestId("zcoins-section");
    const bgImage = getByTestId("zcoins-bg");
    const titleElement = getByTestId("z-coins");
    const descriptionElement = getByTestId("z-description");
    const buyZCoinsButton = getByText("buy z coins");
    const premiumShopButton = getByText("premium shop");
    const vipShopButton = getByText("v.i.p shop");

    // Assert
    expect(zcoinsSection).toBeInTheDocument();
    expect(bgImage).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(buyZCoinsButton).toBeInTheDocument();
    expect(premiumShopButton).toBeInTheDocument();
    expect(vipShopButton).toBeInTheDocument();
  });
});
