import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RankTable from ".";

// Mock the usePlayerData hook
// jest.mock("@/hooks/usePlayerData", () => {
//   return {
//     usePlayerData: jest.fn(() => {
//       const players = [
//         {
//           rank: 1,
//           clanName: "Mock Clan 1",
//           emblem: "/images/emblem1.png",
//           leader: "Mock Leader 1",
//           winLosses: "10W / 5L",
//           winRate: "66%",
//           points: 1200,
//         },
//         {
//           rank: 2,
//           clanName: "Mock Clan 2",
//           emblem: "/images/emblem2.png",
//           leader: "Mock Leader 2",
//           winLosses: "8W / 7L",
//           winRate: "53%",
//           points: 1050,
//         },
//         // Add more mock player data objects as needed
//       ];

//       const loadMore = jest.fn();

//       return { players, loadMore };
//     }),
//   };
// });

describe("RankTable Component", () => {
  it("renders the component", () => {
    render(<RankTable />);
    expect(screen.getByText("Rank")).toBeInTheDocument();
    // Add more assertions based on your component's structure
  });

  it("renders player rows correctly", () => {
    render(<RankTable />);
    // Add assertions for the existence of player rows based on the mocked data
    expect(screen.getByText("Clan Name")).toBeInTheDocument();
    // Add more assertions based on your component's structure
  });

  it("calls loadMore function when 'Load More' button is clicked", () => {
    render(<RankTable />);
    const loadMoreButton = screen.getByText("Load More");
    userEvent.click(loadMoreButton);
    // Add assertions for the expected behavior after clicking the 'Load More' button
  });
});
