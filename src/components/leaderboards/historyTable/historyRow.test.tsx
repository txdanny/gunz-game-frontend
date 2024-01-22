import { render } from "@testing-library/react";
import HistoryTable from ".";
import { usePlayerData } from "@/hooks/usePlayerData";
import { useSearchParams } from "next/navigation";
import { HISTORYS } from "@/config";

jest.mock("@/hooks/usePlayerData");
jest.mock("next/navigation");

const mockHistorys = HISTORYS;

describe("HistoryTable", () => {
  it('renders history table when tabParam is "history"', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => "history", // Mocking the tabParam value
    });

    (usePlayerData as jest.Mock).mockReturnValue({
      historys: mockHistorys,
      loadMore: jest.fn(),
    });
  });

  it('does not render history table when tabParam is not "history"', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: () => "clans", // Mocking a different tabParam value
    });

    (usePlayerData as jest.Mock).mockReturnValue({
      historys: mockHistorys,
      loadMore: jest.fn(),
    });
  });
});
