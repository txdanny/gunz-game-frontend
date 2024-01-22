import { render } from "@testing-library/react";
import MobileHistoryTable from ".";
import { usePlayerData } from "@/hooks/usePlayerData";
import { useSearchParams } from "next/navigation";
import { HISTORYS } from "@/config";

jest.mock("@/hooks/usePlayerData");
jest.mock("next/navigation");

const mockHistorys = HISTORYS;

describe("MobileHistoryTable", () => {
  it('renders history data when tabParam is "history"', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => "history", // Mocking the tabParam value
    });

    (usePlayerData as jest.Mock).mockReturnValue({
      historys: mockHistorys,
      loadMore: jest.fn(),
    });
  });

  it('does not render history data when tabParam is not "history"', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => "clans", // Mocking a different tabParam value
    });

    (usePlayerData as jest.Mock).mockReturnValue({
      historys: mockHistorys,
      loadMore: jest.fn(),
    });

    const { queryByText, queryByTestId } = render(<MobileHistoryTable />);

    expect(queryByText(`${mockHistorys[0].firstPoints} Points`)).toBeNull();
  });
});
