import { render } from "@testing-library/react";
import MobileLadderTable from ".";
import { usePlayerData } from "@/hooks/usePlayerData";
import { useSearchParams } from "next/navigation";

jest.mock("@/hooks/usePlayerData");
jest.mock("next/navigation");

const mockPlayers: any[] = [
  // Mock player data
];

describe("MobileLadderTable", () => {
  it('renders player data when tabParam is "ladder"', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => "ladder", // Mocking the tabParam value
    });

    (usePlayerData as jest.Mock).mockReturnValue({
      players: mockPlayers,
      loadMore: jest.fn(),
    });

    const { getByText, getByAltText, getAllByTestId } = render(
      <MobileLadderTable />
    );

    mockPlayers.forEach((player, index) => {
      expect(getByText(player?.characterName)).toBeInTheDocument();
      expect(getByText(`RANK ${player.rank}`)).toBeInTheDocument();
      expect(
        getByText(`${player.playCount.win} / ${player.playCount.lose}`)
      ).toBeInTheDocument();
      expect(getByText(player.playCount.winRate)).toBeInTheDocument();
      expect(getByText(player.points.toString())).toBeInTheDocument();
      expect(getByAltText("")).toBeInTheDocument(); // Assuming alt text is always empty
    });
  });

  it('does not render player data when tabParam is not "ladder"', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => null, // Mocking the tabParam value as null
    });

    (usePlayerData as jest.Mock).mockReturnValue({
      players: mockPlayers,
      loadMore: jest.fn(),
    });

    const { queryByText, queryByAltText, queryByTestId } = render(
      <MobileLadderTable />
    );

    expect(queryByAltText("")).toBeNull();
  });
});
