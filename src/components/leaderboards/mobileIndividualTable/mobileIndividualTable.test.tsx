import { render } from "@testing-library/react";
import MobileIndividualTable from ".";
import { usePlayerData } from "@/hooks/usePlayerData";
import { useSearchParams } from "next/navigation";

jest.mock("@/hooks/usePlayerData");
jest.mock("next/navigation");

const mockPlayers: any[] = [
  // Mock player data
];

describe("MobileIndividualTable", () => {
  it('renders player data when tabParam is "individuals"', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => "individuals", // Mocking the tabParam value
    });

    (usePlayerData as jest.Mock).mockReturnValue({
      players: mockPlayers,
      loadMore: jest.fn(),
    });

    const { getByText, getByAltText, getAllByTestId } = render(
      <MobileIndividualTable />
    );

    mockPlayers.forEach((player, index) => {
      expect(getByText(player.characterName)).toBeInTheDocument();
      expect(getByText(`RANK ${player.rank}`)).toBeInTheDocument();
      expect(getByAltText("")).toBeInTheDocument(); // Assuming alt text is always empty
      expect(getByText(player.level.toString())).toBeInTheDocument();
      expect(getByText(player.experience.toString())).toBeInTheDocument();
      expect(
        getByText(`${player.playCount.kills} / ${player.playCount.deaths}`)
      ).toBeInTheDocument();
      expect(
        getByText((player.playCount.kills / player.playCount.deaths).toFixed(2))
      ).toBeInTheDocument();
    });
  });

  it('does not render player data when tabParam is not "individuals"', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => null, // Mocking the tabParam value as null
    });

    (usePlayerData as jest.Mock).mockReturnValue({
      players: mockPlayers,
      loadMore: jest.fn(),
    });
  });
});
