"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react";

// Define the state type
interface GameState {
  serverStatus: "online" | "offline" | "maintain";
  level: number;
  balance: number;
}

// Define action types
type Action = { type: "INCREMENT_LEVEL" } | { type: "RESET_GAME" };

// Define the initial state
const initialState: GameState = {
  serverStatus: "online",
  level: 1,
  balance: 0,
};

// Create the context
const GameContext = createContext<{
  state: GameState;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Define the reducer function
const gameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "INCREMENT_LEVEL":
      return { ...state, level: state.level + 1 };
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};

interface Props {
  children?: ReactNode;
}
// Create the GameProvider component
export const GameProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

// Create a custom hook to use the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
